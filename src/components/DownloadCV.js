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
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <div className="download-wrap">
      <a
        className={`download-cv ${buttonState}`}
        href="/Nicole-Yeager-CV.pdf"
        download
        onClick={handleClick}
        onMouseEnter={() => setButtonState("hover")}
        onMouseLeave={() => setButtonState("default")}
        onMouseDown={() => setButtonState("active")}
        onMouseUp={() => setButtonState("hover")}
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
      </a>

      {showToast && (
        <div className="toast" role="status" aria-live="polite">
          Thanks for the opportunity! 💛
        </div>
      )}
    </div>
  );
}
