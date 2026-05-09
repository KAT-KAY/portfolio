"use client"

import { StarDecoration, FloatingStar } from "./star-decoration"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    title: "Musea Mobile App",
    subtitle: "Musea",
    duration: "Completed",
    role: "UX Researcher & UI Designer",
    overview: "Art museums are full of people quietly confused. Art tourists, casual visitors, and enthusiasts stand in front of masterpieces with no context — because museum plaques are small, jargon-heavy, and impossible to remember. Existing apps are clunky or require a subscription. I set out to design something that felt like having a knowledgeable friend in your pocket.\n\nThe Problem:\nUsers couldn't access reliable, understandable information about artworks in real time. Complex terminology, limited physical resources, and no mobile-first solution left art lovers disengaged and frustrated at the very places designed to inspire them.\n\nResearch:\nI conducted user interviews with art students and museum visitors, and performed competitor analysis on existing art apps (including Google Arts & Culture, Smartify, and museum-specific guides). Key finding: users wanted less text and more context — they wanted to understand the emotion and story of a piece, not just the facts.\n\nThe Solution:\nA scan-first mobile app. Point your camera at any artwork → instantly see the painting's name, artist biography, historical movement, and an accessible description written in plain language. The design prioritised dark museum lighting conditions, one-handed use, and a visual hierarchy that respected the art itself.\n\nKey Insight:\nThe best interface for a museum is one that gets out of the way. Users don't want to scroll — they want to glance and absorb. Every screen was designed around that single behavioural truth.",
    results: ["Validated need through user interviews", "Designed core scan-to-discover user flow", "Created high-fidelity screens in Figma", "Applied AI tools (UX Pilot) to accelerate iteration"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%2863%29-K3zjJDsir2GgARIlxJNx1s2ZPnfRq2.jpg",
    color: "primary",
    buttonText: "View Full Case Study →",
    link: "/case-study/musea"
  },
  {
    id: 2,
    title: "Hifazat Card — Pet Safety Platform",
    subtitle: "Hifazat Card",
    duration: "Ongoing",
    role: "Solo UX Researcher & Product Designer",
    overview: "I watched a video of a pet dog being killed because the person who found it assumed it was a stray. That stayed with me. In Pakistan, there is no system — no app, no registry, no way for a finder to know if a lost animal belongs to someone. Hifazat Card is my answer to that gap.\n\nThe Problem:\nPakistani pet owners have no reliable way to identify their pets publicly if they go missing. Existing solutions (microchips, collars) either require a vet scanner or fall off. Meanwhile, many pet owners also don't track vaccination schedules, creating a secondary health risk for both pets and the community.\n\nResearch:\nConducted SEO-based keyword research to confirm zero existing Pakistani solutions in this space. Performed competitor analysis on international platforms (PetMicrochipRegistry, Finding Rover, Tagg GPS). Identified core user needs: instant identification, owner contact, location, and vaccination status — all in one scan.\n\nThe Solution:\nA physical QR card + digital dashboard system. The card attaches to a pet's collar. Anyone who finds the pet scans the QR code and immediately sees: the pet's name, photo, breed, owner contact, GPS location, and vaccination history. Owners manage everything through a web dashboard. No app download required for the finder — just a camera.\n\nCurrent Status:\n✦ User research: Complete\n✦ Competitor analysis: Complete\n✦ Wireframes (dashboard): Complete\n✦ Visual design: In progress\n✦ Prototype: Coming soon",
    results: ["First solution of its kind in Pakistan", "No app required on the finder's end — just a QR scan", "Includes vaccination alert system for owners", "Designed for low digital literacy — works for anyone with a phone"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%2865%29-Mc1JjrY975V3u2voEDy8quVE5pCRfW.jpg",
    color: "secondary",
    buttonText: "View Research & Wireframes →",
    link: "/case-study/hifazat-card"
  }
]

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 bg-primary/80 paper-texture relative">
      {/* Floating decorations */}
      <FloatingStar 
        className="top-20 right-10" 
        size="xl" 
        color="white" 
        style={{ '--rotation': '10deg', animationDelay: '0s' } as React.CSSProperties} 
      />
      <FloatingStar 
        className="bottom-40 left-10" 
        size="lg" 
        color="white" 
        style={{ '--rotation': '-5deg', animationDelay: '1s' } as React.CSSProperties} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-white/70 text-sm uppercase tracking-widest mb-4">
            Deep Dives Into My Process
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            welcome to my
          </h2>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mt-2">
            CASE STUDIES
          </h2>
          <p className="mt-4 font-[var(--font-caveat)] text-2xl text-white/80">
            &quot;the act of creating something is always more important than the result&quot;
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div 
              key={study.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Image */}
              <div className="lg:w-1/2 relative">
                <div 
                  className="bg-white p-3 shadow-2xl"
                  style={{ transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <StarDecoration 
                  className={`absolute ${index % 2 === 0 ? '-right-4' : '-left-4'} -top-4`} 
                  size="lg" 
                  color="white" 
                />
              </div>

              {/* Content */}
              <div className="lg:w-1/2 bg-card p-8 shadow-lg relative">
                <div className="absolute -top-3 left-8 bg-accent text-accent-foreground px-4 py-1 text-sm font-medium">
                  Case Study #{study.id}
                </div>
                
                <p className="text-sm text-muted-foreground uppercase tracking-wider mt-4">
                  {study.subtitle}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mt-2">
                  {study.title}
                </h3>
                
                <div className="flex gap-6 mt-4 text-sm text-muted-foreground">
                  <span><strong>Duration:</strong> {study.duration}</span>
                  <span><strong>Role:</strong> {study.role}</span>
                </div>
                
                <p className="mt-4 text-muted-foreground leading-relaxed whitespace-pre-line">
                  {study.overview}
                </p>
                
                <div className="mt-6">
                  <h4 className="font-medium text-foreground mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result) => (
                      <li key={result} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <StarDecoration size="sm" color="primary" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link href={study.link} className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 uppercase tracking-wide">
                  {study.buttonText}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-card torn-edge-top" />
    </section>
  )
}
