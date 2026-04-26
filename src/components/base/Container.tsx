import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type ContainerProps = {
  children: ReactNode
  className?: string
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "max-w-6xl mx-auto w-full",
        "px-6 py-20",
        className
      )}
    >
      {children}
    </div>
  )
}