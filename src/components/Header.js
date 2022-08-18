const Header = () => {
  const headerDivStyle = {
    backgroundColor: "#108273",
    textAlign: "center",
  };

  const headerStyle = {
    margin: 0,
    paddingTop: "40px",
    paddingBottom: "30px",
    fontSize: "60px",
    fontFamily: "DynaPuff",
    color: "white"
  }

  return (
    <div style={headerDivStyle}>
      <h1 style={headerStyle}>StudyCounter 9000</h1> 
    </div>
  )
}

export default Header;