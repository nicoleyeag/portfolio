import React, { useState } from 'react';
import '../css/style.css';

export default function StatefulButton() {
  const [buttonState, setButtonState] = useState('default');

  const handleMouseEnter = () => setButtonState('hover');
  const handleMouseLeave = () => setButtonState('default');
  const handleMouseDown = () => setButtonState('active');
  const handleMouseUp = () => setButtonState('hover');

  return (
    <>
      <button
        className={`stateful-button ${buttonState}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
              {/* Insert logo/image here */}
        <img src="/assets/GitHub.png" alt="Logo" className="button-image" />
        <img src="/assets/blue-large.png" alt="large sparkle" className="sparkle sparkle-large" />
        <img src="/assets/blue-small.png" alt="small sparkle" className="sparkle sparkle-small" />
      </button>

      </>
  );
}
