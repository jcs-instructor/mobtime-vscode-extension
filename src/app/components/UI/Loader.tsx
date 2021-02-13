import React from 'react';

const stroke = 'var(--vscode-button-hoverBackground)';

export const Loader: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '90vh',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 38 38">
        <defs>
          <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
            <stop stop-color={stroke} stop-opacity="0" offset="0%" />
            <stop stop-color={stroke} stop-opacity="1" offset="63.146%" />
            <stop stop-color={stroke} offset="100%" />
          </linearGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(1 1)">
            <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2">
              <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite" />
            </path>
            <circle fill={stroke} cx="36" cy="18" r="1">
              <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite" />
            </circle>
          </g>
        </g>
      </svg>
    </div>
  );
};