import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Pause from '@/components/common/Icon/Pause';
import SoundWave from '@/components/common/Icon/Sound';

const Header = () => {
  const audioElement = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!audioElement.current) return;

    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  }, [isPlaying, audioElement]);

  return (
    <div onClick={() => setIsPlaying(!isPlaying)} className="absolute right-3 top-3 z-50 cursor-pointer">
      <audio loop ref={audioElement}>
        <source src="/musics/back-music.mp3" type="audio/mp3" />
      </audio>
      <div
        className="w-7 h-7 flex justify-center items-center bg-white-300 rounded-3xl overflow-hidden"
        // onClick={() => setIsPlaying(!isPlaying)}
      >
        <AnimatePresence mode="wait">
          {!isPlaying ? (
            <motion.div
              key="pause"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="absolute"
            >
              <Pause />
            </motion.div>
          ) : (
            <motion.div
              key="sound"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="absolute"
            >
              <SoundWave />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
