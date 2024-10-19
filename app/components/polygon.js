import React from 'react';

const Polygon = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 100"
        preserveAspectRatio="none"
      >
        <path d="M0 100 A100 100 0 0 1 200 100 Z" fill="#FFF" />
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Polygon;