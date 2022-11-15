import React from 'react'
import h10 from '../h10.png'
import BackdropFilter from 'react'

const Solutions = () => {
  return (
    <div style={{backgroundColor:"#F8F9F4" ,border:"0.5rem solid black"}}>
        <div style={{color:"#0b2653",fontSize:"5rem",marginLeft:"30rem",marginTop:"2rem"}}>SOLUTIONS</div>
        <div style={{display:"flex",margin:"3rem"}}>
      
            <div style={{backgroundColor:"#0b2653",backgroundFilter:"",width:"40rem",height:"20rem",color:"#F8F9F4",fontSize:"1rem",padding:"2rem",paddingDown:"1rem"}}>The working of our SAAS based products are simple yet revolutionary. Our devices equipped with
various sensors, placed in the storage unit will be responsible for monitoring the climatic condition
for the commodities in the warehouse and defining the health parameters for it accordingly. Real-time
analysis of the light, moisture, temperature, gaseous activities, insects, microbial activities, etc, shall
be carried out at all times by the devices. They come with remote accessibility that can be used with
the help of our software on smartphones and computers connected to the internet.</div>
            <div style={{marginLeft:"6rem",marginBottom:"1rem"}}>
            <img src={h10} width="530rem" height="300rem" alt="img"/>
            </div>
        </div>
    </div>
  )
}

export default Solutions