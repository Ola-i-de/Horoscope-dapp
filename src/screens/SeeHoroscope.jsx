import { useState } from "react"

export function SeeHoroscope({check, horoscope, price, end}){
  const [ date, setDate ] = useState(Date.now())
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    setError(false)
    const response = await check(`${date}`)
    setLoading(false)
    if(response===false){
      setError(true)
    }
  }
  return(
    <div className="section">
      { horoscope && <p className="horoscope">{horoscope}</p> }
      <div className="calendar-form">
        <label>Pick date of birth</label>
        <input
          className="date"
          type={'date'}
          onChange={  e => {
            const d = new Date(e.target.value)
            const timeStamp = d.getTime()
            setDate(timeStamp)
          }}
        />
        <button
          disabled={loading || end}
          onClick={handleSubmit} 
          className="button"> 
            { loading ? 'Checking...' : 'Check Horoscope'}
        </button>
        <hr style={{width: '100%', margin: '15px 0px'}}/>
        <small style={{fontSize: '18px'}}>Cost of checking Horoscope is {price} ALG</small>
        <small style={{fontSize: '18px'}}>After submitting your date of birth, kindly wait for response</small>

        {
          error &&
          <>
            <hr style={{width: '1%', marginTop: '35px 0px'}}/>
            <small style={{fontSize: '15px', color: 'orange'}}>There was an error submitting date of birth</small>
          </>
        }

        {
          end &&
          <>
            <hr style={{width: '1%', marginTop: '35px 0px'}}/>
            <small style={{fontSize: '15px', color: 'orange'}}>Horoscope is no longer available</small>
          </>
        }
      </div>
    </div>
  )
}