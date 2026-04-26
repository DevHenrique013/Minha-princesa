import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type IconProps = {
  icon: LucideIcon
  className?: string
}

export default function Icon({ icon: IconComponent, className }: IconProps) {
  return (
    <IconComponent
      className={cn(
        "w-5 h-5 text-[var(--primary)] transition-all",
        className
      )}
    />
  )
}