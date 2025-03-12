"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

const sectionVariants = cva(
  "w-full h-dvh bg-background flex justify-between px-8",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        secondary: "bg-secondary text-secondary-foreground ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export function ScrollSection({
  children,
  className,
  variant,
  ...props
}: React.ComponentProps<"section"> & VariantProps<typeof sectionVariants>) {
  return (
    <section {...props} className={cn(sectionVariants({ variant, className }))}>
      {children}
    </section>
  );
}
