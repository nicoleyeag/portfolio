import React, { useState } from "react";
import "../css/style.css";

const CV_SPARKLES = [
  { color: "purple", size: "large", className: "s1" },
  { color: "blue", size: "large", className: "s2" },
  { color: "green", size: "large", className: "s3" },
  { color: "yellow", size: "large", className: "s4" },
  { color: "orange", size: "large", className: "s5" },
  { color: "red", size: "large", className: "s6" },
];

export default function DownloadCV() {
  const [buttonState, setButtonState] = useState("default");

  return (
    <button
      type="button"
      className={`download-cv ${buttonState}`}
      onMouseEnter={() => setButtonState("hover")}
      onMouseLeave={() => setButtonState("default")}
      onMouseDown={() => setButtonState("active")}
      onMouseUp={() => setButtonState("hover")}
      onClick={() => window.open("/Nicole-Yeager-CV.pdf", "_blank")}
    >
      <span className="download-label">Download CV</span>

      <span className="cv-sparkles" aria-hidden="true">
        {CV_SPARKLES.map((s, i) => (
          <img
            key={`${s.color}-${i}`}
            src={`/assets/${s.color}-${s.size}.png`}
            alt=""
            className={`sparkle ${s.className}`}
          />
        ))}
      </span>
    </button>
  );
}
