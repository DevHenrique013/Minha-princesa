export function ThoughtButton({
  active,
  disabled,
  onClick,
}: {
  active: boolean;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={!active && !disabled ? onClick : undefined}
        disabled={disabled}
        className="
          px-8 py-4 rounded-full font-medium
          transition-all duration-300
        "
        style={{
          background: active ? "#444" : "var(--primary)",
          color: "white",
          cursor: active || disabled ? "not-allowed" : "pointer",
          boxShadow:
            active || disabled
              ? "none"
              : "0 0 25px var(--secondary)",
          transform: active ? "scale(0.95)" : "scale(1)",
          opacity: active || disabled ? 0.6 : 1,
        }}
      >
        {disabled
          ? "você já leu minha mente 🧠"
          : active
          ? "pensando..."
          : "espiar pensamentos 💜"}
      </button>

      {/* 👇 legenda */}
      {!disabled && !active && (
        <span
          className="
            text-sm opacity-70
            text-[color:var(--secondary)]
            animate-pulse
          "
        >
          clique mais de uma vez ✨
        </span>
      )}
    </div>
  );
}