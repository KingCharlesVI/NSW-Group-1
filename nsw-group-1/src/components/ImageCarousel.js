import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css'; // Create a new CSS file

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Adjust the speed for smoother transitions
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the interval to 3 seconds
    arrows: false,
  };

  return (
    <div className="image-carousel-container">
      <Slider {...settings}>
        <div>
          <img src="/images/image-1.png" alt="Example" />
        </div>
        <div>
          <img src="/images/image-2.png" alt="Example" />
        </div>
        <div>
          <img src="/images/image-3.png" alt="Example" />
        </div>
        <div>
          <img src="/images/placeholder.png" alt="Example" />
        </div>
        <div>
          <img src="/images/placeholder.png" alt="Example" />
        </div>
        {/* Add more images as needed */}
      </Slider>
    </div>
  );
}

export default ImageCarousel;