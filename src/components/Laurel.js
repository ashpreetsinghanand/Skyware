import React from 'react'
import Profile from './Profile';


const Laurel = () => {
  return (
    <>


      <div className='AppCard' style={{display:'flex'}}>
      <div className='a' style={{backgroundColor:"#13d2ac",width:"30rem",height:"38rem"}}>.
      <div style={{marginTop:"9rem",marginLeft:"3rem"}}>
        <Profile 
          name = "One of the top 6 finalists at the Together 2022 Entrepreneurial Bootcamp"
        />
        </div>
        </div>
        
        <div className='a' style={{backgroundColor:"#f8f9f4",width:"30rem"}}>
     
      <div style={{marginBottom:"6rem",marginLeft:"8rem",fontSize:"4rem"}}>Laurels</div>
      <div style={{marginTop:"10rem",marginLeft:'1.5rem',paddingLeft:"1.5rem"}}>
        <Profile 
          name = "We are recognized in the top 50 international startups under the BSSC Startup Wheel Competition in Vietnam"/>
        </div>
        </div>
        <div className='a' style={{backgroundColor:"#13d2ac"}}>
      <div style={{marginTop:"9rem",marginRight:"3.5rem",marginLeft:"1.5rem",paddingLeft:"1.5rem",paddingBottom:"1rem"}}>
        <Profile 
          name = "We were awarded as the winner of I5 summit 2021, 7th edition of India's largest entrepreneurship summit hosted by IIM Indore."
         
        />
        </div>
        </div>
      </div>
    </>
  )
}

export default Laurel