import { useState, useEffect } from 'react';
import Snow from '@/components/common/Icon/Snow';
import { generateRandomNumber } from '@/utils/snowMath';

interface Snowflakes {
  left: number;
  fallDelay: number;
  shakeDelay: number;
  blur: number;
  opacity: number;
  size: number;
}

interface SnowflakesProps {
  count: number; // 눈송이 개수
}

export default function Snowflakes({ count }: SnowflakesProps) {
  const [snowflake, setSnowflake] = useState<Snowflakes[]>([]);

  useEffect(() => {
    const newSnowflake = Array.from({ length: count }).map(() => {
      const fallDelay = generateRandomNumber(0, 15, { fixed: 2 });
      const shakeDelay = Math.min(
        generateRandomNumber(0, 10, { fixed: 1 }),
        Number.parseFloat((fallDelay - 0.07).toFixed(1)),
      ); // fallDelay보다 무조건 길어야 한다. 그렇지 않으면 일부 구간 눈송이가 일자로 내리게 된다.
      return {
        left: generateRandomNumber(0, 100),
        fallDelay,
        shakeDelay,
        blur: generateRandomNumber(0.2, 0.5, { fixed: 1 }),
        opacity: generateRandomNumber(0.55, 0.95, { fixed: 2 }),
        size: generateRandomNumber(12, 18),
      };
    });
    setSnowflake(newSnowflake);
  }, []);

  return (
    <div className="absolute z-50 left-0 top-0" aria-hidden="true">
      {snowflake.map((flake, index) => (
        <div
          key={`flake-${index}`}
          className="pointer-events-none text-blue-100 shadow-sm fixed -top-[10%] z-50 select-none cursor-default animate-snow"
          style={{
            left: `${flake.left}%`,
            filter: `blur(${flake.blur}px)`,
            opacity: `${flake.opacity}`,
            animationDelay: `${flake.fallDelay}s, ${flake.shakeDelay}s`,
            WebkitAnimationDelay: `${flake.fallDelay}s, ${flake.shakeDelay}s`,
          }}
        >
          <Snow size={flake.size} />
        </div>
      ))}
    </div>
  );
}
