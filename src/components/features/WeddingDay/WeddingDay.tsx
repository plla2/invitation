import { motion } from 'framer-motion';
import Calendar from '@/components/common/Calendar/Calendar';
import { DateCountdown } from '@/components/common/DateCountdown/DateCountdown';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeIn' } },
};

const WeddingDay = () => {
  return (
    <motion.div
      className="bg-blue-300 py-28 w-full flex flex-col items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUpVariant}
    >
      <motion.span
        className="font-SometimesMedium font-medium tracking-wider text-blue-500 text-4xl mb-10"
        variants={fadeUpVariant}
      >
        WEDDING DAY
      </motion.span>
      <div className="font-GowunDodum flex flex-col items-center gap-3">
        <motion.span
          className="text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          2025.12.06
        </motion.span>
        <motion.span
          className="text-black-200 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          토요일 오전 11시 30분
        </motion.span>
      </div>
      <motion.div
        className="px-10 w-full my-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Calendar />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <DateCountdown targetDate={new Date('2025-12-06T13:00:00')} />
      </motion.div>
    </motion.div>
  );
};

export default WeddingDay;
