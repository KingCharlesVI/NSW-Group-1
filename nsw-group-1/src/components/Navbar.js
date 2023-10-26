import React from 'react';
import { Link } from 'react-router-dom';
import SignUpButton from './SignUpButton';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>NSWG1</h2>
      </div>
      <div className="navbar-right">
        <Link to="/campaigns">Campaigns</Link>
        <a href="https://www.youtube.com/channel/UC6HCiNKNSpUJdIdpyDfS4sA" target="_blank" rel="noopener noreferrer">Youtube</a>
        <a href="https://discord.gg/xTGT2auk" target="_blank" rel="noopener noreferrer">Discord</a>
        <a href="https://nswdg.pro.unitcommander.co.uk/login" target="blank" rel="noopener noreferrer" className="signup-link">SIGNUP</a>
      </div>
    </nav>
  );
}

export default Navbar;