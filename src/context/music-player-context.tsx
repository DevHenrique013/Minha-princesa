import type { MusicItem } from "@/data/gallery";
import { createContext } from "react";

type MusicPlayerContextType = {
  current: MusicItem | null;
  isPlaying: boolean;
  progress: number;
  duration: number;

  play: (music: MusicItem) => void;
  toggle: () => void;
  seek: (time: number) => void;
  close: () => void;
};


export const MusicPlayerContext = createContext<MusicPlayerContextType | null>(null);