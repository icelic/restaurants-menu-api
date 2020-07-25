import React from 'react';

import appLogoBig from 'src/images/app_logo_big.png';

import './index.scss';

function ConclusionSection() {
  return (
    <div className="mp-conclusion-section">
      <div className="mp-left-column">
        <div className="mp-column-wrapper">
          <div className="mp-title">
            No more pressure when the waiter comes!
          </div>
          <img className="mp-image" src={appLogoBig} alt="App logo" />
          <div className="mp-hint">
            Goes hand in hand with the current COVID-19 situation too!
          </div>
        </div>
      </div>
      <div className="mp-right-column">
        <div className="mp-title">You are always ready!</div>
      </div>
    </div>
  );
}

export default ConclusionSection;
