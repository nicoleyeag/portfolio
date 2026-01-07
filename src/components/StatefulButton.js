import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/style.css";

export default function StatefulButton({ label, to, sparkleColor = "orange" }) {
  const [buttonState, setButtonState] = useState("default");
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className={`stateful-button ${buttonState}`}
      onMouseEnter={() => setButtonState("hover")}
      onMouseLeave={() => setButtonState("default")}
      onMouseDown={() => setButtonState("active")}
      onMouseUp={() => setButtonState("hover")}
      onClick={() => navigate(to)}
    >
      {label}
      <img
        src={`/assets/${sparkleColor}-large.png`}
        alt=""
        className="sparkle sparkle-large"
      />
      <img
        src={`/assets/${sparkleColor}-small.png`}
        alt=""
        className="sparkle sparkle-small"
      />
    </button>
  );
}
