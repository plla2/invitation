import dayjs from 'dayjs';

const padStarted = (unit: number) => String(unit).padStart(2, '0');

export const padStartedRemainingTime = (currentTime: Date, targetDate: Date) => {
  const diff = targetDate.getTime() - currentTime.getTime();

  if (diff <= 0) {
    return { days: '00', hours: '00', minutes: '00', seconds: '00', dday: 0 };
  }

  const dday = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return {
    days: padStarted(dday),
    hours: padStarted(hours),
    minutes: padStarted(minutes),
    seconds: padStarted(seconds),
    dday,
  };
};

export const getRemainingTime = (targetDate: Date) => {
  const now = dayjs();
  const target = dayjs(targetDate);
  const diff = target.diff(now);

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};
