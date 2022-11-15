import React from 'react'
import Header from './Header'
import './Carrer.css'
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';

const Carrer = () => {
  return (
    <>
        <Header/>
        <div style={{backgroundColor:"#f8f9f4",color:"#f8f9f4"}}>.
             <div style={{color:"#0b2563",marginLeft:"15rem",marginTop:"1rem",fontSize:"5rem",fontWeight:"500"}}>Find and become a</div>
             <span style={{color:"#00AD8B",marginLeft:"10rem",marginTop:"1rem",fontSize:"5rem",fontWeight:"500"}}>professtional</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{color:"#0b2563",marginTop:"1rem",fontSize:"5rem",fontWeight:"500"}}>with</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{border:"0.3rem solid #13d2ac",padding:"0.4rem",color:"#0b2563",marginTop:"1rem",fontSize:"5rem",fontWeight:"500"}}>SKYWARE</span>


              <div style={{marginTop:"1.5rem"}}>
                <span style={{marginLeft:"10rem",fontSize:"2.2rem",backgroundColor:"#13d2ac",color:"#f8f9f4",padding:"0.3rem"}}>front-end</span>
                <span style={{marginLeft:"7rem",fontSize:"2.2rem",backgroundColor:"#13d2ac",color:"#f8f9f4",padding:"0.3rem"}}>ui-designer</span>
                <span style={{marginLeft:"6rem",fontSize:"2.2rem",backgroundColor:"#13d2ac",color:"#f8f9f4",padding:"0.3rem"}}>3d illustrator</span>
                <span style={{marginLeft:"6rem",fontSize:"2.2rem",backgroundColor:"#13d2ac",color:"#f8f9f4",padding:"0.3rem"}}>finance</span>
              </div>
              <div style={{marginTop:"1rem"}}>
                <span style={{marginLeft:"10.5rem",fontSize:"2.2rem",backgroundColor:"#13d2ac",color:"#f8f9f4",padding:"0.3rem"}}>ux designer</span>
                <span style={{marginLeft:"7rem",fontSize:"2.2rem",backgroundColor:"#13d2ac",color:"#f8f9f4",padding:"0.3rem"}}>back-end</span>
                <span style={{marginLeft:"6rem",fontSize:"2.2rem",backgroundColor:"#13d2ac",color:"#f8f9f4",padding:"0.3rem"}}>marketing</span>
                <span style={{marginLeft:"6rem",fontSize:"2.2rem",backgroundColor:"#13d2ac",color:"#f8f9f4",padding:"0.3rem"}}>full stack</span>
              </div>
              
              <div style={{marginTop:'1rem',marginLeft:"20rem",fontSize:"1.6rem",display:'flex'}}>
                <form display='flex'>
                <input className='pla' placeholder='👜Job Title' />,,,
                <input className='pla' placeholder='🏙Location'/>,,,
                <button className='b' style={{backgroundColor:"#13d2ac"}}>
                <SearchIcon className='svg_icons'/>
                Search</button>
                </form>
                
              </div>
              .
        </div>
    </>
  )
}

export default Carrer