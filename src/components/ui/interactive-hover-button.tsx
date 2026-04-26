import type { ReactNode } from "react"
import { cn } from "@/lib/utils.ts";

type InteractiveHoverButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: ReactNode
  }

export function InteractiveHoverButton({
  children,
  className,
  icon,
  ...props
}: InteractiveHoverButtonProps) {
  return (
    <button
      className={cn(
        "group bg-background relative w-auto cursor-pointer overflow-hidden rounded-full border p-2 px-6 text-center font-semibold active:scale-95 ease-in-out",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        <div className="bg-primary h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]" />
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>

      <div className="text-primary-foreground absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        {icon}
      </div>
    </button>
  )
}