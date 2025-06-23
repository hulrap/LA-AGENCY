import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#ffb366] text-[#1a1a1a] hover:bg-[#ff9933] shadow-lg",
        secondary: "bg-white/10 text-white backdrop-blur-md hover:bg-white/20",
        ghost: "text-[#ffb366] hover:bg-[#ffb366]/10",
        outline: "border-2 border-[#ffb366] bg-transparent text-[#ffb366] hover:bg-[#ffb366]/10",
        link: "text-[#ffb366] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-9 px-4",
        lg: "h-14 px-10 py-4 text-lg",
        xl: "h-16 px-12 py-6 text-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants }; 