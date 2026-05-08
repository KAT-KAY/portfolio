"use client"

import { StarDecoration } from "./star-decoration"
import { Polaroid } from "./polaroid"
import { WashiTape } from "./washi-tape"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card paper-texture relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - About Text */}
          <div className="relative">
            {/* Decorative tape */}
            <WashiTape className="absolute -top-3 left-10 z-10" rotation={-5} variant="sage" />
            
            <div className="bg-white p-8 shadow-lg relative">
              <div className="absolute -top-2 -left-2">
                <StarDecoration size="md" color="primary" />
              </div>
              
              <h2 className="inline-block bg-primary text-primary-foreground px-4 py-1 text-sm font-medium mb-4">
                hello!
              </h2>
              
              <h3 className="font-[var(--font-caveat)] text-4xl text-foreground mb-6">
                about myself
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m Kaynat Tahir — a Software Engineering student at GCUF (6th semester)
                  who fell into design and never looked back. I&apos;m a painter and sketch
                  artist first, which means I bring a genuine visual instinct to everything
                  I design. I don&apos;t just wireframe; I think about feeling, flow, and the
                  small details that make people trust an interface.
                </p>
                <p>
                  I&apos;ve had hands-on experience designing for a university society,
                  completed a UI/UX internship, and earned a Google UX Design
                  Certificate through Coursera. I use AI tools like Claude, UX Pilot, AntiGravity
                  and Framer in my actual workflow — not as shortcuts, but as
                  collaborators that help me move faster without losing intention.
                </p>
                <p>
                  What drives me is the &quot;why&quot; behind every design decision.
                  I&apos;m drawn to projects that solve real, overlooked problems —
                  like the gap in Pakistan&apos;s pet safety system that led me to
                  design Hifazat Card. I bring curiosity, craft to every project I touch.
                </p>
              </div>

              {/* Skills Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["Figma", "UX Research", "Wireframing", "Prototyping", "Design Systems", "HTML/CSS/JS", "AI-Assisted Design", "User Interviews", "Competitor Analysis", "Design Tokens"].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-muted text-sm text-muted-foreground rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Photo Collage */}
          <div className="relative min-h-[500px]">
            {/* Vertical text */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
              <span className="font-[var(--font-caveat)] text-6xl text-primary/30 whitespace-nowrap">
                about myself
              </span>
            </div>

            {/* Photo collage */}
            <div className="grid grid-cols-2 gap-4 pl-8">
              <Polaroid
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%2862%29-lDeaJN6Q5Q3aABELxo6IRdahTKRm9j.jpg"
                alt="Creative illustration"
                rotation={-3}
                className="w-full"
              />
              <Polaroid
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%2859%29-0DJpj7GJJ4x5Etyr0iV6HiFybHYM9U.jpg"
                alt="Field illustration"
                rotation={5}
                className="w-full mt-8"
              />
              <Polaroid
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%2864%29-q2tLGuQjzqmnlFvSQCVMBgIKPpCaVo.jpg"
                alt="Yellow flower"
                rotation={2}
                className="w-full -mt-4"
              />
              <Polaroid
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%2860%29-vJwtdyxWUShrRJzECHVHgGXxLGVfKD.jpg"
                alt="Headphones on grass"
                rotation={-4}
                className="w-full mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
