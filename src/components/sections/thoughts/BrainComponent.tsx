export function BrainVisual({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="w-40 h-40 rounded-full blur-2xl transition-all duration-700"
        style={{
          background: active
            ? "radial-gradient(circle, var(--secondary), transparent)"
            : "rgba(255,255,255,0.05)",
          boxShadow: active
            ? "0 0 80px var(--secondary)"
            : "none",
        }}
      />
    </div>
  );
}