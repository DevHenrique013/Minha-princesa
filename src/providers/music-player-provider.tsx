import {
  useRef,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { MusicPlayerContext } from "@/context/music-player-context";
import type { MusicItem } from "@/data/gallery";

export function MusicPlayerProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [current, setCurrent] = useState<MusicItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  function play(music: MusicItem) {
    const audio = audioRef.current;
    if (!audio) return;

    // mesma música → toggle
    if (current?.id === music.id) {
      toggle();
      return;
    }

    // 🔥 troca de música (lazy real acontece aqui)
    audio.pause();
    audio.currentTime = 0;

    audio.src = music.src;

    // 👉 AQUI é o lazy loading real
    audio.load();

    setCurrent(music);

    audio.play().catch(() => {});
  }

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }

  function seek(time: number) {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = time;
    setProgress(time);
  }

  function close() {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;

    setCurrent(null);
    setProgress(0);
    setDuration(0);
  }

  // ❌ REMOVIDO: carregamento automático
  // useEffect(() => {
  //   ...
  // }, [current]);

  // 🎯 sincronização com eventos reais
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setProgress(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration || 0);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <MusicPlayerContext.Provider
      value={{
        current,
        isPlaying,
        progress,
        duration,
        play,
        toggle,
        seek,
        close,
      }}
    >
      {children}

      {/* 🔥 ESSENCIAL */}
      <audio ref={audioRef} preload="none" />
    </MusicPlayerContext.Provider>
  );
}