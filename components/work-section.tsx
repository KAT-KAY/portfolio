"use client"

import { StarDecoration } from "./star-decoration"
import { WashiTape } from "./washi-tape"
import Image from "next/image"

const projects = [
  {
    title: "ArtVista",
    category: "Mobile App Design",
    description: "A museum companion app that lets art tourists, students, and enthusiasts scan any painting and instantly access information about the artwork, the artist, and its historical context. Designed to make art accessible for everyone who's ever stood in front of a painting and felt lost.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%2863%29-K3zjJDsir2GgARIlxJNx1s2ZPnfRq2.jpg",
    tags: ["Mobile", "EdTech", "AI-Powered", "UX Research"]
  },
  {
    title: "Hifazat Card",
    category: "Web Platform Design",
    description: "Pakistan's first QR-based pet safety system. A physical card + digital dashboard that shows a lost pet's information, owner contact details, GPS location, and vaccination history the moment anyone scans it. Inspired by a real incident where a pet was killed because no one knew it had an owner.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%2865%29-Mc1JjrY975V3u2voEDy8quVE5pCRfW.jpg",
    tags: ["Web", "Social Impact", "Pakistan-First", "In Progress"]
  },
  {
    title: "Client Sign-In Page",
    category: "UI Design / Freelance",
    description: "A clean, functional sign-in interface delivered for a real client. My first experience taking a brief from someone outside academia and shipping something they actually used.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%2859%29-0DJpj7GJJ4x5Etyr0iV6HiFybHYM9U.jpg",
    tags: ["Freelance", "Client Work", "Delivered"]
  }
]

export function WorkSection() {
  return (
    <section id="work" className="py-20 bg-secondary/20 gingham-pattern relative">
      {/* Top torn edge */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-card torn-edge-bottom" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-block relative">
            <WashiTape className="absolute -top-4 left-1/2 -translate-x-1/2 z-10" rotation={-2} variant="pink" />
            <div className="bg-white px-8 py-6 shadow-lg">
              <p className="text-sm text-muted-foreground mb-2">visuals. prototypes. experiences.</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                <span className="font-[var(--font-caveat)] text-primary">&quot;style&quot;</span>
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
                MY WORK
              </h3>
            </div>
          </div>
          <StarDecoration className="absolute -right-4 top-0" size="lg" color="primary" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative"
              style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
            >
              {/* Decorative tape */}
              <WashiTape 
                className="absolute -top-2 left-8 z-10" 
                rotation={index % 2 === 0 ? 5 : -5} 
                variant={index % 2 === 0 ? "sage" : "mauve"} 
              />
              
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-6">
                <span className="text-xs uppercase tracking-wider text-primary font-medium">
                  {project.category}
                </span>
                <h4 className="text-xl font-bold text-foreground mt-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a 
            href="#case-studies" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
          >
            <span>View All Projects</span>
            <StarDecoration size="sm" color="white" />
          </a>
        </div>
      </div>

      {/* Bottom torn edge */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-primary/80 torn-edge-top" />
    </section>
  )
}
