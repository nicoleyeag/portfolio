import React, { useState } from 'react';
import '../css/style.css';

export default function StatefulButton() {
  const [buttonState, setButtonState] = useState('default');

  return (
    <a
      href="https://www.linkedin.com/in/nicoleyeager-thenydesign/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open my LinkedIn profile"
      className="icon-link"
    >
      <button
        type="button"
        className={`stateful-button ${buttonState}`}
        onMouseEnter={() => setButtonState("hover")}
        onMouseLeave={() => setButtonState("default")}
        onMouseDown={() => setButtonState("active")}
        onMouseUp={() => setButtonState("hover")}
      >
        {/* Insert logo/image here */}
        <img src="/assets/LinkedIn.png" alt="Logo" className="button-image" />
        <img src="/assets/purple-large.png" alt="large sparkle" className="sparkle sparkle-large" />
        <img src="/assets/purple-small.png" alt="small sparkle" className="sparkle sparkle-small" />
      </button>

      </a>
  );
}

