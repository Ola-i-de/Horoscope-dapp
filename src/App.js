import './App.css';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import * as backend from './reach/build/index.main.mjs'
import { useState } from 'react';
import { views, Loader } from './utils/';
import { ConnectAccount, PasteContractInfo, SelectRole, WaitForAttacher } from './screens';
import { fetchHoroscope } from './utils/horoscope';
import { SeeHoroscope } from './screens/SeeHoroscope';


const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback( { providerEnv: 'TestNet', MyAlgoConnect } ));

function App() {
  const [ account, setAccount ] = useState({})
  const [ contract, setContract ] = useState()
  const [ view, setView ] = useState(views.CONNECT_ACCOUNT)
  const [ contractInfo, setContractInfo ] = useState('{blah blah}')
  const [ price, setPrice ] = useState(0)
  const [ horoscope, setHoroscope ] = useState('')
  const [ checks, setChecks ] = useState([
    // { dob: '02 September 1996', zodiac: 'Sagittarius'},
    // { dob: '02 September 1996', zodiac: 'Sagittarius'},
    // { dob: '02 September 1996', zodiac: 'Sagittarius'},
    // { dob: '02 September 1996', zodiac: 'Sagittarius'}
  ])
  const [ end, setEnd ] = useState(false)

  const reachFunctions = {
    connect: async (secret, mnemonic = false) => {
      let result = ""
      try {
        const account = mnemonic ? await reach.newAccountFromMnemonic(secret) : await reach.getDefaultAccount();
        setAccount(account);
        setView(views.DEPLOY_OR_ATTACH);
        result = 'success';
      } catch (error) {
        result = 'failed';
      }
      return result;
    },

    deploy: async (price, subscribers) => {
      const contract = account.contract(backend);
      backend.Oracle(contract, {
        ...Oracle,
        price,
        subscribers
      });
      setView(views.DEPLOYING);
      const ctcInfo = JSON.stringify(await contract.getInfo(), null, 2)
      setContractInfo(ctcInfo);
      setView(views.WAIT_FOR_ATTACHER)
    },

    attach: (contractInfo) => {
      const contract = account.contract(backend, JSON.parse(contractInfo));
      setContract(contract)
      backend.UserView(contract, UserView)
      setView(views.ATTACHING)
    }
  }

  //Participant Objects
  const Oracle = {
    horoscope: async (dob) => { //timestamp
      const { sign, horoscope } = fetchHoroscope(parseInt(dob))
      const parseDate =  new Date(parseInt(dob)).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
      setChecks(c => {
        const copy = [...c]
        copy.push({dob: parseDate, zodiac: sign})
        return copy
      })
      return `Your sign is ${sign}. ${horoscope}`
    },

    end: () => {
      setEnd(true)
    }
  }

  const UserView = {
    end: () => {
      setEnd(true)
    },

    seePrice: (priceHex) => {
      const p = parseFloat(priceHex)
      setPrice(p)
      setView(views.SEE_HOROSCOPE)
    },

    seeHoroscope: (h) => {
      setHoroscope(h)
    }
  }
  
  return (
    <div className="App">
      <div className='background-image'></div>
      <div className='top'>
        <h1>HOROSCOPE</h1>
      </div>
      <header className="App-header">
        {
          view === views.CONNECT_ACCOUNT && 
          <ConnectAccount connect={reachFunctions.connect}/>
        }

        {
          view === views.DEPLOY_OR_ATTACH &&
          <SelectRole deploy={reachFunctions.deploy} attach={() => setView(views.PASTE_CONTRACT_INFO)}/>
        }

        {
          (view === views.DEPLOYING || view === views.ATTACHING) &&
          <Loader />
        }

        {
          view === views.PASTE_CONTRACT_INFO &&
          <PasteContractInfo attach={reachFunctions.attach}/>
        }

        {
          view === views.WAIT_FOR_ATTACHER &&
          <WaitForAttacher info={contractInfo} checks={checks} end={end}/>
        }

        {
          view === views.SEE_HOROSCOPE &&
          <SeeHoroscope
            end={end}
            price={price} 
            horoscope={horoscope} 
            check={ async dob => {
              setHoroscope()
              try {
                await contract.apis.Users.getHoroscope(dob)
                return true
              } catch (error) {
                console.log(error)
                return false
              }
            }}
          />
        }

        
      </header>
    </div>
  );
}

export default App;
