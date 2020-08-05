import React from 'react';

import {
  HeaderSection,
  ConclusionSection,
  Footer,
  GuideSection,
} from './components';

import './index.scss';

function LandingPage() {
  return (
    <>
      <div>
        <HeaderSection />
        <GuideSection />
        <ConclusionSection />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
