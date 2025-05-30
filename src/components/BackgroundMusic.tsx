"use client";

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import MusicLyrics from './MusicLyrics';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/music/background.mp3');
    audioRef.current.loop = true;
    
    const handleCanPlay = () => {
      setIsLoaded(true);
    };

    const handleError = () => {
      setIsLoaded(false);
      console.log('Audio file could not be loaded. Please add your background music file at /public/music/background.mp3');
    };

    const handleTimeUpdate = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener('canplaythrough', handleCanPlay);
      audioRef.current.addEventListener('error', handleError);
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('canplaythrough', handleCanPlay);
        audioRef.current.removeEventListener('error', handleError);
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = async () => {
    if (audioRef.current && isLoaded) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          await audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      } catch (error) {
        console.log('Playback failed:', error);
        setIsPlaying(false);
      }
    }
  };

  if (!isLoaded) return null;

  return (
    <>
      <motion.button
      onClick={togglePlay}
      className={`fixed top-4 left-4 p-3 rounded-full z-50 ${
        isPlaying 
          ? 'bg-white text-black' 
          : 'bg-black text-white'
      } transition-colors duration-300`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        {isPlaying ? (
          <>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M12 18.364l-4.95-4.95A7 7 0 015.636 5.636" />
            </svg>
            <motion.div
              className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15.414a8 8 0 110-6.828M12 6v6l4 4" />
          </svg>
        )}
      </div>
      </motion.button>

      <MusicLyrics isPlaying={isPlaying} currentTime={currentTime} />
    </>
  );
};

export default BackgroundMusic;
