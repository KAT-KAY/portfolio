"use client"

import { StarDecoration, FloatingStar } from "./star-decoration"
import Image from "next/image"

export function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary/80 paper-texture"
    >
      {/* Floating Stars */}
      <FloatingStar 
        className="top-20 left-10" 
        size="lg" 
        color="white" 
        style={{ '--rotation': '-5deg', animationDelay: '0s' } as React.CSSProperties} 
      />
      <FloatingStar 
        className="top-40 right-20" 
        size="xl" 
        color="white" 
        style={{ '--rotation': '10deg', animationDelay: '0.5s' } as React.CSSProperties} 
      />
      <FloatingStar 
        className="bottom-32 left-1/4" 
        size="md" 
        color="white" 
        style={{ '--rotation': '15deg', animationDelay: '1s' } as React.CSSProperties} 
      />
      <FloatingStar 
        className="bottom-20 right-1/3" 
        size="lg" 
        color="white" 
        style={{ '--rotation': '-10deg', animationDelay: '1.5s' } as React.CSSProperties} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left z-10">
          <p className="text-white/80 text-sm tracking-widest uppercase mb-4">
            @kaynat.designs • UI/UX Designer & Software Engineer
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-2">
            meet the
          </h1>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white uppercase tracking-wider">
            DESIGNER
          </h1>
          <div className="mt-6 flex items-center gap-2 justify-center lg:justify-start">
            <StarDecoration size="sm" color="white" />
            <p className="font-[var(--font-caveat)] text-2xl text-white/90">
              a creative portfolio
            </p>
          </div>
          <p className="mt-6 text-white/70 max-w-md mx-auto lg:mx-0">
            I design interfaces that feel human — informed by research,
            shaped by empathy, and built with an artist's eye.
            Currently pursuing Software Engineering while designing
            things that actually matter to real people.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#work" 
              className="px-8 py-3 bg-white text-primary font-medium rounded-full hover:bg-white/90 transition-colors"
            >
              See My Work →
            </a>
            <a 
              href="#about" 
              className="px-8 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              Read My Story →
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Main polaroid-style image */}
            <div 
              className="bg-white p-3 pb-12 shadow-2xl"
              style={{ transform: 'rotate(3deg)' }}
            >
              <div className="relative w-64 h-80 sm:w-80 sm:h-96 overflow-hidden bg-muted">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%2861%29-DvGA85xwYagsIa7KBQzFDw5VsKBSh6.jpg"
                  alt="Creative designer illustration"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
            {/* Signature */}
            <div className="absolute -bottom-4 right-4 font-[var(--font-caveat)] text-3xl text-white">
              ~ Designer
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-card torn-edge-top" />
    </section>
  )
}
