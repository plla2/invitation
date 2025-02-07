interface Props {
  size: number;
  color: string;
}

const ChevronNext = ({ size, color }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512">
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48"
        d="m184 112l144 144l-144 144"
      />
    </svg>
  );
};

export default ChevronNext;
