import useMusicPlayer from "@/hooks/useMusicPlayer";
import Icon from "@/components/icons/icon";
import { Play, Pause, CircleXIcon } from "lucide-react";
import { WaveformProgress } from "./wave-form-progress";

export function GlobalMusicPlayer() {
  const { current, isPlaying, progress, duration, toggle, seek, close } =
    useMusicPlayer();

  const percent = duration ? progress / duration : 0;

  if (!current) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 backdrop-blur-xl
  bg-black/40
  border-t border-purple-500/20 p-4 flex items-center gap-4 z-50"
    >
      <img src={current.cover} className="w-12 h-12 rounded" />

      <div className="min-w-[120px]">
        <p className="font-semibold">{current.title}</p>
        <p className="text-sm text-muted-foreground">{current.artist}</p>
      </div>

      <button onClick={toggle}>
        <Icon className="text-[#A020F0]" icon={isPlaying ? Pause : Play} />
      </button>

      <div
        className="relative w-full h-10 flex items-center group cursor-pointer"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const percent = x / rect.width;
          seek(percent * duration);
        }}
      >
        <WaveformProgress
          progress={progress}
          duration={duration}
          onSeek={seek}
        />
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[4px] rounded-full glow-bar"
          style={{
            width: `${percent * 100}%`,
          }}
        />
      </div>

      <button onClick={close} className="text-foreground hover:text-[#A020F0]">
        <CircleXIcon />
      </button>
    </div>
  );
}
