"use client"

import { cn } from "@/lib/utils"

interface StarDecorationProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "filled" | "outline"
  color?: "white" | "primary" | "accent"
}

export function StarDecoration({ 
  className, 
  size = "md", 
  variant = "filled",
  color = "white"
}: StarDecorationProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-20 h-20"
  }

  const colorClasses = {
    white: variant === "filled" ? "fill-white" : "fill-none stroke-white stroke-2",
    primary: variant === "filled" ? "fill-primary" : "fill-none stroke-primary stroke-2",
    accent: variant === "filled" ? "fill-accent" : "fill-none stroke-accent stroke-2"
  }

  return (
    <svg 
      viewBox="0 0 24 24" 
      className={cn(sizeClasses[size], colorClasses[color], "star-twinkle", className)}
    >
      <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
    </svg>
  )
}

export function FloatingStar({ 
  className, 
  style,
  ...props 
}: StarDecorationProps & { style?: React.CSSProperties }) {
  return (
    <div className={cn("absolute float", className)} style={style}>
      <StarDecoration {...props} />
    </div>
  )
}
