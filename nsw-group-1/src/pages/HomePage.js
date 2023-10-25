import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AboutUs from '../components/AboutUs';
import SignUpButton from '../components/SignUpButton';
import './HomePage.css';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="home-page">
      <Slider {...settings}>
        <div className="banner">
          <img src="image-1.png"/>
          <h1 className="group-name">Naval Special Warfare Group 1</h1>
          <div className="banner-buttons">
            <a href="#about-us" onClick={() => scrollToSection('about-us')}>About Us</a>
            <a href="#how-to-join" onClick={() => scrollToSection('how-to-join')}>How to Join</a>
            <a href="#available-roles" onClick={() => scrollToSection('available-roles')}>Available Roles</a>
          </div>
        </div>
      </Slider>
      <AboutUs />
      <div id="how-to-join" className="section card">
        <div className="card-body">
          <h2 className="card-title">How to Join</h2>
          <p className="card-text">
            <b>Enlistment Requirements</b>
            <ul>
              <li>You must be at least 18 years of age (Waivers can apply).</li>
              <li>You must be willing to submit to a lengthy and detailed training process.</li>
              <li>You must be able to attend Eastern Time Operations / Events.</li>
              <li>You must have a working Microphone (No static, echo, etc).</li>
              <li>There is no ARMA 3 hour/skill requirement. You will learn any skills you need to know during the Training Pipeline. It is your responsibility to pick up, understand, and process the training material & lessons.</li>
            </ul>
          </p>
        </div>
      </div>
      <div id="available-roles" className="section card">
        <div className="card-body">
          <h2 className="card-title">Available Roles</h2>
          <ul className="roles-list">
            <li className="role">
              <img src="/images/nswg1.png" alt="Role 1" />
              <p className="role-description">Operator</p>
            </li>
            <li className="role">
              <img src="/images/soar.png" alt="Role 2" />
              <p className="role-description">Pilot</p>
            </li>
            {/* Add more roles as needed */}
          </ul>
        </div>
      </div>

      <SignUpButton />
      <div className="footer">
        <p>&copy; 2023, KingCharlesVII</p>
        <a href="https://discord.gg/xTGT2auk">Join our Discord</a>
      </div>
    </div>
  );
}

export default HomePage;