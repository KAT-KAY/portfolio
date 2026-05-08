"use client"

import { StarDecoration, FloatingStar } from "./star-decoration"
import Image from "next/image"

const skillCategories = [
  {
    title: "Design",
    skills: ["Figma", "Wireframing", "High-Fidelity Mockups", "Prototyping", "Design Systems", "Design Tokens", "Component Libraries", "Visual Hierarchy", "Typography"]
  },
  {
    title: "UX Methods",
    skills: ["User Interviews", "Competitor Analysis", "SEO Research", "Journey Mapping", "Usability Thinking", "Persona Creation", "Iterative Design", "Feedback Incorporation"]
  },
  {
    title: "AI Tools",
    skills: ["UX Pilot", "Framer AI", "Claude (Anthropic)", "AI-Assisted Prototyping", "Prompt-to-UI Workflows", "AI for Research Synthesis"]
  },
  {
    title: "Technical",
    skills: ["HTML", "CSS", "JavaScript (Basic)", "Responsive Design", "Front-End Awareness", "Code-to-Design Translation"]
  }
]

const interests = [
  { label: "Painting", rotation: -5 },
  { label: "Sketching", rotation: 3 },
  { label: "Art History", rotation: -2 },
  { label: "Fashion", rotation: 5 },
  { label: "Creative Writing", rotation: -4 },
  { label: "UI Craft", rotation: 2 }
]

export function SkillsSection() {
  return (
    <section className="py-20 bg-secondary/20 gingham-pattern relative overflow-hidden">
      {/* Top torn edge */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-card torn-edge-bottom" />
      
      {/* Floating decorations */}
      <FloatingStar 
        className="top-32 left-10" 
        size="lg" 
        color="primary" 
        style={{ '--rotation': '-10deg', animationDelay: '0.5s' } as React.CSSProperties} 
      />
      <FloatingStar 
        className="bottom-40 right-20" 
        size="md" 
        color="accent" 
        style={{ '--rotation': '15deg', animationDelay: '1.5s' } as React.CSSProperties} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skills Grid */}
          <div>
            <div className="bg-white p-6 shadow-lg mb-8 inline-block">
              <h2 className="text-3xl font-bold text-foreground">
                Skills & Expertise
              </h2>
              <p className="font-[var(--font-caveat)] text-xl text-primary mt-1">
                what I bring to the table
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <div 
                  key={category.title}
                  className="bg-white p-5 shadow-lg"
                  style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
                >
                  <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                    <StarDecoration size="sm" color="primary" />
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests & Mood Board */}
          <div>
            <div className="bg-white p-6 shadow-lg mb-8 inline-block">
              <h2 className="text-3xl font-bold text-foreground">
                Interests
              </h2>
              <p className="font-[var(--font-caveat)] text-xl text-primary mt-1">
                my favorite things
              </p>
            </div>

            {/* Interest Tags */}
            <div className="flex flex-wrap gap-4 mb-8">
              {interests.map((interest) => (
                <div 
                  key={interest.label}
                  className="bg-white px-4 py-2 shadow-lg font-[var(--font-caveat)] text-xl text-foreground"
                  style={{ transform: `rotate(${interest.rotation}deg)` }}
                >
                  {interest.label}
                </div>
              ))}
            </div>

            {/* Mini Mood Board */}
            <div className="relative h-80">
              <div 
                className="absolute left-0 top-0 w-32 h-40 bg-white p-2 shadow-lg"
                style={{ transform: 'rotate(-5deg)' }}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%2864%29-q2tLGuQjzqmnlFvSQCVMBgIKPpCaVo.jpg"
                    alt="Mood 1"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div 
                className="absolute left-20 top-24 w-36 h-44 bg-white p-2 shadow-lg z-10"
                style={{ transform: 'rotate(3deg)' }}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%2860%29-vJwtdyxWUShrRJzECHVHgGXxLGVfKD.jpg"
                    alt="Mood 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div 
                className="absolute right-10 top-8 w-28 h-36 bg-white p-2 shadow-lg"
                style={{ transform: 'rotate(6deg)' }}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%2863%29-K3zjJDsir2GgARIlxJNx1s2ZPnfRq2.jpg"
                    alt="Mood 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div 
                className="absolute right-0 bottom-0 w-32 h-40 bg-white p-2 shadow-lg"
                style={{ transform: 'rotate(-3deg)' }}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%2862%29-lDeaJN6Q5Q3aABELxo6IRdahTKRm9j.jpg"
                    alt="Mood 4"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom torn edge */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-card torn-edge-top" />
    </section>
  )
}
