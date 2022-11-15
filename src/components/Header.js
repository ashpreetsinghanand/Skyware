import React from 'react'
import './Header.css'
import h12 from '../h12.png'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div  className='boci'>
        
        <div style={{display:'flex',backgroundColor:'#F8F9F4'}}>
        <div className='q' style={{color: '#13D2AC' ,width:'7rem', height:'3rem',fontSize:"2.3rem" ,marginLeft:'2rem',marginTop:'2rem'}}>SKYWARE
        </div>
       
        <div>
        
            <button  className='q aba' style={{color:'#F8F9F4' , backgroundColor: '#0B2653' ,width:'7rem', height:'3rem',fontSize:"1.8rem",marginRight:'3rem', marginLeft:'30rem',marginTop:'2rem'}}>
             <a href="/">Home</a>
           
            </button>
        </div>
        <div>
            <button  className='q' style={{color:'#F8F9F4' , backgroundColor: '#0B2653' ,width:'7rem', height:'3rem',fontSize:"1.8rem",marginRight:'3rem',marginTop:'2rem'}}>
            <a href="/Blog">Blog</a>
            </button>
        </div>
        <div>
            <button className='q' style={{color:'#F8F9F4' , backgroundColor: '#0B2653' ,width:'7rem', height:'3rem',fontSize:"1.8rem",marginRight:'3rem',marginTop:'2rem'}}>
            <a href="/Carrer">Carrer</a></button>
        </div>
        <div>
            <button className='q' style={{color:'#F8F9F4' , backgroundColor: '#13D2AC' ,width:'7rem', height:'3rem',fontSize:"1.8rem",marginRight:'3rem',marginTop:'2rem'}}>
            <a href="/Login">Login</a></button>
            
        </div>
        </div>
    </div>
  )
}

export default Header