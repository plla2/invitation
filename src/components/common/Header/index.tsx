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
    <div className="absolute z-50 top-3 right-3">
      <audio loop ref={audioElement} className="hidden pointer-events-none">
        <source src="/musics/back-music.mp3" type="audio/mp3" />
      </audio>
      <div
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-7 h-7 flex justify-center items-center bg-blue-200 rounded-full overflow-hidden cursor-pointer"
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
