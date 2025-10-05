import { useEffect, useRef } from "react";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Auto-play welcome audio on mount
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
        }
      } catch (error) {
        console.log("Audio autoplay was prevented:", error);
      }
    };

    playAudio();
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/audio/welcome.mpeg"
      preload="auto"
    />
  );
};

export default AudioPlayer;
