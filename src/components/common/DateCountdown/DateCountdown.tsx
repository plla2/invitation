import { useTimer } from '@/hooks/useCoreTimer';
import { motion, AnimatePresence } from 'framer-motion';
import { forwardRef, PropsWithChildren } from 'react';

interface DateCountdownProps {
  targetDate: Date;
}

export const DateCountdown: React.FC<DateCountdownProps> = ({ targetDate }) => {
  const { days, hours, minutes, seconds, dday } = useTimer(targetDate);

  const timeUnits = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ];

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="flex gap-2 justify-center items-center font-GowunDodum">
        {timeUnits.map(({ label, value }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center bg-white-200 p-2 rounded-xl shadow-md w-[75px] h-24"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <div className="flex gap-1">
                {value.split('').map((digit, idx) => (
                  <Digit key={`${label}-${digit}-${idx}`}>{digit}</Digit>
                ))}
              </div>
            </AnimatePresence>
            <span className="mt-2 text-sm text-test-100">{label}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-1 font-GowunDodum text-sm items-center">
        <span>건우, 현희 결혼식이</span>
        <span className="text-blue-500 font-semibold text-base">{`${dday}일`}</span>
        <span>남았습니다.</span>
      </div>
    </div>
  );
};

const Digit = forwardRef<HTMLSpanElement, PropsWithChildren<unknown>>(({ children }, ref) => (
  <motion.span
    ref={ref}
    className="text-2xl font-GowunDodum text-blue-500"
    transition={{ type: 'spring', duration: 0.9, bounce: 0.3 }}
    initial={{ opacity: 0, y: 40, rotateX: 120, scale: 0.5 }}
    animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
    exit={{ opacity: 0, y: -10, rotateX: 60, scale: 0.2 }}
  >
    {children}
  </motion.span>
));
