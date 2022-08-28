import { useState } from 'react'
import './index.css'

export function SelectRole({deploy, attach}){
  const [ deployer, setDeployer ] = useState(false)
  const [ subs, setSubs ] = useState(2)
  const [ price, setPrice ] = useState(1)
  return(
    <div className='section'>
      {
        deployer ? 
        <>
          <p>Set Parameters</p>
          <div className='form-row'>
            <small>Price(ALGO): </small>
            <input
              type={'number'}
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </div>
          <div className='form-row'>
            <small>Max number of subscribers: </small>
            <input
              type={'number'}
              value={subs}
              onChange={e => setSubs(e.target.value)}
            />
          </div>
          <button onClick={() => deploy(parseInt(price), parseInt(subs))} className='button'>Next</button>
          
        </>
        :
        <>
          <button className='button' onClick={() => setDeployer(true)}>Deploy Contract</button>
          <hr />
          <button className='button' onClick={() => attach()}>Attach to existing contract</button>
        </>
      }
    </div>
  )
}