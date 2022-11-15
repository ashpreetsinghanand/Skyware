import React from 'react'
import Header from './Header'
import './Login.css'

const Login = () => {
  return (
    <>
    <Header/>
      <div style={{backgroundColor:"#13d2ac",color:"#13d2ac" ,marginTop:"2rem"}}>.
          <div style={{marginLeft:"3rem",paddingTop:"3rem",paddingDown:"3rem",backgroundColor:"#f8f9f4" ,width:"50rem",height:"37rem", borderRadius:"1rem"}}>
           <div style={{color:"#0b2563",fontSize:"2.5rem",fontWeight:"500",marginLeft:"19rem",paddingTop:"3rem"}}>Welcome</div>
               <div style={{color:"#0b2563",marginLeft:"16rem",fontSize:"1.5rem"}}>Please enter your details</div>
    
               <div style={{color:"#0b2563",marginLeft:"10rem",fontSize:"1.5rem",marginTop:"1rem"}}>
                <form className='form'>
                    Email
                    <div style={{marginTop:"0.5rem",marginDown:"0.8rem"}}>
                    <input className='pla' placeholder='Enter your email' color="#13d2ac"/>
                    </div>
                    <div style={{marginTop:"1rem"}}>  Password</div>
                    <div style={{marginTop:"0.5rem"}}>
                    <input className='pla' placeholder='..........'/>
                    </div>
                    <div>
                    <input type="checkbox"/><span style={{fontSize:"1rem" , marginLeft:"0.5rem"}}>Remember me for 30 days</span> 
                    <button style={{marginLeft:"9.6rem",fontSize:"1rem",color:"#13d2ac"}}>Forget password</button>
                   <div style={{marginTop:"2rem"}}>
                    <button style={{width:"30rem",height:"3.5rem",borderRadius:"0.5rem",backgroundColor:"#13d2ac",color:"#f8f9f4"}}>Sign in</button>
                    </div>
                    </div>

                    
                </form>
                <div style={{marginLeft:"10rem",fontWeight:"500", fontSize:"0.8rem" ,marginTop:"1rem"}}>Don't have account?
                <button style={{color:"#13d2ac",marginLeft:"0.6rem"}}>Sign Up</button>
                </div>
            </div>



        </div>.
       </div>

    </>
  )
}

export default Login