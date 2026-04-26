import type { ReactNode } from "react";

type PoemCardProps = {
  title: string;
  image: string;
  onClick: () => void;
  clipIcon?: ReactNode;
  color?: string;
};

export default function PoemCard({
  title,
  image,
  onClick,
  clipIcon,
  color = "#A020F0",
}: PoemCardProps) {
  return (
    <div
      onClick={onClick}
      className="relative group cursor-pointer"
    >
      {clipIcon && (
  <div
    className="
      absolute -top-4 -right-4 z-20
      transition-all duration-300
      group-hover:rotate-[18deg] group-hover:scale-110
    "
    style={{
      transform: "rotate(12deg)",
      transformOrigin: "top right",
    }}
  >
    {/* BASE (profundidade fake) */}
    <div
      className="
        absolute inset-0
        translate-x-[2px] translate-y-[3px]
        rounded-full blur-[3px]
      "
      style={{
        background: color,
        opacity: 0.4,
      }}
    />

    {/* CORPO DO CLIP */}
    <div
      className="
        relative
        p-2 rounded-full
        backdrop-blur-md
      "
      style={{
        color,
        background: "rgba(0,0,0,0.35)",
        boxShadow: `
          0 6px 14px rgba(0,0,0,0.45),
          0 0 12px ${color}88
        `,
      }}
    >
      {clipIcon}
    </div>
  </div>
)}
      {/* CARD REAL */}
      <div
        className="
          rounded-2xl overflow-hidden
          border border-white/10
          bg-white/5 backdrop-blur-md
          transition-all duration-300
          hover:scale-[1.03] hover:bg-white/10
        "
      >
        <div className="relative h-52">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

          {/* título */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white text-lg font-medium tracking-wide">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}