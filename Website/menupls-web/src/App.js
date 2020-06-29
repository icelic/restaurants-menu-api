import React from "react";
import "./App.scss";
import appLogo from "./images/app_logo.png";
import mapImg from "./images/map.png";
import venueImg from "./images/venue.png";
import menuImg from "./images/menu.png";

function App() {
  return (
    <div className="mp-container">
      <div className="mp-header-section">
        <div className="mp-header-content">
          <div className="mp-menu-icon-row">
            <img className="mp-image" src={appLogo} alt="App icon" />
          </div>
          <div className="mp-title-row">
            <div className="mp-app-name">MenuPls</div>
            <div className="mp-header-title">
              Life is like a menu, full of choices
            </div>
            <div className="mp-header-description">
              Check restaurant and bar prices in no time
            </div>
          </div>
          <div className="mp-store-button-row"></div>
        </div>
      </div>
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
    </div>
  );
}

export default App;
