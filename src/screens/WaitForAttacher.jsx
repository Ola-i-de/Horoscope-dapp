import './index.css'

export function WaitForAttacher({info, checks, end}){
  
  return(
    <div className='section' style={{display: 'flex', flexDirection: 'column'}}>
      <h6>Contract Address: {info}</h6>
      <hr style={{width: '100%'}}/>
      {
        checks.length !== 0? 
          checks.map((item, index) => (
            <p key={index}>User born on {item.dob} whose sign is {item.zodiac} just checked his horoscope</p>
          ))
          :
          <p>No user has checked his horoscope yet</p>
      }
      {
        end &&
        <>
          <hr style={{width: '1%', marginTop: '35px 0px'}}/>
          <small style={{fontSize: '18px', color: 'orange'}}>Maximum allowed number of horoscope checks attained.</small>
          <small style={{fontSize: '18px', color: 'orange'}}>Total subscription revenue has been sent to your wallet.</small>
        </>
        }
    </div>
  )
}