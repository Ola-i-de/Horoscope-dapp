import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno } from '@reach-sh/stdlib/ask.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);
const acc = await stdlib.newTestAccount(startingBalance);

//Set up functions for checking balance
const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));

const before = await getBalance()
console.log('Your starting balance is: ' + before)
console.log(`Your address is ${acc.getAddress()}`)

const Oracle = {
  price: 10,

  subscribers: 3,

  horoscope: (dob) => {
    console.log(`${dob} just asked to see his horoscope`)
    return `You're not a capricorn Brenda. you're just a cunt`
  },

  end: async () => {
    console.log(`Your current balance is ${await getBalance()}`)
  }
}

const UserView = {
  seeHoroscope: (post) => {
    console.log('----------NEW HOROSCOPE----------');
    console.log(post)
    console.log('----------------------------');
  }
}



const createStream = async () => {
  const isOwner = await ask(
    `Do you want to create a horoscope site?`,
    yesno
  );
  const who = isOwner ? 'Oracle' : 'User';

  console.log(`Starting as ${who}`);

  let ctc = null;
  if (isOwner) {
    const price = await ask('How much is your subscription price?', parseFloat)
    const subscribers = await ask('How many subscribers do u accept?', parseInt)
    ctc = acc.contract(backend);
    backend.Oracle(ctc, {
      ...Oracle,
      price,
      subscribers
    })
    console.log('Deploying Horoscope...');
    const info = JSON.stringify(await ctc.getInfo(), null, 2);
    console.log('Contract info..')
    console.log(info);

  } 
  else {
    const info = await ask(
      `Please paste the contract information of the blog you want to subscribe to:`,
      JSON.parse
    );
    ctc = acc.contract(backend, info);
    let subscribed = false

    backend.UserView(ctc, UserView);

    console.log("...Successfully Connected...")
      const check = await ask('Do you want to check your horoscope?', yesno)
      if(check){
        const dob = await ask('Whats your dob? 5 characters max')
        const horoscope = await ctc.apis.Users.getHoroscope(dob);
      }
  }
};

await createStream();