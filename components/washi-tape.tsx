import { cn } from "@/lib/utils"

interface WashiTapeProps {
  className?: string
  variant?: "pink" | "sage" | "mauve"
  rotation?: number
}

export function WashiTape({ 
  className,
  variant = "pink",
  rotation = 0
}: WashiTapeProps) {
  const variantClasses = {
    pink: "bg-primary/60",
    sage: "bg-secondary/60",
    mauve: "bg-accent/60"
  }

  return (
    <div 
      className={cn(
        "h-6 w-24",
        variantClasses[variant],
        className
      )}
      style={{ 
        transform: `rotate(${rotation}deg)`,
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 5px,
          rgba(255,255,255,0.3) 5px,
          rgba(255,255,255,0.3) 10px
        )`
      }}
    />
  )
}
