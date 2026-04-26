import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils.ts";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 transition-all duration-200 ease-out active:scale-[0.97]",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--primary)] text-white " +
          "hover:brightness-110 hover:saturate-110 " +
          "shadow-sm hover:shadow-md " +
          "transition-all duration-200 ease-out",

        glow:
          "bg-[var(--primary)] text-white " +
          "shadow-[0_0_0px_var(--primary)] " +
          "hover:shadow-[0_0_16px_var(--primary)] " +
          "hover:brightness-110 hover:saturate-110 " +
          "ring-1 ring-[var(--primary)]/20 " +
          "transition-all duration-300 ease-out",

        intense:
          "bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-orange-500 " +
          "text-white " +
          "shadow-md " +
          "hover:shadow-xl hover:brightness-110 hover:saturate-125 " +
          "hover:scale-[1.03] " +
          "transition-all duration-300 ease-out",

        ghost:
          "border border-[var(--primary)]/30 text-[var(--primary)] " +
          "bg-transparent " +
          "hover:bg-[var(--primary)]/10 hover:border-[var(--primary)] " +
          "hover:text-[var(--primary)] " +
          "transition-all duration-200 ease-out",

        soft:
          "bg-[#20232B] text-[#E6E6EB] " +
          "border border-[#2A2E38] " +
          "hover:bg-[#2A2E38] hover:border-[#343946] " +
          "hover:shadow-sm " +
          "transition-all duration-200 ease-out",

        disabled:
          "bg-[#20232B] text-[#6B7280] " +
          "border border-[#2A2E38] " +
          "opacity-50 cursor-not-allowed pointer-events-none",

        // compatibilidade
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground " +
          "transition-all duration-200",

        secondary:
          "bg-secondary text-white hover:bg-secondary/80 " +
          "transition-all duration-200",

        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 " +
          "transition-all duration-200",

        link: "text-[var(--primary)] underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
