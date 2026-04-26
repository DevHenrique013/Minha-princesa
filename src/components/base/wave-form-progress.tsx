import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  progress: number;
  duration: number;
  onSeek: (time: number) => void;
};

export function WaveformProgress({ progress, duration, onSeek }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [barCount, setBarCount] = useState(60);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const resize = () => {
      const width = el.offsetWidth;
      const count = Math.floor(width / 5);
      setBarCount(count);
    };

    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const bars = useMemo(
    () => Array.from({ length: barCount }).map(() => Math.random() * 20 + 5),
    [barCount],
  );

  const percent = duration ? progress / duration : 0;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-10 flex items-center group cursor-pointer"
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percent = x / rect.width;
        onSeek(percent * duration);
      }}
    >
      <div className="absolute inset-0 flex items-center gap-[2px]">
  {bars.map((height, i) => {
    const active = i / bars.length < percent;

    return (
      <div
        key={i}
        className="wave-bar"
        style={{
          height,
          background: active
            ? "#A020F0"
            : "rgba(160, 32, 240, 0.2)",
        }}
      />
    );
  })}
</div>

      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 h-[4px] rounded-full glow-bar"
        style={{
          width: `${percent * 100}%`,
        }}
      />
    </div>
  );
}
