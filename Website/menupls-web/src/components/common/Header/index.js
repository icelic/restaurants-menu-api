import React from 'react';
import { Link } from 'react-router-dom';

import appLogoWhite from '../../../images/app_logo_white.png';

import './index.scss';

function Header() {
  return (
    <div className="mp-header">
      <Link to="/">
        <img className="mp-image" src={appLogoWhite} alt="App icon" />
      </Link>
    </div>
  );
}

export default Header;
