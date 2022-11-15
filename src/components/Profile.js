import React from 'react'
import "./Profile.css"



const Profile = (props) => {
  return (
    <div className='container'>
       
       
        <div style={{fontSize:"1.5rem",color:"#f8f9f4",height:"15rem"}}>{props.name}</div>
      
       
    </div>
  )
}

export default Profile