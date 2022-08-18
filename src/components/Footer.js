import { useState } from "react";

const Footer = ({ buttonLabel }) => {
  //state variable to track whether the user is hovering over the study-button
  const [isHovering, setIsHovering] = useState(false);

  //define event handlers for hovering over the study-button
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  }

  const footerStyle ={
    height: "calc(45% - 142px)",
    backgroundColor: "#108273",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  //style depends on isHovering
  const buttonStyle = {
    height: "33%",
    padding: "0 20px",
    transitionDuration: "0.3s",
    fontSize: isHovering ? 33 : 30,
    color: isHovering ? "white" : "black",
    backgroundColor: isHovering ? "black" : "white",
    display: "flex",
    alignItems: "center",
    border: "5px solid #aba9a4",
    borderRadius: 5,
  }
  return (
    <div style={footerStyle}>
      <div 
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} 
        >
          {buttonLabel}
      </div>
    </div>
 )
}

export default Footer;