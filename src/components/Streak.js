const Streak = () => {
  const containerStyle = {
    flexGrow: 1,
    border: "7.5px solid #aba9a4",
    borderStyle: "none none none solid",
    display: "flex",
  }

  const childrenStyle = {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
  return (
    <div style={containerStyle}>
      <div style={childrenStyle}>
        Current streak 7 days
      </div>
      <div style={childrenStyle}>
        <div style={{ fontSize: 100 }}>&#128054;</div>
      </div>
    </div>
  )
}

export default Streak;