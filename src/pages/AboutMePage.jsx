/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Header from "../components/Header";
import "../componentsStyles/aboutMe.css";
import personalPhoto from "../assets/personal.jpg";

function AboutMePage() {
  return (
    <div className="about-me-page-container">
      <Header />
      <div className="about-me-card-container">
        <div className="img-container">
          <img src={personalPhoto} />
        </div>
        <div className="about-me-paragraph">
          <h1>Hi,</h1>
          <h1 id="my-name">I'm Ammar</h1>
          <p>
            I am an electrical Engineering student majoring in computer
            engineering, I'm really passionate about building and developing web
            apps like this one,this application was built using react-redux and
            react-router-dom v6 and of course react.js,HTML and CSS.If you like
            it there are alot more coming soon. you can check my
            <a href="https://ammmarr.github.io/personal/" target="_blank" rel="noreferrer">
              Personal portfolio
            </a>
            to check my availability work you can contact me via{" "}
            <span>ammarrelkosii@yahoo.com</span>
          </p>
          <div className="work-links">
          <a href="https://www.linkedin.com/in/ammar-elkosi-4760b8256/" target="_blank" rel="noreferrer">Linked In</a>
          <a href="https://www.upwork.com/freelancers/~017374f7ad049a4ac3" target="_blank" rel="noreferrer">Up Work</a>
         

          <a href="https://www.freelancer.com/u/AmmarrOmar" target="_blank" rel="noreferrer">Freelancer.com</a>
        </div>
        </div>
       
      </div>
      
    </div>
  );
}

export default AboutMePage;
