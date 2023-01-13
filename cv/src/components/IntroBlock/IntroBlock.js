import "./IntroBlock.css";
import { useState } from "react";
import SocialButtons from "../SocialButtons/SocialButtons";

const IntroBlock = ({ title, description, contactUrl }) => {
  
    const handleClick = () => {
        window.location.href = contactUrl;
    }
  return (
    <div className="intro-block">
        <div className="description">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="buttons">
          <div className="contact-btn" onClick={handleClick}>Contact me</div>
          <SocialButtons 
              linkedinUrl="https://lt.linkedin.com/in/saidas-navikas-655aa61a1" 
              githubUrl="https://github.com/wantyq/" 
              facebookUrl="https://www.facebook.com/saidas.navikas/"
          />
        </div>
    </div>
  )
}

export default IntroBlock