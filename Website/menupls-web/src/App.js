import React from 'react';

import HeaderSection from './components/HeaderSection';
import GuideSection from './components/GuideSection';
import ConclusionSection from './components/ConclusionSection';

import './App.scss';

function App() {
  return (
    <div>
      <HeaderSection />
      <GuideSection />
      <ConclusionSection />
    </div>
  );
}

export default App;
