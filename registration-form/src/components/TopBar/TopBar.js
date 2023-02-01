import React from 'react'
import "./TopBar.css"
import {useNavigate} from "react-router-dom";

const TopBar = () => {
    const navigate = useNavigate();
  return (
    <div className='topbar'>
        <h2>My Logo</h2>
        <nav>
        <a onClick={() => navigate("/")}>Home</a>
        <a href="#">About</a>
        <a onClick={() => navigate("/register")}>Contact</a>
        </nav>
    </div>
  )
}

export default TopBar;