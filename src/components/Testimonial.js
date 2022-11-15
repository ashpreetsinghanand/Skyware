import React from 'react'
import './Tesimonials.css'
import h13 from '../h13.png'
import h14 from '../h14.png'


const Testimonial = () => {
  return (
    <>
        <div style={{backgroundColor:"#f8f9f4"}}>.
           <div className='cac' style={{color:"#0b2563",fontSize:"4rem",marginTop:"2rem",marginLeft:"5rem",width:"30rem",height:"6rem",textAlign:"center"}}>
              TESTIMONIALS
           </div>
           <div style={{display:'flex'}}>
                  <div style={{marginLeft:"5rem",marginTop:"10rem",marginBottom:"4rem"}}>
                         <div className='ani' style={{border:"3px solid #0b2563",backgroundColor:"#13d2ac",width:"35rem",height:"15rem",padding:"1rem"}}>

                            <div style={{display:"flex"}}>
                            <div style={{width:"41rem",height:"10rem",backgroundColor:"black",marginTop:"1rem"}}>
                                        <img src={h13} alt="img"/>

                                       </div>

                                       <div style={{marginLeft:"1.5rem",fontSize:"1.1rem",color:"#0b2563"}}>“India has changed its mindset to move from incremental changes to transformational changes. The
Central Warehousing Corporation and Food Corporation of India are working on modern crop storage plans for the benefit of farmers.”
<div style={{marginTop:"1rem",marginLeft:"1rem",fontSize:"0.8rem"}}>
                                       Ministry for Consumer Affairs, Food and Public Distribution.
                                       </div>
</div>

                            </div>
                         </div>
                  </div>

                  <div style={{marginLeft:"3rem",marginTop:"1rem",marginBottom:"4rem"}}>
                         <div className='ash' style={{border:"3px solid #0b2563",backgroundColor:"#13d2ac",width:"35rem",height:"15rem",padding:"1rem"}}>

                            <div style={{display:"flex"}}>
                            <div style={{width:"41rem",height:"9rem",backgroundColor:"black",marginTop:"1rem"}}>
                                        <img src={h14} alt="img"/>

                                       </div>

                                       <div style={{marginLeft:"1.5rem",fontSize:"1.1rem",color:"#0b2563"}}>The Centre has developed an online portal to collect details about private and government
warehouses, a move that will enable the monitoring of storage availability on a real time basis.
           <div style={{marginTop:"2.5rem",marginLeft:"1rem",fontSize:"0.8rem"}}>senior Food Ministry Official said on 29th Jun 2021.</div>
</div>
                                    
                            </div>
                         </div>
                  </div>


           </div>
      
        </div>
    </>
  )
}

export default Testimonial