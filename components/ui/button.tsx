import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300/60 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border border-slate-200/20 bg-slate-100 px-6 py-3 text-slate-950 shadow-[0_0_35px_rgba(226,232,240,0.14)] hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_0_45px_rgba(167,139,250,0.22)]",
        outline:
          "border border-white/10 bg-white/[0.03] px-6 py-3 text-slate-200 hover:-translate-y-0.5 hover:border-slate-300/30 hover:bg-white/[0.07] hover:text-white"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

function Button({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, className }))} {...props} />;
}

export { Button, buttonVariants };
