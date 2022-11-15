import React from 'react'
import h2 from '../h2.png'

const About = () => {
  return (
    < >

      <div style={{backgroundColor:'#13D2AC'}}>.
            <div style={{marginTop:"3rem",marginLeft:'33rem',fontWeight:'500' , fontSize:'4rem' ,color:'#F8F9F4',marginDown:"3rem"}}>ABOUT US</div>
     
      

      <div style={{backgroundColor:"#13D2AC", marginLeft:"7rem",marginTop:'3rem' ,display:"flex"}}>
     
      <img src={h2} width="500rem" height="275rem" alt="img"/>
      <span style={{color:'#0B2653',fontWeight:'600',marginLeft:'5rem',fontSize:'1.4rem',marginTop:'2rem',marginRight:"1rem"}}>
      Skyware envisions a future with zero post harvest storage losses. Currently 1 Billion MT of food is
wasted annually during the processing stage. Skyware holds the virtue to turn the tables around this
problem with its high-tech IoT and AI-based scientific storage solutions. The likes of our
storage solutions don’t exist in the Indian Markets.
        </span>
      
      
        </div>
        <div style={{marginTop:"5.5rem"}}>.</div>
        
        </div>



    </>
  )
}

export default About