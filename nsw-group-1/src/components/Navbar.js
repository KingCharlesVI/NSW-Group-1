import React from 'react';
import SignUpButton from './SignUpButton';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo-container">
          <img src="https://i.imgur.com/sBYo8lN.png" className="navbar-logo" alt="Logo" />
          <h2>NSWG1</h2>
        </div>
      </div>
      <div className="navbar-right">
        <a href="https://www.youtube.com/channel/UC6HCiNKNSpUJdIdpyDfS4sA" target="_blank" rel="noopener noreferrer">Youtube</a>
        <a href="https://discord.gg/ZWa7cMkFfT" target="_blank" rel="noopener noreferrer">Discord</a>
        <a href="https://forms.gle/sfRT16iaWKNBVQwL7" target="_blank" rel="noopener noreferrer" className="signup-link">SIGNUP</a>
      </div>
    </nav>
  );
}

export default Navbar;