import { useEffect, useRef, useState } from "react";

export function useMeasureHeights(count: number) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [heights, setHeights] = useState<number[]>([]);

  useEffect(() => {
    const observers: ResizeObserver[] = [];

    refs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new ResizeObserver(([entry]) => {
        setHeights((prev) => {
          const next = [...prev];
          next[index] = entry.contentRect.height;
          return next;
        });
      });

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [count]);

  return { refs, heights };
}