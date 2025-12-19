/**
 * MESA GROUP BUTTON CONVENTIONS:
 * 
 * Primary CTA buttons (mesa-primary): Amber/yellow style - bg-amber-400 with border-amber-500
 * - Use for main call-to-action buttons like "Start Your Credit Transformation", "Get Full Service Program"
 * 
 * Secondary/Accompanying buttons (mesa-secondary): White with gray border
 * - Use for secondary actions like "How It Works", "Get DIY Program", phone call buttons
 * 
 * Orange buttons (mesa-orange): #EA6A2B orange - reserved for special emphasis only
 * - Rarely used; prefer mesa-primary for most CTAs
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Mesa Group Primary CTA Button (amber/yellow)
        "mesa-primary": "bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 font-bold",
        // Mesa Group Secondary/Accompanying Button (white with gray border)
        "mesa-secondary": "bg-white hover:bg-gray-50 text-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-gray-300 font-semibold",
        // Mesa Group Orange CTA Button (for specific pages like BusinessCreditBuilder Final CTA)
        "mesa-orange": "bg-[#EA6A2B] hover:bg-[#d55f26] text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 font-bold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "px-8 py-4 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
