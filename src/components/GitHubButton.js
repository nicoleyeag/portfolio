import React, { useState } from "react";
import "../css/style.css";

export default function GitHubButton() {
  const [buttonState, setButtonState] = useState("default");

  return (
    <a
      href="https://github.com/nicoleyeag"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open my GitHub profile"
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
        <img src="/assets/GitHub.png" alt="GitHub" className="button-image" />
        <img src="/assets/blue-large.png" alt="" className="sparkle sparkle-large" />
        <img src="/assets/blue-small.png" alt="" className="sparkle sparkle-small" />
      </button>
    </a>
  );
}
