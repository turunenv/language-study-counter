const StudyCounter = () => {
  const containerStyle = {
    flexGrow: 1,
    border: "7.5px solid #aba9a4",
    borderStyle: "none solid none none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    
    
  }

  const headerStyle = {
    fontSize: "230%",
    margin: "0px 0px 20px 0px",
  }

  const hourStyle = {
    fontSize: 60,
    marginBottom: 10
  }
  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Studied so far</h2>
      <div style={hourStyle}>333</div>
      <div>/ 750 hours</div>
    </div>
  )
}

export default StudyCounter;