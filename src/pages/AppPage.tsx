import HeroSection from "@/components/sections/hero/Hero";
import { useState } from "react";
import MainExperience from "./MainExperience";
import { motion, AnimatePresence } from "framer-motion";

export default function AppPage() {
  const [entered, setEntered] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!entered ? (
        <motion.div
          key="hero"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          <HeroSection onEnter={() => setEntered(true)} />
        </motion.div>
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <MainExperience />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
