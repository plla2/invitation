import { padStartedRemainingTime } from '@/utils/padStartedRemainingTime';
import { useEffect, useRef, useState } from 'react';

export const useCoreTimer = () => {
  const timeout = useRef<number | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
    }, 1000);

    timeout.current = intervalId;

    return () => {
      if (timeout.current) {
        window.clearInterval(timeout.current);
      }
    };
  }, []);

  return { currentTime };
};

export const useTimer = (targetDate: Date) => {
  const { currentTime } = useCoreTimer();
  const { days, hours, minutes, seconds, dday } = padStartedRemainingTime(currentTime, targetDate);

  return { days, hours, minutes, seconds, dday };
};
