import React from 'react';
import appLogo from '../../../../../images/app_logo.png';
import './index.scss';

function HeaderSection() {
  return (
    <div className="mp-header-section">
      <div className="mp-header-content">
        <div className="mp-menu-icon-row">
          <img className="mp-image" src={appLogo} alt="App icon" />
        </div>
        <div className="mp-title-row">
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
  );
}

export default HeaderSection;
