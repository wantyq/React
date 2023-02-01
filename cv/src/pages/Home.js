import IntroBlock from "../components/IntroBlock/IntroBlock"
import PhotoBlock from "../components/PhotoBlock/PhotoBlock"
import Topbar from "../components/Topbar/Topbar"
import MyWork from "../components/MyWork/MyWork"
import { projectsArr } from "../consts/projectsArr"
import "../pages/styles/Home.css"
import { useEffect, useState } from "react"
import WeatherCard from "../components/WeatherCard/WeatherCard"

const weatherAPI = "https://api.open-meteo.com/v1/forecast?latitude=54.69&longitude=25.28&timezone=Europe/Vilnius&daily=weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max";

const Home = () => {
  const [weather, setWeather] = useState(undefined);

  useEffect( () => {
    fetch(weatherAPI).then(resp => resp.json()).then(response => {
      setWeather(response);
    }).catch((error) => console.log(error));
  }, []);
  return (
    <div>
        <Topbar/>
        <div className="grid-container">
          <div class="first-row-first grid-item">
            <IntroBlock 
              title="Hey, I'm Saidas, a Front-End developer with some great luggage of knowledge" 
              description="I care a lot about using design for positive impact and enjoy creating user-centric, delightful, and human experiences." 
              contactUrl="https://google.lt/" 
              linkedinUrl="https://lt.linkedin.com/in/saidas-navikas-655aa61a1" 
              githubUrl="https://github.com/wantyq/" 
            />
          </div>
          <div class="first-row-second grid-item">
            <PhotoBlock/>
          </div>
        </div>
        <div className="projects">
          {projectsArr.map(project => <MyWork key={project.title} className="project-card" image={project.image} title={project.title} short_dsc={project.short_dsc} duration={project.duration} url={project.url} />)}
        </div>
        <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
          {weather && <WeatherCard weather={weather}/>}
        </div>
    </div>
  )
}

export default Home