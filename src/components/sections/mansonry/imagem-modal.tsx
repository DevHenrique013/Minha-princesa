import {
  Dialog,
  DialogContent
} from "@/components/ui/dialog"

import { useState } from "react"
import type { ImageItem } from "@/data/gallery"

type Props = {
  item: ImageItem
  onClose: (open: boolean) => void
}

export function ImageModal({ item, onClose }: Props) {
  const [zoomed, setZoomed] = useState(false)

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="w-screen h-screen max-w-none p-0 bg-black/95 border-none" fullScreen>
        
     
        <div
          className="relative w-full h-full flex items-center justify-center overflow-hidden cursor-zoom-in"
          onClick={() => setZoomed((z) => !z)}
        >
          <img
            src={item.src}
            className={`
              transition-transform duration-300
              ${zoomed ? "scale-150 cursor-zoom-out" : "scale-100"}
              max-w-full max-h-full object-contain
            `}
             loading="lazy"
          />

          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            
            <h2 className="text-white text-xl font-bold mb-2">
              {item.title}
            </h2>

            <p className="custom-scroll text-white/80 text-sm max-w-2xl max-h-[120px] overflow-y-auto pr-2">
              {item.description}
            </p>
          </div>

          <button
            onClick={() => onClose(false)}
            className="absolute top-4 right-4 text-white text-xl"
          >
          </button>

          <span className="absolute bottom-4 right-4 text-xs text-white/60">
            clique para zoom
          </span>
        </div>

      </DialogContent>
    </Dialog>
  )
}