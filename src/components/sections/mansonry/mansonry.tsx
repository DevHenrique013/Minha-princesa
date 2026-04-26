import { useMemo, Children } from "react";
import { useMeasureHeights } from "@/hooks/useMeasureHeights";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  columns?: number;
};

export function MansonryGrid({ children, columns = 3 }: Props) {
  const items = Children.toArray(children);

  const { refs, heights } = useMeasureHeights(items.length);

  const distributed = useMemo(() => {
    const cols: React.ReactNode[][] = Array.from({ length: columns }, () => []);

    const colHeights = new Array(columns).fill(0);

    items.forEach((item, i) => {
      const h = heights[i] ?? 0;

      const smallestIndex = colHeights.indexOf(Math.min(...colHeights));

      cols[smallestIndex].push(
        <motion.div
          key={i}
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {item}
        </motion.div>,
      );

      colHeights[smallestIndex] += h;
    });

    return cols;
  }, [items, heights, columns]);

  return (
    <>
      {/* medição */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 0,
          overflow: "hidden",
          pointerEvents: "none",
          visibility: "hidden",
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* layout */}
      <div className="flex gap-6">
        {distributed.map((col, i) => (
          <div key={i} className="flex flex-col gap-6 flex-1">
            {col}
          </div>
        ))}
      </div>
    </>
  );
}
