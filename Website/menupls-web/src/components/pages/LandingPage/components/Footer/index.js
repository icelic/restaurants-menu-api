import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

function Footer() {
  return (
    <footer className="mp-footer">
      <Link to="/policy">Privacy policy</Link>
      <Link to="/terms">Terms of service</Link>
    </footer>
  );
}

export default Footer;
