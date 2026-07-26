import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/style.css";

export default function StatefulButton({
  label,
  to,
  sparkleColor = "orange",
  onClick,
  type = "button",
}) {
  const [buttonState, setButtonState] = useState("default");
  const navigate = useNavigate();

  const handleClick = () => {
    // allow parent handlers (like closing mobile menu)
    if (onClick) onClick();
    // then navigate
    if (to) navigate(to);
  };

  return (
    <button
      type={type}
      className={`stateful-button ${buttonState}`}
      onMouseEnter={() => setButtonState("hover")}
      onMouseLeave={() => setButtonState("default")}
      onMouseDown={() => setButtonState("active")}
      onMouseUp={() => setButtonState("hover")}
      onClick={handleClick}
    >
      {label}

      <img
        src={`/assets/${sparkleColor}-large.png`}
        alt=""
        className="sparkle sparkle-large"
        aria-hidden="true"
      />
      <img
        src={`/assets/${sparkleColor}-small.png`}
        alt=""
        className="sparkle sparkle-small"
        aria-hidden="true"
      />
    </button>
  );
}
