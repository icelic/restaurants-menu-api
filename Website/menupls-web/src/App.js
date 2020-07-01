import React from 'react';
import './App.scss';
import HeaderSection from './components/HeaderSection';
import GuideSection from './components/GuideSection';
import ConclusionSection from './components/ConclusionSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <HeaderSection></HeaderSection>
      <GuideSection></GuideSection>
      <ConclusionSection></ConclusionSection>
    </div>
  );
}

export default App;
