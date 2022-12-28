import React from "react";
import "../componentsStyles/newsletter.css"
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowForwardOutlined from "@mui/icons-material/ArrowForwardOutlined";

const NewsLetter = () => {
  return (
    <div className="newsletter-container">
        <div className="newsletter-wrapper">
      <div className="returning-section">
        <LocalAtmOutlinedIcon />
        
        <h5>20 days returns</h5>
        <p>Vel risus commodo viverra maecenas accumsan.</p>
      </div>
      <div className="shipping-section">
        <LocalShippingOutlinedIcon />
        <h5>Free Shipping</h5>
        <p>Vel risus commodo viverra maecenas accumsan.</p>
      </div>
      <div className="email-section">
        <h4>sign up for our newsletter</h4>
        <form>
        <input type="text" placeholder="Your Email"></input>
        <button type="submit" ><ArrowForwardOutlined /></button>
        </form>
      </div>
      </div>
    </div>
  );
};
export default NewsLetter;
