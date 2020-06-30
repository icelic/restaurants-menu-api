import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  return (
    <div className="mp-footer">
      <Link to="/policy">Privacy policy</Link>
      <Link to="/terms">Terms of service</Link>
    </div>
  );
}

export default Footer;
