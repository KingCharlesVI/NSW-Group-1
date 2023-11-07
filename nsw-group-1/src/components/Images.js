import React from 'react';
import './Images.css'; // Import the CSS file

const Images = () => {
  return (
    <div className="images">
      <h2>Images</h2>
      <div className="image-container">
        <img src="/images/placeholder.png" alt="Image 1" />
        <img src="/images/placeholder.png" alt="Image 1" />
        <img src="/images/placeholder.png" alt="Image 1" />
        <img src="/images/placeholder.png" alt="Image 1" />
        <img src="/images/placeholder.png" alt="Image 1" />
        <img src="/images/placeholder.png" alt="Image 1" />
        <img src="/images/placeholder.png" alt="Image 1" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
}

export default Images;