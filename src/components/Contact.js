import React from 'react'
import './Contact.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Contact = () => {
  return (<>
    <div style={{backgroundColor:"#F8F9F4",color:"#F8F9F4"}}>.

           <div style={{marginTop:"3rem",marginLeft:"9rem",fontSize:"5rem",color:"#00AD8B"}}>CONTACT <span style={{color:"#0b2653"}}>US</span></div>
            
            <div style={{display:"flex",marginTop:"2rem"}}>
                       <div style={{color:"#00AD8B",marginLeft:"10rem",marginRight:"5rem"}}>
                           <div style={{color:"#0b2563",width:"20rem",}}><MailOutlineIcon className="svg_icons" /> &nbsp;
                                  <span style={{color:"#00ad8b",marginLeft:"1rem",fontSize:"2rem",marginTop:"1rem"}}>info@skyware.in</span>
                            </div>


                            <div style={{color:"#0b2563",width:"20rem",marginTop:"1rem"}}><PhoneIcon className="svg_icons" /> &nbsp;
                                  <span style={{color:"#00ad8b",marginLeft:"1rem",fontSize:"2rem",marginTop:"1rem"}}>+91 98689 3339</span>
                            </div>

                            <div style={{color:"#0b2563",width:"20rem",marginTop:"1rem"}}><LocationOnIcon className="svg_icons" /> &nbsp;
                                  <span style={{color:"#00ad8b",marginLeft:"1rem",fontSize:"2rem",marginTop:"1rem"}}>New Delhi</span>
                            </div>

                            <div style={{color:"#0b2563",width:"25rem",marginTop:"1rem"}}><LinkedInIcon className="svg_icons" /> &nbsp;
                                  <span style={{color:"#00ad8b",marginLeft:"1rem",fontSize:"2rem",marginTop:"5rem"}}>Skyware Automation</span>
                            </div>


                            <div style={{color:"#0b2563",width:"20rem",marginTop:"1rem"}}><TwitterIcon className="svg_icons" /> &nbsp;
                                  <span style={{color:"#00ad8b",marginLeft:"1rem",fontSize:"2rem",marginTop:"1rem"}}>TeamSkyware</span>
                            </div>

                       </div>

                       <div style={{color:"#00AD8B",marginLeft:"10rem"}}>
                            <form className="form" >

                                <input color='#00AD8B' placeholder='name'/>
                                <input color='#00AD8B' placeholder='email'/>
                                <input className='message' color='#00AD8B' placeholder='message'/>
                                <div>
            <button style={{color:'#F8F9F4' , backgroundColor: '#13D2AC' ,width:'11rem', height:'3rem',fontSize:"1.8rem",marginTop:'0.5rem',marginRight:'3rem',textAlign:'left',paddingLeft:"1rem"}}>submit &nbsp;&nbsp;<span style={{
                width:'2rem',height:'2rem',borderRadius:'50%',backgroundColor:'#F8F9F4',color:'#13D2AC'
            }}>➡</span>
            
            </button>
            </div>
                            </form>
            </div>

            </div>
            .
    </div>
    </>

  )
}

export default Contact