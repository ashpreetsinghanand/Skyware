import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import h3 from '../h4.png'
import h6 from '../h6.png'
import h7 from '../h7.png'
import h8 from '../h8.png'
import h9 from '../h9.png'

const SimpleSlider = () => {
   const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
    <div style={{marginLeft:"3rem"}}>
         <Slider {...settings}>
      <div className='g' style={{backgroundColor:"#13d2ac" ,width:"400rem",height:"100rem",border:"10px solid #13d2ac"}}>
       <img src={h3} width="290rem"  alt="img"/>

      </div>
      <div style={{margin:"2rem"}}>
      <img src={h6} width="305rem"  alt="img"/>
      </div>
      <div>
      <img src={h7} width="300rem"  alt="img"/>
      </div>
      <div>
      <img src={h8} width="285rem"  alt="img"/>
      </div>
      <div>
      <img src={h9} width="290rem"  alt="img"/>
      </div>
      <div>
      <img src={h7} width="300rem"  alt="img"/>
      </div>
    </Slider>
    <div style={{marginTop:"1rem",backgroundColor:"#0B2653",color:"#0B2653"}}>.</div>
    </div>

  )
}

export default SimpleSlider