// src/utils/favicon.js
export function setFaviconColor(color) {
  const favicon = document.getElementById("favicon");
  if (!favicon) return;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path
        d="M16 3 L18.5 13.5 L29 16 L18.5 18.5 L16 29 L13.5 18.5 L3 16 L13.5 13.5 Z"
        fill="${color}"
      />
    </svg>
  `;

  favicon.href = `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
