import IntroBlock from "../components/IntroBlock/IntroBlock"
import PhotoBlock from "../components/PhotoBlock/PhotoBlock"
import Topbar from "../components/Topbar/Topbar"
import "./Home.css"

const Home = () => {
  return (
    <div>
        <Topbar/>
        <div className="grid-container">
          <div class="first-row-first">
            <IntroBlock 
              title="Hey, I'm Saidas, a Front-End developer with some great luggage of knowledge" 
              description="I care a lot about using design for positive impact and enjoy creating user-centric, delightful, and human experiences." 
              contactUrl="https://google.lt/" 
              linkedinUrl="https://lt.linkedin.com/in/saidas-navikas-655aa61a1" 
              githubUrl="https://github.com/wantyq/" 
            />
          </div>
          <div class="first-row-second">
            <PhotoBlock/>
          </div>
          <div class="second-row-first">Div 3</div>
          <div class="second-row-second">Div 4</div>
        </div>
    </div>
  )
}

export default Home