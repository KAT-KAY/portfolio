"use client"

import { StarDecoration } from "./star-decoration"
import { WashiTape } from "./washi-tape"
import { Briefcase, GraduationCap, Award } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "UI/UX Designer (Internship)",
    company: "CodeYard",
    period: "June 2025 — August 2025",
    description: "Worked as a UI/UX designer at CodeYard, contributing to real product screens and design workflows. Gained hands-on experience translating requirements into clean interfaces aligned with a live design system.",
    highlights: ["Designed production-ready UI screens", "Applied design tokens for visual consistency", "Collaborated with cross-functional team members"]
  },
  {
    type: "work",
    title: "Society Designer",
    company: "University TechTribe Society, GCUF",
    period: "2023 — Present",
    description: "Sole designer for a university society — responsible for all visual communication including event creatives, social media graphics, and promotional material. Learned to work fast, take feedback, and ship work under real deadlines.",
    highlights: ["Designed all event & social media creatives", "Maintained visual consistency across materials", "Delivered under real time pressure"]
  },
  {
    type: "work",
    title: "Client-Based Project",
    company: "Independent Client Project",
    period: "2024",
    description: "Designed a sign-in page and landing page for a client, translating their requirements into a clean, functional interface. My first experience receiving a real brief and delivering production-ready work to someone outside an academic context.",
    highlights: ["Client brief to final delivery", "Built with Figma", "Focused on usability and visual clarity"]
  }
]

const education = [
  {
    degree: "Bachelor of Science — Software Engineering",
    school: "Govt. College University Fsd",
    period: "2023 — Present (6th Semester)",
    focus: "Currently specialising in UI/UX Design & proficient in Front-End and Software Requirement Engineering"
  },
  {
    degree: "Intermediate (Pre-Medical)",
    school: "Punjab Group of Colleges",
    period: "2019 — 2021",
    focus: "Pre-Medical Sciences"
  }
]

const certifications = [
  "Google UX Design Certificate — Coursera (Completed)",
  "Proficient in Figma — Self-directed + applied in live projects",
  "AI Design Tools — Claude, UX Pilot, Framer (active daily use)"
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-card paper-texture relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <WashiTape className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 w-32" rotation={3} variant="sage" />
            <div className="bg-white px-8 py-6 shadow-lg">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                My Journey
              </h2>
              <p className="font-[var(--font-caveat)] text-2xl text-primary mt-2">
                experience & education
              </p>
            </div>
            <StarDecoration className="absolute -right-6 -top-2" size="lg" color="primary" />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.title}
                  className="bg-white p-6 shadow-lg relative"
                  style={{ transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)` }}
                >
                  <WashiTape 
                    className="absolute -top-2 right-8 w-20" 
                    rotation={index % 2 === 0 ? 8 : -8} 
                    variant={index % 2 === 0 ? "pink" : "sage"} 
                  />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-foreground">{exp.title}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-[var(--font-caveat)] text-xl">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span 
                        key={highlight}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-muted text-xs text-muted-foreground rounded-full"
                      >
                        <StarDecoration size="sm" color="primary" className="w-3 h-3" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-secondary/30 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Education</h3>
              </div>

              <div className="space-y-4">
                {education.map((edu) => (
                  <div 
                    key={edu.degree}
                    className="bg-white p-5 shadow-lg"
                  >
                    <h4 className="font-bold text-foreground">{edu.degree}</h4>
                    <p className="text-primary text-sm">{edu.school}</p>
                    <p className="text-muted-foreground text-sm mt-1">{edu.period}</p>
                    <p className="text-muted-foreground text-xs mt-2 italic">Focus: {edu.focus}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Certifications</h3>
              </div>

              <div className="bg-white p-5 shadow-lg">
                <ul className="space-y-3">
                  {certifications.map((cert) => (
                    <li 
                      key={cert}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <StarDecoration size="sm" color="primary" className="w-4 h-4 shrink-0" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
