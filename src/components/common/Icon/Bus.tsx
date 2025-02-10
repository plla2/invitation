interface Props {
  size: number;
  color: string;
}

const Bus = ({ color, size }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512">
      <rect
        width="352"
        height="192"
        x="80"
        y="112"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="26"
        rx="32"
        ry="32"
      />
      <rect
        width="352"
        height="128"
        x="80"
        y="304"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="26"
        rx="32"
        ry="32"
      />
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="26"
        d="M400 112H112a32.09 32.09 0 0 1-32-32h0a32.09 32.09 0 0 1 32-32h288a32.09 32.09 0 0 1 32 32h0a32.09 32.09 0 0 1-32 32M144 432v22a10 10 0 0 1-10 10h-28a10 10 0 0 1-10-10v-22Zm272 0v22a10 10 0 0 1-10 10h-28a10 10 0 0 1-10-10v-22Z"
      />
      <circle cx="368" cy="368" r="16" fill="none" stroke={color} strokeLinejoin="round" strokeWidth="26" />
      <circle cx="144" cy="368" r="16" fill="none" stroke={color} strokeLinejoin="round" strokeWidth="26" />
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="26"
        d="M256 112v192M80 80v288M432 80v288"
      />
    </svg>
  );
};

export default Bus;
