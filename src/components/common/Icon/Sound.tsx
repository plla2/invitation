import { motion } from 'framer-motion';

const SoundWave = () => {
  const barHeights = [8, 12, 12, 8];
  return (
    <div className="flex items-center justify-center gap-[2px]">
      {barHeights.map((height, i) => (
        <motion.span
          key={i}
          className="w-[2px] bg-black-100 rounded-full"
          initial={{ height: height }}
          animate={{
            height: [height, height * 0.6, height],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
};

export default SoundWave;
