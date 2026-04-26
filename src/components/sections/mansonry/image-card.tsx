import { useState } from "react"
import { ImageModal } from "./imagem-modal"
import type { ImageItem } from "@/data/gallery"

export function ImageCard({ item }: { item: ImageItem }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="relative cursor-pointer overflow-hidden rounded-2xl"
      >
        <img src={item.src} className="w-full h-full object-cover" loading="lazy" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <h3 className="absolute bottom-3 left-3 text-white font-semibold">
          {item.title}
        </h3>
      </div>

      {open && (
        <ImageModal item={item} onClose={setOpen} />
      )}
    </>
  )
}