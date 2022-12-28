/* eslint-disable react/no-unescaped-entities */
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import "../componentsStyles/HeroSlider.css";


const Wrapper = (props) =>{

    return(

        <div className="wrapper"  style={{transform: `translateX(${props.sliderValue*-100}vw`}}>
 <img src={props.slideData.img} />
     
      <div className="text-section" style={props.infoAnimation}>
        <div className="text-positioning">
          <h2>{props.slideData.type}</h2>
          <h1>{props.slideData.h1}</h1>
          <h3>
            The perfect place for Artisitic, Minimal and Modern furniture. This
            is Ammar's shop
          </h3>

          <Link to="Shop" ><button className="button type1">View More</button></Link>
        </div>
      </div>
  
      </div> 
    )
}
export default memo( Wrapper)