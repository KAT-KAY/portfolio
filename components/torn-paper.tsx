import { cn } from "@/lib/utils"

interface TornPaperProps {
  children: React.ReactNode
  className?: string
  variant?: "top" | "bottom" | "both"
  color?: "cream" | "pink" | "sage"
}

export function TornPaper({ 
  children, 
  className,
  variant = "both",
  color = "cream"
}: TornPaperProps) {
  const colorClasses = {
    cream: "bg-card",
    pink: "bg-primary/20",
    sage: "bg-secondary/30"
  }

  const edgeClasses = {
    top: "torn-edge-top",
    bottom: "torn-edge-bottom",
    both: "torn-edge-top torn-edge-bottom"
  }

  return (
    <div className={cn(
      colorClasses[color],
      variant === "top" && "torn-edge-top",
      variant === "bottom" && "torn-edge-bottom",
      className
    )}>
      {children}
    </div>
  )
}
