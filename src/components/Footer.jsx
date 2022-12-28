import React from 'react';
import "../componentsStyles/footer.css"

const Footer = () => {


    return(
        <div className="footer-container">
            <div className="footer-section">
                <h6><span>Ammar's shop</span></h6>
                <p>Welcom to my show casing website<br/>this is non-functional demo website
                <br/>and of course would be grateful to check my other projects</p>
            </div>
            <div className="footer-section">
                <h6>OTHER WORK</h6>
                <a target="_blank" href='https://ammmarr.github.io/personal/' rel="noreferrer">My personal protoflio</a>
                <a target="_blank" href="https://ammmarr.github.io/Budget-calculator/" rel="noreferrer">My Budget Calculator</a>
                <a target="_blank" href='https://github.com/ammmarr?tab=repositories' rel="noreferrer" >github account for more projects</a>
            </div>
            <div className='footer-section'>
                <h6>Find Me</h6>
                <a target="_blank" href='https://www.linkedin.com/in/ammar-elkosi-4760b8256/' rel="noreferrer">Linked In</a>
                <a target="_blank" href='https://www.upwork.com/freelancers/~017374f7ad049a4ac3' rel="noreferrer">Up Work</a>
                <a target="_blank" href='https://www.freelancer.com/u/AmmarrOmar' rel="noreferrer" >Freelancer</a>
            </div>
        </div>
    )
}
export default Footer;