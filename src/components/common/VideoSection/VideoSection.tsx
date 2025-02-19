import { useRef } from 'react';
import { useInView } from 'framer-motion';

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { once: false, margin: '-10% 0px' });

  if (videoRef.current) {
    if (isInView) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  return (
    <div className="flex w-20 h-20 justify-center items-center">
      <video ref={videoRef} src="/images/flower.mp4" muted />
    </div>
  );
};

export default VideoSection;
