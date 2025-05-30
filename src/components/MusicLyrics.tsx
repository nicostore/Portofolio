"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Lyric {
  time: number;
  text: string;
}

const lyrics: Lyric[] = [
  { time: 0, text: "♪ Intro Music ♪" },
  { time: 23, text: "Suatu malam adam bercerita" },
  { time: 33, text: "Hawanya tak lagi di jalur yang sama" },
  { time: 44, text: "Bacaan dan doa yang mulai berbeda" },
  { time: 54, text: "Ego dan air mata kita bicara" },
  { time: 64, text: "Gila tak masuk logika" },
  { time: 72, text: "Termangu hatiku" },
  { time: 79, text: "Kau menggenggam kumenadahnya" },
  { time: 90, text: "Berdamai dengan apa yang terjadi" },
  { time: 100, text: "Kunci dari semua masalah ini" },
  { time: 110, text: "Jujur tak mudah untuk melangkah pergi" },
  { time: 120, text: "Ini soal hati bukan yang diyakini" },
  { time: 130, text: "Ow gila tak masuk logika" },
  { time: 139, text: "Termangu hatiku" },
  { time: 145, text: "Kau menggenggam kumenadahnya" },
  { time: 150, text: "Ow gila ini tak biasa" },
  { time: 159, text: "Tertegun hatiku" },
  { time: 165, text: "Kau menggenggam kumenadahnya" },
  { time: 175, text: "Ho oh" },
  { time: 190, text: "Jangan salahkan faham ku kini tertuju oh" },
  { time: 200, text: "Siapa yang tau" },
  { time: 202, text: "Siapa yang mau" },
  { time: 205, text: "Kau di sana" },
  { time: 207, text: "Aku diseberangmu" },
  { time: 210, text: "Cerita kita sulit dicerna" },
  { time: 215, text: "Tak lagi sama" },
  { time: 218, text: "Cara berdoa" },
  { time: 220, text: "Cerita kita sulit diterka" },
  { time: 225, text: "Tak lagi sama" },
  { time: 228, text: "Arah kiblatnya oh" },
  { time: 231, text: "Repeat🔁" },
  { time: 253, text: "🎵Outro🎵" }
];

interface MusicLyricsProps {
  isPlaying: boolean;
  currentTime: number;
}

const MusicLyrics = ({ isPlaying, currentTime }: MusicLyricsProps) => {
  const [currentLyric, setCurrentLyric] = useState<string>("");

  useEffect(() => {
    if (!isPlaying) {
      setCurrentLyric("");
      return;
    }

    const currentIndex = lyrics.findIndex((lyric, index) => {
      const nextLyric = lyrics[index + 1];
      return currentTime >= lyric.time && (!nextLyric || currentTime < nextLyric.time);
    });

    if (currentIndex !== -1) {
      setCurrentLyric(lyrics[currentIndex].text);
    }
  }, [isPlaying, currentTime]);

  return (
    <AnimatePresence>
      {isPlaying && currentLyric && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-32 left-0 right-0 text-center z-40"
        >
          <motion.p
            className="inline-block px-6 py-3 bg-black/70 text-white rounded-full text-lg font-medium backdrop-blur-sm"
            animate={{
              scale: [1, 1.02, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {currentLyric}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MusicLyrics;
