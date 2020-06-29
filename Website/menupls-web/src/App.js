import React from "react";
import "./App.scss";
import HeaderSection from "./components/HeaderSection";
import GuideSection from "./components/GuideSection";
import ConclusionSection from "./components/ConclusionSection";

function App() {
  return (
    <div className="mp-container">
      <HeaderSection></HeaderSection>
      <GuideSection></GuideSection>
      <ConclusionSection></ConclusionSection>
    </div>
  );
}

export default App;
