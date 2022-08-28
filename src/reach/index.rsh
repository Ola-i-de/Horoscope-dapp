'reach 0.1'
export const main = Reach.App(() => {
    const Oracle = Participant('Oracle', {
        price: UInt,
        subscribers: UInt,
        horoscope: Fun([Bytes(150)], Bytes(600)),
        end: Fun([], Null)
    });
    const UserView = ParticipantClass('UserView', {
      seeHoroscope: Fun([Bytes(600)], Null),
      seePrice: Fun([UInt], Null),
      end: Fun([], Null)
    });

    const Users = API('Users', {
        getHoroscope: Fun([Bytes(150)], Bool), //dob(dd/mm) => true
    });
    init();
    Oracle.only(() => {
        const price = declassify(interact.price);
        const subscribers = declassify(interact.subscribers);
    });

    Oracle.publish(price, subscribers);

    UserView.interact.seePrice(price);

    const [ counter] =
    parallelReduce([ 0 ])
      .invariant(balance() == counter * price * 1000000)
      .while(counter < subscribers)
      .api_(Users.getHoroscope, (dob) => {
        check( this != Oracle);

        return [price * 1000000, (resolve) => {
          resolve(true);
          const userAddress = this;
          commit();
          Oracle.only(() => {
            const horoscope = declassify(interact.horoscope(dob));
          });
          Oracle.publish(horoscope);

          UserView.only(() => {
            const subAddress = this;
            if(subAddress === userAddress){
              interact.seeHoroscope(horoscope);
            }
          });

          return [ counter + 1];
        }];
      });
    
    Oracle.interact.end();
    UserView.interact.end();

    transfer(balance()).to(Oracle);
    commit()
})
