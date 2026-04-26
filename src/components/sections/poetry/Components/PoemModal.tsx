import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import FloatingHearts from "@/components/base/FloatingHearts";
import type { ReactNode } from "react";

type PoemModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function PoemModal({
  open,
  onClose,
  children,
}: PoemModalProps) {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="
              relative z-10
              w-[90%] max-w-2xl
              max-h-[80vh]
              overflow-hidden
              rounded-3xl
              poem-modal-background
              will-change-transform
            "
          >
            {/* botão fechar */}
            <button
              onClick={onClose}
              className="
                absolute top-4 right-4 z-20
                text-white/70 hover:text-pink-300
                transition
              "
            >
              <X size={22} />
            </button>

            {/* conteúdo */}
            <div className="relative max-h-[80vh] overflow-y-auto px-6 py-10 custom-scroll">
              <FloatingHearts />

              <div className="relative z-10">
                {children}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}