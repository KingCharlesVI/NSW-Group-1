import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-scroll';
import Navbar from '../components/Navbar.js';
import SignUpButton from '../components/SignUpButton';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />

        <div className="banner">
          <img src="image-1.png"/>
          <h1 className="group-name">Naval Special Warfare Group 1</h1>
          <div className="banner-buttons">
            <Link to="about-us" smooth={true} duration={500}>About Us</Link>
            <Link to="requirements" smooth={true} duration={500}>Requirements</Link>
            <Link to="available-roles" smooth={true} duration={500}>Available Roles</Link>
          </div>
        </div>

        <div id="about-us" className="section card">
          <div className="card-body">
            <div className="card-content">
              <div className="card-text">
                <h2 className="card-title">Unit Culture</h2>
                <p>
                This is a hardcore/realism unit. Operations and Training are taken extremely seriously, there is significant planning involved in Training & Operations. The unit has a laidback group of members outside of Training & Operations. The individuals who graduate are all like minded, and it's a tight knit community.
                </p>
              </div>
              <div className="card-image">
                <img src="https://i.imgur.com/vSuAANY.jpg" alt="About Us" className="card-img" />
              </div>
            </div>
          </div>
        </div>

        <div id="requirements" className="section card">
          <div className="card-body">
            <div className="card-content">
              <div className="card-text">
                <h2 className="card-title">Requirements</h2>
                <p>
                  <ul>
                    <li>You must be at least 18 years of age (Waivers can apply).</li>
                    <li>You must be willing to submit to a lengthy and detailed training process.</li>
                    <li>You must be able to attend Eastern Time Operations / Events.</li>
                    <li>You must have a working Microphone (No static, echo, etc).</li>
                    <li>There is no ARMA 3 hour or skill requirement. You will learn any skills you need to know during the Training Pipeline. It is your responsibility to pick up, understand, and process the training material & lessons.</li>
                  </ul>
                </p>
              </div>
              <div className="card-image">
                <img src="https://i.imgur.com/GAxjGC4.png" alt="About Us" className="card-img" />
              </div>
            </div>
          </div>
        </div>

      <div id="available-roles" className="section card">
        <div className="card-body">
          <h2 className="card-title">Available Roles</h2>
          <ul className="roles-list">
            <li className="role">
              <img src="https://i.imgur.com/ZodzUxE.pngg" alt="Role 1" />
              <p className="role-description">Special Warfare Candidate</p>
            </li>
            <li className="role">
              <img src="https://i.imgur.com/Vd6tnZu.png" alt="Role 2" />
              <p className="role-description">Special Operations Pilot</p>
            </li>
            {/* Add more roles as needed */}
          </ul>
        </div>
      </div>

      <div className="footer">
        <p>&copy; 2023, KingCharlesVII</p>
        <a href="https://discord.gg/xTGT2auk">Join our Discord</a>
        
      </div>
    </div>
  );
}

export default HomePage;