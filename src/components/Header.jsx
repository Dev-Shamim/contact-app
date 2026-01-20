import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand text-uppercase" to="/">
          <strong>Contact</strong> App
        </Link>
      </div>
    </nav>
  );
};

export default Header;
