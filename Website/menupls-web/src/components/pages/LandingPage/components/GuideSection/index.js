import React from 'react';

import mapImg from 'src/images/map.png';
import venueImg from 'src/images/venue.png';
import menuImg from 'src/images/menu.png';

import './index.scss';

function GuideSection() {
  return (
    <div className="mp-guide-section">
      <div className="mp-guide-title">How does it work?</div>
      <div className="mp-guide-steps-container">
        <div className="mp-maps-container">
          <img className="mp-image" src={mapImg} alt="App map" />
          <div className="mp-maps-description">
            Filter results by given region or search for your desired place
          </div>
        </div>
        <div className="mp-pick-venue-container">
          <img className="mp-image" src={venueImg} alt="App venue" />
          <div className="mp-pick-venue-description">
            Pick the venue you are interested in
          </div>
        </div>
        <div className="mp-menu-container">
          <img className="mp-image" src={menuImg} alt="App menu" />
          <div className="mp-menu-description">
            Check the menu for your selection
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuideSection;
