"use client"

import { StarDecoration } from "./star-decoration"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <StarDecoration size="sm" color="primary" />
            <span className="font-[var(--font-caveat)] text-xl text-foreground">
              Creative Portfolio
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            Designed & built by Kaynat Tahir — Software Engineer & UI/UX Designer<br/>
            Crafted with Figma, Next.js, and a lot of curiosity.<br/>
            © 2025 Kaynat Tahir
          </p>

          {/* Back to top */}
          <a 
            href="#home"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <span>Back to top</span>
            <StarDecoration size="sm" color="primary" />
          </a>
        </div>

        {/* Signature */}
        <div className="mt-6 text-center">
          <p className="font-[var(--font-caveat)] text-2xl text-primary/60">
            ~ Designed with creativity & passion ~
          </p>
        </div>
      </div>
    </footer>
  )
}
