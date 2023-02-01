import PropTypes from "prop-types";

import "../Button/Button.css";



const Button = ({ onClick, backgroundColor, children }) => {
  // {backgroundColor: backgroundColor} === {backgroundColor}
  return (
    <button
      className="styled-button"
      onClick={onClick}
      style={{ backgroundColor }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string, // optional string
};

export default Button;

