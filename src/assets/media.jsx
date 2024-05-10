import React from 'react';
import twitterIcon from '../assets/media/twitter.png';
import youtubeIcon from '../assets/media/youtube.png';

function SocialMediaImages() {
  return (
    <div className="socialmedia-container">
      <p className='red-title'> Mis redes </p>
      <div className="socialmedia-icons">
        <a href="https://twitter.com/NoxxiaMondus" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" className="social-media-icon" />
        </a>
        <a href="https://www.youtube.com/channel/UCFkIowSFqGGPUReXZWbn4pg" target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="YouTube" className="social-media-icon" />
        </a>
      </div>
    </div>
  );
}

export default SocialMediaImages;

