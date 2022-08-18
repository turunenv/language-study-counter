import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

import { useState } from 'react';

function App() {
  const appStyle = {
    height: "100vh"
  }

  const [ studying, setStudying ] = useState(false);

  let buttonLabel = studying ? "Stop study sesh" : "Start studying";

  return (
    <div className="App" style={appStyle}>
      <Header />
      <MainContent />
      <Footer buttonLabel={buttonLabel}/>
    </div>
  );
}

export default App;
