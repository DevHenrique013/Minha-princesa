"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Heart = {
  id: number;
  left: number;
  x: number;
  delay: number;
  duration: number;
};

export default function FloatingHearts() {
  const hearts = useMemo<Heart[]>(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      x: Math.random() * 80 - 40,
      delay: i * 0.8,
      duration: 5 + Math.random() * 2,
    }));
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: 80, opacity: 0 }}
          animate={{
            y: -180,
            opacity: [0, 1, 0],
            x: heart.x,
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute text-pink-300/40 text-xl
            will-change-transform
          "
          style={{ left: `${heart.left}%` }}
        >
          ♥
        </motion.div>
      ))}
    </div>
  );
}