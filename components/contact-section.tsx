"use client"

import { StarDecoration, FloatingStar } from "./star-decoration"
import { WashiTape } from "./washi-tape"
import { Mail, Linkedin, Instagram, Twitter, Send } from "lucide-react"

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "[your LinkedIn URL]" },
  { icon: Mail, label: "Email", href: "mailto:[your real email]" }
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-primary/80 paper-texture relative overflow-hidden">
      {/* Floating decorations */}
      <FloatingStar 
        className="top-20 left-20" 
        size="xl" 
        color="white" 
        style={{ '--rotation': '-8deg', animationDelay: '0s' } as React.CSSProperties} 
      />
      <FloatingStar 
        className="top-40 right-10" 
        size="lg" 
        color="white" 
        style={{ '--rotation': '12deg', animationDelay: '0.7s' } as React.CSSProperties} 
      />
      <FloatingStar 
        className="bottom-32 left-10" 
        size="md" 
        color="white" 
        style={{ '--rotation': '5deg', animationDelay: '1.4s' } as React.CSSProperties} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
              LET'S CREATE
            </h2>
            <p className="font-[var(--font-caveat)] text-2xl sm:text-3xl text-white/80 mb-6">
              something worth looking at
            </p>
            <p className="text-white/70 max-w-md mx-auto lg:mx-0 leading-relaxed">
              I'm actively looking for opportunities where I can contribute,
              learn from senior designers, and work on products that ship.
              I bring research skills, Figma proficiency, a Google UX certificate,
              and the kind of genuine curiosity this role is looking for.
              Let's talk.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="relative">
            <WashiTape className="absolute -top-4 left-10 z-10" rotation={-3} variant="sage" />
            <WashiTape className="absolute -top-4 right-10 z-10" rotation={5} variant="mauve" />
            
            <div className="bg-card p-8 shadow-2xl relative">
              <StarDecoration className="absolute -top-4 -right-4" size="lg" color="white" />
              
              <h3 className="text-2xl font-bold text-foreground mb-2">Get In Touch</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Have a project in mind? Let&apos;s chat about it!
              </p>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-foreground mb-1">
                    Project Type
                  </label>
                  <select
                    id="project"
                    className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                  >
                    <option value="">Select a project type</option>
                    <option value="web">Web Design</option>
                    <option value="mobile">Mobile App Design</option>
                    <option value="branding">Branding</option>
                    <option value="ux-research">UX Research</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-medium"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
