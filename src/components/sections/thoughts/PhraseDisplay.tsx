import { useEffect, useState } from "react";

export function LineDisplay({ text }: { text: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, [text]);

  return (
    <p
      className={`
        text-white text-lg md:text-xl
        transition-all duration-700
        ${visible ? "opacity-100" : "opacity-0"}
      `}
    >
      {text}
    </p>
  );
}