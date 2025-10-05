import { useEffect, useRef, useState } from "react";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    // Play audio on first user interaction
    const playAudio = async () => {
      if (audioRef.current && !hasPlayed) {
        try {
          await audioRef.current.play();
          setHasPlayed(true);
        } catch (error) {
          console.log("Audio play error:", error);
        }
      }
    };

    // Listen for any user interaction
    const handleInteraction = () => {
      playAudio();
      // Remove listeners after first play
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
    };

    document.addEventListener("click", handleInteraction);
    document.addEventListener("touchstart", handleInteraction);

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
    };
  }, [hasPlayed]);

  return (
    <audio
      ref={audioRef}
      src="/audio/welcome.mpeg"
      preload="auto"
    />
  );
};

export default AudioPlayer;
