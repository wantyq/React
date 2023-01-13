import "./SocialButtons.css";
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa'

const SocialButtons = ({ linkedinUrl, githubUrl, facebookUrl }) => {

  return (
    <div className="social-buttons">
      <button className="social-btn" onClick={()=> window.open(linkedinUrl)}><FaLinkedin size="1.2rem"/></button>
      <button className="social-btn" onClick={() => window.open(githubUrl)}><FaGithub size="1.2rem"/></button>
      <button className="social-btn" onClick={() => window.open(facebookUrl)}><FaFacebook size="1.2rem"/></button>
    </div>
  )
}

export default SocialButtons;