import React from 'react'
import "./Button.css";

const Button = ({ availability }) => {
  return (
    <div>
        <button>-</button>
        <span>{availability}</span>
        <button>+</button>
    </div>
  )
}

export default Button