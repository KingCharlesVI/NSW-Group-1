import React from 'react';
import './TrailerVideo.css'; // Import the CSS file

const TrailerVideo = () => {
  return (
    <div className="trailer-video">
      <h2>Trailer Video</h2>
      <div className="video-wrapper">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/VIDEO_ID_HERE" 
          title="YouTube video player" 
          frameborder="0" 
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default TrailerVideo;