import React from 'react';

interface Props {
  size: number;
  color: string;
}

const Subway = ({ size, color }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512">
      <rect
        width="288"
        height="352"
        x="112"
        y="32"
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="32"
        rx="48"
        ry="48"
      />
      <path fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M208 80h96" />
      <rect
        width="288"
        height="96"
        x="112"
        y="128"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="32"
        ry="32"
      />
      <circle cx="176" cy="320" r="16" fill="none" stroke={color} strokeLinejoin="round" strokeWidth="32" />
      <circle cx="336" cy="320" r="16" fill="none" stroke={color} strokeLinejoin="round" strokeWidth="32" />
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M144 464h224m-32-32l48 48m-208-48l-48 48"
      />
    </svg>
  );
};

export default Subway;
