import "./Topbar.css"
import {useNavigate} from "react-router-dom";

const Topbar = () => {
    const navigate = useNavigate();
  return (
    <div className='topbar'>
        <h2>My Logo</h2>
        <nav>
        <a onClick={() => navigate("/")}>Home</a>
        <a onClick={() => navigate("/about")}>About</a>
        <a onClick={() => navigate("/works")}>Works</a>
        <a onClick={() => navigate("/contactme")}>Contact</a>
        </nav>
    </div>
  )
}

export default Topbar;