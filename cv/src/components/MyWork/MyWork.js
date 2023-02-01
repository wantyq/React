import "./MyWork.css";
import { FaLink } from "react-icons/fa";


const MyWork = ({ title, short_dsc, duration, url, image }) => {
  return (
    <div className="project-container">
      <img src={image} alt={title}/>
      <div className="project-information">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{short_dsc}</p>
        <p className="project-duration">Duration: {duration}.</p>
      </div>
      <button className="project-link-btn" onClick={() => window.open(url)}><FaLink size="1.2rem"/></button>
    </div>
  )
}

export default MyWork;


