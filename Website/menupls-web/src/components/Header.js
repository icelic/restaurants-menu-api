import React from 'react';
import './Header.scss';
import appLogoWhite from '../images/app_logo_white.png';
import { Link } from 'react-router-dom';

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
