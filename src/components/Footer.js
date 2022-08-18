const Footer = ({ buttonLabel }) => {
const footerStyle ={
  height: "calc(45% - 142px)",
  backgroundColor: "#108273",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const buttonStyle = {
  height: "33%",
  padding: "0 20px",
  fontSize: 30,
  borderRadius: 5
}
 return (
    <div style={footerStyle}>
      <button style={buttonStyle}>{buttonLabel}</button>
    </div>
 )
}

export default Footer;