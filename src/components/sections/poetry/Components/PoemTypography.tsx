import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

type AnimatedLineProps = {
  children: React.ReactNode;
  index: number;
};

export function PoemContainer({ children, className }: BaseProps) {
  return (
    <div
      className={cn(
        "max-w-2xl mx-auto px-6 py-10",
        "text-white",
        className
      )}
    >
      {children}
    </div>
  );
}

export function PoemTitle({ children, className }: BaseProps) {
  return (
    <h1
      className={cn(
        "text-3xl mb-10 text-center tracking-wide",
        className
      )}
    >
      {children}
    </h1>
  );
}

/* 👉 ESTROFE */
export function PoemText({ children, className }: BaseProps) {
  return (
    <div
      className={cn(
        "text-lg leading-8 tracking-wide",
        "mb-6", // espaço ENTRE estrofes
        className
      )}
    >
      {children}
    </div>
  );
}



export function AnimatedLine({ children, index }: AnimatedLineProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.25, // menor delay = mais fluido
        duration: 0.4,
      }}
      className="m-0"
    >
      {children}
    </motion.p>
  );
}

export function Line({ children, className }: BaseProps) {
  return (
    <p className={cn("m-0", className)}>
      {children}
    </p>
  );
}

export function Highlight({ children, className }: BaseProps) {
  return (
    <span
      className={cn(
        "text-pink-300 font-medium",
        "drop-shadow-[0_0_6px_rgba(255,182,193,0.5)]",
        className
      )}
    >
      {children}
    </span>
  );
}