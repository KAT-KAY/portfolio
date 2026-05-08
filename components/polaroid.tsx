"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"

interface PolaroidProps {
  src: string
  alt: string
  caption?: string
  rotation?: number
  className?: string
}

export function Polaroid({ 
  src, 
  alt, 
  caption, 
  rotation = 0,
  className 
}: PolaroidProps) {
  return (
    <div 
      className={cn(
        "bg-white p-2 pb-10 shadow-lg transition-transform hover:scale-105 hover:shadow-xl",
        className
      )}
      style={{ 
        transform: `rotate(${rotation}deg)`,
        '--rotation': `${rotation}deg`
      } as React.CSSProperties}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
      {caption && (
        <p className="mt-2 text-center font-[var(--font-caveat)] text-lg text-muted-foreground">
          {caption}
        </p>
      )}
    </div>
  )
}
