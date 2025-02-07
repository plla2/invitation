import React from 'react';

const ChevronDown = ({ size, color }: { size: number; color: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512">
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="45"
        d="m112 184l144 144l144-144"
      />
    </svg>
  );
};

export default ChevronDown;
