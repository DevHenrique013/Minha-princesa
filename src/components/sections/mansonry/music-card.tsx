import type { MusicItem } from "@/data/gallery";
import useMusicPlayer from "@/hooks/useMusicPlayer";
import { Pause,Play } from "lucide-react";
import Icon from "@/components/icons/icon";

export function MusicCard({ item }: { item: MusicItem }) {
  const { play, current, isPlaying } = useMusicPlayer();

  const isCurrent = current?.id === item.id;

  return (
    <div className="relative group rounded-2xl overflow-hidden">
      <img src={item.cover} />

      {/* Shade com roxo */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#8806CE]/60 to-transparent" />

      {/* Info */}
      <div className="absolute bottom-3 left-3 text-white">
        <p className="font-semibold">{item.title}</p>
        <p className="text-sm opacity-80">{item.artist}</p>
      </div>

      {/* Hover Play */}
      <button
        onClick={() => play(item)}
        className="
          absolute inset-0 flex items-center justify-center
          opacity-0 group-hover:opacity-100
          transition
        "
      >
        <div
          className="
            p-4 rounded-full
            backdrop-blur-md
          "
          style={{
            background: "rgba(136, 6, 206, 0.3)",
            boxShadow: "0 0 20px rgba(160, 32, 240, 0.6)",
          }}
        >
          <Icon
            icon={isCurrent && isPlaying ? Pause : Play}
            className="text-white"
          />
        </div>
      </button>
    </div>
  );
}