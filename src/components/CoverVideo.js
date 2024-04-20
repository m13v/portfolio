import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import GIF from '../assets/Paparazzi_Video.mp4';
import TooltipImage from '../assets/cropped-2022.JPG'; // Import the image

const VideoContainer = styled.div`
  width: 100%;
  display: flex; // Center the video
  justify-content: center; // Center horizontally
  align-items: center; // Center vertically
  position: relative; // Needed to position the button absolutely within the container

  video {
    width: 100%; // Set video width to 50% of its container
    height: auto; // Maintain aspect ratio
  }

  button {
    position: absolute;
    top: 75%; // Move towards the lower part of the video
    left: 50%; // Center horizontally
    transform: translateX(-50%); // Adjust horizontal position to truly center
    background-color: rgba(255, 255, 255, 0.5); // Semi-transparent background
    border: none; // Remove border
    color: #000; // Text color, change as needed
    padding: 10px; // Significantly increase padding
    font-size: 1em; // Start with a base font size
    cursor: pointer; // Cursor indicates clickable
    border-radius: 10px; // Adjusted for aesthetic
  }
  .info-button {
    position: absolute;
    top: 10px; // Positioned in the upper part of the video
    left: 2%; // Positioned in the left part of the video
    background-color: rgba(0, 0, 0, 0.5); // Semi-transparent black background
    color: white;
    border: none;
    --button-size: 10px; // Define a CSS variable for size
    width: var(--button-size); // Use the variable for width
    height: var(--button-size); // Use the same variable for height
    padding: 10px;
    border-radius: 100%; // Circular button
    cursor: help; // Indicates an informational element
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); // Adds shadow for depth
    display: flex; // Enables the use of Flexbox for centering content
    justify-content: center; // Centers content horizontally
    align-items: center; // Centers content vertically
    text-align: center; // Ensures text is centered if it wraps to a new line
  }

  .tooltip {
    visibility: hidden;
    width: 240px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    /* Add padding around the text */
    padding: 10px; // Increased padding for the content
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px; // Half of the tooltip's width to center it

    /* Tooltip arrow */
    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: black transparent transparent transparent;
    }
  }

  .info-button:hover .tooltip {
    visibility: visible;
  }
`;

const CoverVideo = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const buttonRef = useRef(null);
  const infoButtonRef = useRef(null); // Add a ref for the info button

  const adjustButtonFontSize = () => {
    if (videoRef.current && buttonRef.current) {
      const videoWidth = videoRef.current.offsetWidth;
      const newFontSize = Math.max(16, videoWidth / 20); // Adjust this ratio as needed
      buttonRef.current.style.fontSize = `${newFontSize}px`;
    }
  };

  useEffect(() => {
    window.addEventListener('resize', adjustButtonFontSize);
    // Adjust font size after a delay to ensure video dimensions are loaded
    setTimeout(adjustButtonFontSize, 500); // A shorter delay might also work

    return () => {
      window.removeEventListener('resize', adjustButtonFontSize);
    };
  }, []);

  useEffect(() => {
    const infoButton = infoButtonRef.current;

    const handleMouseOver = () => {
      const tooltip = infoButton.querySelector('.tooltip');
      if (!tooltip) return;

      // Calculate if there's enough space below the info button for the tooltip
      const infoButtonRect = infoButton.getBoundingClientRect();
      const tooltipHeight = tooltip.offsetHeight;
      const spaceBelow = window.innerHeight - infoButtonRect.bottom;

      if (spaceBelow < tooltipHeight) {
        // Not enough space below, show tooltip above
        tooltip.style.bottom = '100%';
        tooltip.style.top = 'auto';
      } else {
        // Enough space below, show tooltip below
        tooltip.style.top = '100%';
        tooltip.style.bottom = 'auto';
      }
    };

    const handleMouseOut = () => {
      const tooltip = infoButton.querySelector('.tooltip');
      if (tooltip) {
        // Reset tooltip position to default or hide it
        tooltip.style.bottom = 'auto';
        tooltip.style.top = 'auto';
      }
    };

    if (infoButton) {
      infoButton.addEventListener('mouseover', handleMouseOver);
      infoButton.addEventListener('mouseout', handleMouseOut);
    }

    return () => {
      if (infoButton) {
        infoButton.removeEventListener('mouseover', handleMouseOver);
        infoButton.removeEventListener('mouseout', handleMouseOut);
      }
    };
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <VideoContainer>
      <video ref={videoRef} src={GIF} type="video/mp4" autoPlay loop muted={isMuted} />
      <button ref={buttonRef} onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
      <a href="https://arxiv.org/abs/2312.09767v1" target="_blank" rel="noopener noreferrer">
        <div className="info-button" ref={infoButtonRef}>
          i
          <span className="tooltip">
            Video was generated from a single picture with DreamTalk diffusion model 
            <a href="https://arxiv.org/abs/2312.09767v1" target="_blank" rel="noopener noreferrer" style={{ color: 'lightblue' }}> (arXiv))</a>
            <img src={TooltipImage} alt="DreamTalk Model" style={{ width: '100%', marginTop: '8px' }} />
          </span>
        </div>
      </a>
    </VideoContainer>
  );
};

export default CoverVideo;