import React from 'react';

interface Props {
  size: number;
  color: string;
}

const ChevronUp = ({ size, color }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512">
      <path
        fill="none"
        stroke={color}
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="48"
        d="m112 328l144-144l144 144"
      />
    </svg>
  );
};

export default ChevronUp;
