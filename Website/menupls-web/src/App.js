import React from "react";
import "./App.scss";
import appLogo from "./images/app_logo.png";

function App() {
  return (
    <div className="container">
      <div className="header-section">
        <div className="header-content">
          <div className="menu-icon-row">
            <img className="image" src={appLogo} alt="App icon" />
          </div>
          <div className="title-row">
            <div className="app-name">MenuPls</div>
            <div className="header-title">
              Life is like a menu, full of choices
            </div>
            <div className="header-description">
              Check restaurant and bar prices in no time
            </div>
          </div>
          <div className="store-button-row"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
