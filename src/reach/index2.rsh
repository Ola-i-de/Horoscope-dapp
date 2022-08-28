'reach 0.1'
export const main = Reach.App(() => {
    const Oracle = Participant('Oracle', {
        Nftid: Token,
        horoscope: Fun([Bytes(600), UInt], Bytes(600)),
        notpay: Fun([Bool], Null),
        seePayment: Fun([Bool], Null)
    })
    const Users = API('Users', {
        getnft: Fun([UInt, Bool], Null),
        getdetails: Fun([Bytes(600), UInt], Null),
    })
    init()
    Oracle.only(() => {
        const NftId = declassify(interact.Nftid)
    })

    Oracle.publish(NftId)
    const [Userid, payamt, payed_check, addresses] =
        parallelReduce([0, 0, Array.replicate(5, false), Array.replicate(5, Oracle)])
            .invariant(balance(NftId) == 0 && balance() == payamt)
            .while(Userid < 5)
            .api(Users.getnft,
                (p, c) => {
                    check(p > 0)
                    check(c != false)
                },
                (p, _) => p,
                (p, c, k) => {
                    k(null);
                    const who = this
                    return [Userid + 1, payamt + p, payed_check.set(Userid, c), addresses.set(Userid, who)];
                })
    const a = Bytes(600).pad('w')
    const [userid, names, age_range] =
        parallelReduce([0, Array.replicate(5, a), Array.replicate(5, 0)])
            .invariant(balance(NftId) == 0 && balance() == payamt)
            .while(userid < 5)
            .api(Users.getdetails,
                (n, d, k) => {
                    k(null);
                    return [userid + 1, names.set(userid, n), age_range.set(userid, d)];
                })
    var [id, list_address, name, age, paid] = [1, addresses, names, age_range, payed_check]
    invariant(balance(NftId) == 0 && balance() == payamt)
    while (id < 6) {
        commit()
        const [Ad1, Ad2, Ad3, Ad4, Ad5] = list_address
        const [name1, name2, name3, name4, name5] = name
        const [user1age_range, user2age_range, user3age_range, user4age_range, user5age_range] = age
        const [check_u1, check_u2, check_u3, check_u4, check_u5] = paid

        const payyy =
            id == 1 ? check_u1 :
                id == 2 ? check_u2 :
                    id == 3 ? check_u3 :
                        id == 4 ? check_u4 :
                            check_u5
        const range =
            id == 1 ? user1age_range :
                id == 2 ? user2age_range :
                    id == 3 ? user3age_range :
                        id == 4 ? user4age_range :
                            user5age_range
        const nam =
            id == 1 ? name1 :
                id == 2 ? name2 :
                    id == 3 ? name3 :
                        id == 4 ? name4 :
                            name5
        const addd =
            id == 1 ? Ad1 :
                id == 2 ? Ad2 :
                    id == 3 ? Ad3 :
                        id == 4 ? Ad4 :
                            Ad5
        Oracle.only(() => {
            const checking_pay = declassify(interact.seePayment(payyy))
        })
        Oracle.publish(checking_pay)
        if (checking_pay) {
            commit()
            Oracle.only(() => {
                const send_horoscope = declassify(interact.horoscope(nam, range))
            })
            Oracle.publish(send_horoscope)
                .pay([[1, NftId]])
            transfer([[1, NftId]]).to(addd)

        } else {
            Oracle.only(() => {
                const notpaid = declassify(interact.notpay(checking_pay))
            })
            Oracle.publish(notpaid)
        }
        [id, list_address, name, age, paid] = [id + 1, list_address, name, age, paid]
        continue
    }
    transfer(balance()).to(Oracle)
    commit()
})
