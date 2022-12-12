import React from 'react';
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <a className="navbar-logo" href="#">
        LOGO
      </a>
      <form className="search-form">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </form>
      <div className="navbar-right">
        <a className="navbar-login" href="#">
          Login
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
