import StudyCounter from "./StudyCounter";
import Streak from "./Streak";

const MainContent = () => {
  const mainContentStyle = {
    display: "flex",
    height: "55%",
    border: "15px solid #aba9a4",
    borderStyle: "solid none",
  }
  return (
    <div style={mainContentStyle}>
      <StudyCounter />
      <Streak />
    </div>
  )
}

export default MainContent;