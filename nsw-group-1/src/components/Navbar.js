import React from 'react';
import SignUpButton from './SignUpButton';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo-container">
          <img src="/images/logo.png" className="navbar-logo" alt="Logo" />
          <h2>NSWG1</h2>
        </div>
      </div>
      <div className="navbar-right">
        <a href="https://www.youtube.com/channel/UC6HCiNKNSpUJdIdpyDfS4sA" target="_blank" rel="noopener noreferrer">Youtube</a>
        <a href="https://discord.gg/XSMp5K7djy" target="_blank" rel="noopener noreferrer">Discord</a>
        <a href="https://nswg1.forumotion.com/" target="_blank" rel="noopener noreferrer" className="signup-link">SIGNUP</a>
      </div>
    </nav>
  );
}

export default Navbar;