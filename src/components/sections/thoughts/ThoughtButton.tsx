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
        : "espiar pensamentos "}
    </button>
  );
}