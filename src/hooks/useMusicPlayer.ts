import { useContext } from "react";
import { MusicPlayerContext } from "@/context/music-player-context";

export default function useMusicPlayer() {
  const context = useContext(MusicPlayerContext);

  if (!context) {
    throw new Error("useMusicPlayer must be used within MusicPlayerProvider");
  }

  return context;
}