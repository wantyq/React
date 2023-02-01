import MyWork from '../components/MyWork/MyWork.js';
import Topbar from '../components/Topbar/Topbar';
import "./styles/Home.css"
import { projectsArr } from "../consts/projectsArr"

const Works = () => {
  return (
    <div>
        <Topbar/>
        <div className='all-projects'>
          {projectsArr.map(project => <MyWork key={project.title} className="project-card" image={project.image} title={project.title} description={project.description} duration={project.duration} url={project.url} />)}
        </div>
    </div>
  )
}

export default Works