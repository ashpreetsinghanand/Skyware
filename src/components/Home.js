import React from 'react'
import h1 from '../h1.png'
import Header from './Header'

const Home = () => {
  return (
    <>
        <Header/>
        <div style={{display:'flex',backgroundColor:'#F8F9F4' }}>

          <div style={{color:'#0B2653',fontWeight:'600',marginLeft:'3rem',fontSize:'3rem',marginTop:'2rem'}}>
          Redefining Storage with <br/>Precision
          </div>
          <div>
            <button style={{color:'#F8F9F4' , backgroundColor: '#13D2AC' ,width:'14rem', height:'3rem',fontSize:"1.8rem",marginTop:'4rem',marginLeft:'20rem',marginRight:'3rem',textAlign:'left',paddingLeft:"1rem"}}>Contact Us &nbsp;&nbsp;<span style={{
                width:'2rem',height:'2rem',borderRadius:'50%',backgroundColor:'#F8F9F4',color:'#13D2AC'
            }}>➡</span>
            
            </button>
        
        </div>
        </div>


        <div style={{backgroundColor:"#13D2AC"}}>
        <img src={h1} width="1263rem" height="611rem" alt="img"/>
        </div>
       
    </>
  )
}

export default Home