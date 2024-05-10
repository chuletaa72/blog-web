import React from 'react';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video"
      >
        <source src="/src/assets/media/videobackground.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
