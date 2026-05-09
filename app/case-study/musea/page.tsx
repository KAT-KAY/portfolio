"use client"

import "./musea.css"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

const sections = [
  { id: "hero", label: "Hero" },
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "research", label: "Research" },
  { id: "personas", label: "Personas" },
  { id: "competitive", label: "Competitive" },
  { id: "journey", label: "Journey" },
  { id: "ia", label: "IA" },
  { id: "wireframes", label: "Wireframes" },
  { id: "design-system", label: "Design System" },
  { id: "ui-showcase", label: "UI Showcase" },
  { id: "accessibility", label: "Accessibility" },
  { id: "challenges", label: "Challenges" },
  { id: "metrics", label: "Metrics" },
  { id: "reflection", label: "Reflection" },
]

export default function MuseaCaseStudy() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="musea-page">
      {/* Back Button */}
      <Link href="/#case-studies" className="musea-back">
        <span style={{ fontSize: "1.2rem" }}>←</span>
        <span>Back to Portfolio</span>
      </Link>

      {/* Side Navigation */}
      <nav className="musea-side-nav" aria-label="Case study sections">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeSection === id ? "active" : ""}
            title={label}
            aria-label={`Go to ${label} section`}
          />
        ))}
      </nav>

      {/* ==================== HERO SECTION ==================== */}
      <section id="hero" className="musea-hero">
        {/* Background Image */}
        <div
          className="musea-hero-bg"
          style={{ backgroundImage: "url(/musea/museum-hero-bg.png)" }}
        />
        <div className="musea-hero-overlay" />

        {/* Floating Museum Elements */}
        <div
          className="musea-float"
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: "120px",
            opacity: 0.15,
            "--r": "-8deg",
            zIndex: 5,
          } as React.CSSProperties}
        >
          <Image
            src="/musea/floating-frame.png"
            alt=""
            width={120}
            height={160}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div
          className="musea-float"
          style={{
            position: "absolute",
            bottom: "15%",
            right: "6%",
            width: "100px",
            opacity: 0.12,
            "--r": "6deg",
            animationDelay: "2s",
            zIndex: 5,
          } as React.CSSProperties}
        >
          <Image
            src="/musea/museum-statue.png"
            alt=""
            width={100}
            height={140}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div
          className="musea-float"
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: "80px",
            opacity: 0.1,
            "--r": "12deg",
            animationDelay: "4s",
            zIndex: 5,
          } as React.CSSProperties}
        >
          <Image
            src="/musea/museum-column.png"
            alt=""
            width={80}
            height={120}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* Hero Content */}
        <div className="musea-hero-content">
          <p className="musea-subheading" style={{ marginBottom: "20px" }}>
            UX / UI Case Study
          </p>

          <h1 className="musea-hero-title">
            Musea
          </h1>

          <p
            style={{
              fontFamily: "var(--musea-serif)",
              fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
              fontStyle: "italic",
              fontWeight: 300,
              color: "var(--musea-gold)",
              marginBottom: "16px",
              letterSpacing: "0.02em",
            }}
          >
            The Art History &amp; Gallery Companion
          </p>

          <p className="musea-hero-tagline">
            &ldquo;Transforming passive gallery visits into immersive learning
            experiences.&rdquo;
          </p>

          {/* Hero Mockup */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginBottom: "48px",
            }}
          >
            <div className="musea-screen-mockup" style={{ maxWidth: "200px" }}>
              <Image
                src="/musea/figma/scanner-screen.png"
                alt="Musea Scanner Screen"
                width={200}
                height={430}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          {/* Meta Info */}
          <dl className="musea-hero-meta">
            <div style={{ textAlign: "center" }}>
              <dt>Role</dt>
              <dd>UI/UX Designer</dd>
            </div>
            <div style={{ textAlign: "center" }}>
              <dt>Platform</dt>
              <dd>iOS / Android</dd>
            </div>
            <div style={{ textAlign: "center" }}>
              <dt>Tools</dt>
              <dd>Figma, Hand Sketching</dd>
            </div>
            <div style={{ textAlign: "center" }}>
              <dt>Duration</dt>
              <dd>Academic Project</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ==================== PROJECT OVERVIEW ==================== */}
      <section id="overview" className="musea-section" style={{ borderTop: "1px solid var(--musea-border)" }}>
        <div className="musea-container">
          <p className="musea-section-number">01 — Project Overview</p>
          <div className="musea-divider" />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
            {/* Left - Summary */}
            <div>
              <h2 className="musea-heading" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", marginBottom: "24px" }}>
                An app that turns every gallery visit into a guided, personal experience.
              </h2>
              <p className="musea-body" style={{ marginBottom: "20px" }}>
                Musea is a mobile companion app designed for art tourists, casual museum visitors, and art history students. It enables users to scan any painting in a gallery and instantly receive contextual information — artist biography, historical movement, and an accessible description written in plain language.
              </p>
              <p className="musea-body">
                The project was born from a simple observation: museums are filled with people who want to understand art but feel excluded by jargon-heavy plaques, complex terminology, and the intimidation of &ldquo;not knowing enough.&rdquo; Musea bridges that gap — making art knowledge feel natural, not academic.
              </p>
            </div>

            {/* Right - Info Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { label: "Objective", value: "Design a scan-first mobile app that makes art history accessible during live gallery visits" },
                { label: "Timeline", value: "Academic semester project" },
                { label: "Role", value: "Solo UI/UX Designer — research, wireframes, visual design, prototyping" },
                { label: "Team", value: "Individual project with peer feedback sessions" },
                { label: "Deliverables", value: "User research, personas, wireframes, high-fidelity UI, interactive prototype" },
              ].map((item) => (
                <div key={item.label} className="musea-card musea-card-gold">
                  <p className="musea-subheading" style={{ marginBottom: "8px" }}>{item.label}</p>
                  <p className="musea-body" style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROBLEM STATEMENT ==================== */}
      <section id="problem" className="musea-section" style={{ background: "var(--musea-surface)" }}>
        <div className="musea-container">
          <p className="musea-section-number">02 — Problem Statement</p>
          <div className="musea-divider" />

          <h2 className="musea-heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "16px", maxWidth: "700px" }}>
            Museums inspire awe — but rarely understanding.
          </h2>
          <p className="musea-body" style={{ maxWidth: "600px", marginBottom: "48px" }}>
            Through research and observation, I identified five core frustrations that keep visitors from truly engaging with art during gallery visits.
          </p>

          <div className="musea-grid-3" style={{ gap: "20px" }}>
            {[
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 9v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>, title: "Intimidating Experiences", desc: "Many visitors feel museums are \"not for them\" — the atmosphere, language, and presentation create invisible barriers to engagement." },
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/></svg>, title: "Complex Art Jargon", desc: "Wall plaques use academic terminology that excludes casual visitors. Chiaroscuro, tenebrism, sfumato — most people walk past confused." },
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25Zm9.75-9.75A2.25 2.25 0 0 1 15.75 3.75H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z"/></svg>, title: "Information Overload", desc: "Large museums contain thousands of works. Without guidance, visitors experience decision fatigue and miss the pieces that would resonate most." },
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"/></svg>, title: "Passive Experiences", desc: "Traditional museum visits are look-and-move-on. There's no way to interact, save, annotate, or revisit what you've seen." },
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/></svg>, title: "No Contextual Information", desc: "When a painting sparks curiosity, there's no quick way to learn more. Googling mid-visit breaks immersion and yields inconsistent results." },
            ].map((problem) => (
              <div key={problem.title} className="musea-problem-card">
                <div className="musea-problem-icon" style={{ color: "var(--musea-gold)" }}>{problem.icon}</div>
                <h3 style={{ fontFamily: "var(--musea-serif)", fontSize: "1.15rem", color: "var(--musea-text)", marginBottom: "8px" }}>
                  {problem.title}
                </h3>
                <p className="musea-body" style={{ fontSize: "0.85rem", lineHeight: 1.7 }}>
                  {problem.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Emotional quote */}
          <div className="musea-quote" style={{ marginTop: "48px", maxWidth: "700px" }}>
            &ldquo;I love going to galleries, but I always feel like I&rsquo;m missing the point. The plaques are either too simple or too academic — there&rsquo;s nothing in between.&rdquo;
            <p style={{ fontSize: "0.8rem", color: "var(--musea-text-muted)", marginTop: "12px", fontStyle: "normal" }}>
              — Interview participant, casual museum visitor
            </p>
          </div>
        </div>
      </section>
      {/* ==================== RESEARCH & DISCOVERY ==================== */}
      <section id="research" className="musea-section">
        <div className="musea-container">
          <p className="musea-section-number">03 — Research &amp; Discovery</p>
          <div className="musea-divider" />

          <h2 className="musea-heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "16px", maxWidth: "700px" }}>
            Understanding how people actually experience art.
          </h2>
          <p className="musea-body" style={{ maxWidth: "600px", marginBottom: "48px" }}>
            I used a mix of qualitative and quantitative methods to understand real visitor behaviour, emotional responses, and unmet needs inside gallery spaces.
          </p>

          {/* Methodology */}
          <div className="musea-grid-2" style={{ marginBottom: "48px" }}>
            {[
              { title: "User Interviews", detail: "Conducted in-depth interviews with 8 participants — art students, casual visitors, and art enthusiasts — to understand motivations, frustrations, and current workarounds." },
              { title: "Contextual Observation", detail: "Spent time in local galleries observing how visitors interacted with plaques, phones, and companions. Noted dwell time, confusion signals, and abandonment patterns." },
              { title: "Competitor Analysis", detail: "Evaluated Google Arts & Culture, Smartify, and The Met App to identify market gaps, UX patterns, and feature opportunities that existing solutions missed." },
              { title: "Affinity Mapping", detail: "Synthesised all research findings into thematic clusters to identify the strongest recurring pain points and latent user needs." },
            ].map((method) => (
              <div key={method.title} className="musea-card">
                <h3 style={{ fontFamily: "var(--musea-serif)", fontSize: "1.15rem", color: "var(--musea-text)", marginBottom: "10px" }}>
                  {method.title}
                </h3>
                <p className="musea-body" style={{ fontSize: "0.88rem" }}>{method.detail}</p>
              </div>
            ))}
          </div>

          {/* Key Insights */}
          <h3 className="musea-subheading" style={{ marginBottom: "24px" }}>Key Research Insights</h3>
          <div className="musea-grid-3" style={{ marginBottom: "48px" }}>
            {[
              { stat: "87%", label: "of visitors wanted simpler, more contextual art descriptions" },
              { stat: "6 / 8", label: "interviewees said they \"Google paintings\" mid-visit but find inconsistent results" },
              { stat: "72%", label: "preferred visual learning over reading long text blocks in galleries" },
            ].map((insight) => (
              <div key={insight.label} className="musea-metric">
                <div className="musea-metric-value">{insight.stat}</div>
                <p className="musea-metric-label" style={{ textTransform: "none", letterSpacing: "normal", lineHeight: 1.5 }}>{insight.label}</p>
              </div>
            ))}
          </div>

          {/* Interview Quotes */}
          <h3 className="musea-subheading" style={{ marginBottom: "24px" }}>From the Interviews</h3>
          <div className="musea-grid-2">
            <div className="musea-quote">
              &ldquo;I want to know the story behind the painting — not the technical details. Tell me why the artist was heartbroken, not the paint medium.&rdquo;
              <p style={{ fontSize: "0.8rem", color: "var(--musea-text-muted)", marginTop: "10px", fontStyle: "normal" }}>— Sophia, Art Student</p>
            </div>
            <div className="musea-quote">
              &ldquo;Every time I try to read the plaque, the text is tiny and full of words I don&rsquo;t know. I just move on and feel stupid.&rdquo;
              <p style={{ fontSize: "0.8rem", color: "var(--musea-text-muted)", marginTop: "10px", fontStyle: "normal" }}>— Haima, Casual Visitor</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== USER PERSONAS ==================== */}
      <section id="personas" className="musea-section" style={{ background: "var(--musea-surface)" }}>
        <div className="musea-container">
          <p className="musea-section-number">04 — User Personas</p>
          <div className="musea-divider" />

          <h2 className="musea-heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "16px", maxWidth: "600px" }}>
            Three visitors. Three very different needs.
          </h2>
          <p className="musea-body" style={{ maxWidth: "600px", marginBottom: "48px" }}>
            From research, three distinct user archetypes emerged — each with unique motivations, comfort levels, and expectations from a museum companion app.
          </p>

          <div className="musea-grid-3">
            {/* Persona 1 */}
            <div className="musea-persona">
              <div className="musea-persona-avatar">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--musea-gold)" strokeWidth="1.2"><path d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a23.54 23.54 0 0 0-2.688 6.603 23.468 23.468 0 0 1 12.429 0 23.54 23.54 0 0 0-2.688-6.603M12 3a2.25 2.25 0 1 0 0 4.5A2.25 2.25 0 0 0 12 3Z"/></svg>
              </div>
              <h3 style={{ fontFamily: "var(--musea-serif)", fontSize: "1.3rem", color: "var(--musea-text)", marginBottom: "4px" }}>Sophia Ali</h3>
              <p style={{ fontSize: "0.8rem", color: "var(--musea-gold)", marginBottom: "16px" }}>Art Student, 22</p>
              <div style={{ textAlign: "left" }}>
                <p className="musea-subheading" style={{ marginBottom: "6px", fontSize: "0.65rem" }}>Goals</p>
                <p className="musea-body" style={{ fontSize: "0.83rem", marginBottom: "12px" }}>Study art movements in depth, bookmark references for assignments, understand historical context beyond textbooks.</p>
                <p className="musea-subheading" style={{ marginBottom: "6px", fontSize: "0.65rem" }}>Frustrations</p>
                <p className="musea-body" style={{ fontSize: "0.83rem", marginBottom: "12px" }}>Existing apps are too shallow. Needs academic depth without the academic jargon. Wants to save and revisit content.</p>
                <p className="musea-subheading" style={{ marginBottom: "6px", fontSize: "0.65rem" }}>Tech Comfort</p>
                <div style={{ display: "flex", gap: "4px", marginTop: "4px" }}>
                  {[1,2,3,4,5].map(i => <div key={i} style={{ width: "20px", height: "4px", background: i <= 5 ? "var(--musea-gold)" : "var(--musea-border)" }} />)}
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "16px", justifyContent: "center" }}>
                {["Research-driven", "Detail-oriented", "Curious"].map(t => <span key={t} className="musea-tag">{t}</span>)}
              </div>
            </div>

            {/* Persona 2 */}
            <div className="musea-persona">
              <div className="musea-persona-avatar">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--musea-gold)" strokeWidth="1.2"><path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/></svg>
              </div>
              <h3 style={{ fontFamily: "var(--musea-serif)", fontSize: "1.3rem", color: "var(--musea-text)", marginBottom: "4px" }}>Haima Khan</h3>
              <p style={{ fontSize: "0.8rem", color: "var(--musea-gold)", marginBottom: "16px" }}>Casual Visitor, 34</p>
              <div style={{ textAlign: "left" }}>
                <p className="musea-subheading" style={{ marginBottom: "6px", fontSize: "0.65rem" }}>Goals</p>
                <p className="musea-body" style={{ fontSize: "0.83rem", marginBottom: "12px" }}>Enjoy a gallery visit without feeling lost. Wants quick, digestible info. Looking for an experience, not a lecture.</p>
                <p className="musea-subheading" style={{ marginBottom: "6px", fontSize: "0.65rem" }}>Frustrations</p>
                <p className="musea-body" style={{ fontSize: "0.83rem", marginBottom: "12px" }}>Feels intimidated by art terminology. Overwhelmed by large museums. Doesn&rsquo;t know where to start or what to look for.</p>
                <p className="musea-subheading" style={{ marginBottom: "6px", fontSize: "0.65rem" }}>Tech Comfort</p>
                <div style={{ display: "flex", gap: "4px", marginTop: "4px" }}>
                  {[1,2,3,4,5].map(i => <div key={i} style={{ width: "20px", height: "4px", background: i <= 3 ? "var(--musea-gold)" : "var(--musea-border)" }} />)}
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "16px", justifyContent: "center" }}>
                {["Experience-seeker", "Low patience", "Visual learner"].map(t => <span key={t} className="musea-tag">{t}</span>)}
              </div>
            </div>

            {/* Persona 3 */}
            <div className="musea-persona">
              <div className="musea-persona-avatar">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--musea-gold)" strokeWidth="1.2"><path d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
              </div>
              <h3 style={{ fontFamily: "var(--musea-serif)", fontSize: "1.3rem", color: "var(--musea-text)", marginBottom: "4px" }}>Amir Hassan</h3>
              <p style={{ fontSize: "0.8rem", color: "var(--musea-gold)", marginBottom: "16px" }}>Art Enthusiast, 41</p>
              <div style={{ textAlign: "left" }}>
                <p className="musea-subheading" style={{ marginBottom: "6px", fontSize: "0.65rem" }}>Goals</p>
                <p className="musea-body" style={{ fontSize: "0.83rem", marginBottom: "12px" }}>Discover lesser-known works, explore connections between art movements, maintain a personal journal of gallery visits.</p>
                <p className="musea-subheading" style={{ marginBottom: "6px", fontSize: "0.65rem" }}>Frustrations</p>
                <p className="musea-body" style={{ fontSize: "0.83rem", marginBottom: "12px" }}>Current apps don&rsquo;t offer depth. Wants to go beyond surface-level info. Needs a way to track and organise what he&rsquo;s seen.</p>
                <p className="musea-subheading" style={{ marginBottom: "6px", fontSize: "0.65rem" }}>Tech Comfort</p>
                <div style={{ display: "flex", gap: "4px", marginTop: "4px" }}>
                  {[1,2,3,4,5].map(i => <div key={i} style={{ width: "20px", height: "4px", background: i <= 4 ? "var(--musea-gold)" : "var(--musea-border)" }} />)}
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "16px", justifyContent: "center" }}>
                {["Collector mindset", "Self-guided", "Passionate"].map(t => <span key={t} className="musea-tag">{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== COMPETITIVE ANALYSIS ==================== */}
      <section id="competitive" className="musea-section">
        <div className="musea-container">
          <p className="musea-section-number">05 — Competitive Analysis</p>
          <div className="musea-divider" />

          <h2 className="musea-heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "16px", maxWidth: "700px" }}>
            What exists — and where the gaps are.
          </h2>
          <p className="musea-body" style={{ maxWidth: "600px", marginBottom: "48px" }}>
            I analysed three leading art/museum apps to understand the competitive landscape and identify opportunities for Musea.
          </p>

          <div style={{ overflowX: "auto" }}>
            <table className="musea-table">
              <thead>
                <tr>
                  <th style={{ width: "18%" }}>Feature</th>
                  <th style={{ width: "27%" }}>Google Arts &amp; Culture</th>
                  <th style={{ width: "27%" }}>Smartify</th>
                  <th style={{ width: "27%" }}>The Met App</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ color: "var(--musea-text)", fontWeight: 500 }}>Scan Artwork</td>
                  <td>Limited — uses image matching, not live scan</td>
                  <td>Yes — core feature, but patchy database coverage</td>
                  <td>No — relies on manual search only</td>
                </tr>
                <tr>
                  <td style={{ color: "var(--musea-text)", fontWeight: 500 }}>Plain Language</td>
                  <td>Mixed — some entries are academic, others editorial</td>
                  <td>Generally accessible but inconsistent across museums</td>
                  <td>Academic tone throughout — aimed at researchers</td>
                </tr>
                <tr>
                  <td style={{ color: "var(--musea-text)", fontWeight: 500 }}>Dark Mode</td>
                  <td>No native dark mode</td>
                  <td>No native dark mode</td>
                  <td>No native dark mode</td>
                </tr>
                <tr>
                  <td style={{ color: "var(--musea-text)", fontWeight: 500 }}>Personal Journal</td>
                  <td>Favourites only — no notes or journalling</td>
                  <td>Basic bookmarking</td>
                  <td>No personalisation features</td>
                </tr>
                <tr>
                  <td style={{ color: "var(--musea-text)", fontWeight: 500 }}>Timeline View</td>
                  <td>Partial — embedded in articles, not browsable</td>
                  <td>No</td>
                  <td>Yes — excellent chronological browsing</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="musea-card musea-card-gold" style={{ marginTop: "32px", maxWidth: "700px" }}>
            <p className="musea-subheading" style={{ marginBottom: "8px" }}>Key Opportunity</p>
            <p className="musea-body" style={{ fontSize: "0.95rem" }}>
              No existing app combines scan-to-learn, plain-language descriptions, dark mode for gallery lighting, and a personal journal — all in one cohesive, museum-optimised experience. This is the gap Musea fills.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== USER JOURNEY ==================== */}
      <section id="journey" className="musea-section" style={{ background: "var(--musea-surface)" }}>
        <div className="musea-container">
          <p className="musea-section-number">06 — User Journey</p>
          <div className="musea-divider" />

          <h2 className="musea-heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "16px", maxWidth: "700px" }}>
            Mapping the moment-to-moment experience.
          </h2>
          <p className="musea-body" style={{ maxWidth: "600px", marginBottom: "48px" }}>
            I mapped two primary user flows to understand touchpoints, emotional states, and opportunities for Musea to add value.
          </p>

          {/* Flow 1 */}
          <h3 className="musea-subheading" style={{ marginBottom: "28px" }}>Flow 1 — Scan &amp; Learn</h3>
          <div style={{ marginBottom: "56px" }}>
            {[
              { step: "1", action: "User enters gallery", emotion: "Curious but slightly overwhelmed", touch: "Physical environment" },
              { step: "2", action: "Spots an interesting painting", emotion: "Intrigued — wants to know more", touch: "Visual discovery" },
              { step: "3", action: "Opens Musea → taps Scan", emotion: "Hopeful — expects quick info", touch: "App home → Scanner" },
              { step: "4", action: "Points camera at artwork", emotion: "Engaged — feels like a discovery tool", touch: "Camera interface" },
              { step: "5", action: "Receives artwork info instantly", emotion: "Satisfied — \"this is exactly what I needed\"", touch: "Art detail screen" },
              { step: "6", action: "Saves to journal / continues browsing", emotion: "Empowered — feels informed", touch: "Journal / Gallery" },
            ].map((item, i, arr) => (
              <div key={item.step} className="musea-journey-step" style={{ marginBottom: i < arr.length - 1 ? "24px" : 0 }}>
                <div style={{ position: "relative" }}>
                  <div className="musea-journey-dot" />
                  {i < arr.length - 1 && <div className="musea-journey-line" />}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "var(--musea-serif)", fontSize: "1.05rem", color: "var(--musea-text)", marginBottom: "4px" }}>
                    {item.action}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "var(--musea-gold-dim)", marginBottom: "2px", fontStyle: "italic" }}>
                    {item.emotion}
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "var(--musea-text-muted)" }}>
                    Touchpoint: {item.touch}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Flow 2 */}
          <h3 className="musea-subheading" style={{ marginBottom: "28px" }}>Flow 2 — Search &amp; Study</h3>
          <div>
            {[
              { step: "1", action: "User opens Musea at home / in class", emotion: "Focused — studying or preparing", touch: "App home" },
              { step: "2", action: "Searches for \"Renaissance\" or \"Impressionism\"", emotion: "Goal-directed — knows what they want", touch: "Search bar" },
              { step: "3", action: "Browses search results with thumbnails", emotion: "Exploring — scanning for relevance", touch: "Search results" },
              { step: "4", action: "Opens art movement detail page", emotion: "Learning — absorbing context", touch: "Movement detail screen" },
              { step: "5", action: "Bookmarks page / takes notes in journal", emotion: "Satisfied — built a personal reference", touch: "Journal / Bookmark" },
            ].map((item, i, arr) => (
              <div key={item.step} className="musea-journey-step" style={{ marginBottom: i < arr.length - 1 ? "24px" : 0 }}>
                <div style={{ position: "relative" }}>
                  <div className="musea-journey-dot" />
                  {i < arr.length - 1 && <div className="musea-journey-line" />}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "var(--musea-serif)", fontSize: "1.05rem", color: "var(--musea-text)", marginBottom: "4px" }}>
                    {item.action}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "var(--musea-gold-dim)", marginBottom: "2px", fontStyle: "italic" }}>
                    {item.emotion}
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "var(--musea-text-muted)" }}>
                    Touchpoint: {item.touch}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* User's sketch of user flows */}
          <div style={{ marginTop: "56px" }}>
            <h3 className="musea-subheading" style={{ marginBottom: "24px" }}>Original User Flow Sketches</h3>
            <div className="musea-polaroid" style={{ transform: "rotate(-1deg)", maxWidth: "600px" }}>
              <Image src="/musea/wireframes/userflow-storyboard.jpg" alt="Hand-drawn user flow sketches showing Search & Study and Explore & Bookmark flows with storyboard for casual visitor" width={600} height={800} style={{ width: "100%", height: "auto" }} />
              <p className="musea-polaroid-caption">User flow diagrams &amp; storyboard — hand sketched during ideation</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INFORMATION ARCHITECTURE ==================== */}
      <section id="ia" className="musea-section">
        <div className="musea-container">
          <p className="musea-section-number">07 — Information Architecture</p>
          <div className="musea-divider" />

          <h2 className="musea-heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "16px", maxWidth: "700px" }}>
            Structuring the experience around four pillars.
          </h2>
          <p className="musea-body" style={{ maxWidth: "600px", marginBottom: "48px" }}>
            The app&rsquo;s navigation is built around four core user needs — each mapped to a primary tab that feels intuitive from the first interaction.
          </p>

          {/* IA Diagram */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "32px" }}>
            {/* Root */}
            <div className="musea-ia-node primary" style={{ padding: "16px 32px", fontSize: "1rem", fontFamily: "var(--musea-serif)" }}>
              Musea App
            </div>

            {/* Connector line */}
            <div style={{ width: "2px", height: "32px", background: "var(--musea-gold-dim)" }} />

            {/* 4 pillars */}
            <div className="musea-grid-4" style={{ width: "100%" }}>
              {[
                { name: "Home", children: ["Daily Inspiration", "Trending Exhibitions", "Recommended Artists", "Search Bar"] },
                { name: "Scan", children: ["Camera View", "Artwork Recognition", "Art Detail View", "Save to Journal"] },
                { name: "Timeline", children: ["Art Movements", "Historical Periods", "Artists by Era", "Key Works"] },
                { name: "My Journal", children: ["Saved Artworks", "Personal Notes", "Visit History", "Bookmarks"] },
              ].map((pillar) => (
                <div key={pillar.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                  <div className="musea-ia-node primary" style={{ width: "100%" }}>{pillar.name}</div>
                  <div style={{ width: "1px", height: "16px", background: "var(--musea-border)" }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%" }}>
                    {pillar.children.map((child) => (
                      <div key={child} className="musea-ia-node" style={{ fontSize: "0.78rem" }}>{child}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WIREFRAMES & IDEATION ==================== */}
      <section id="wireframes" className="musea-section" style={{ background: "var(--musea-surface)" }}>
        <div className="musea-container">
          <p className="musea-section-number">08 — Wireframes &amp; Ideation</p>
          <div className="musea-divider" />

          <h2 className="musea-heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "16px", maxWidth: "700px" }}>
            From paper to pixels — the design evolved.
          </h2>
          <p className="musea-body" style={{ maxWidth: "600px", marginBottom: "48px" }}>
            I started with rough paper sketches to explore layout ideas quickly, then iterated through multiple wireframe versions before arriving at the final visual direction. Each iteration was driven by usability insights.
          </p>

          {/* Wireframe images as polaroids */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>
            {/* Wireframe iterations */}
            <div>
              <h3 className="musea-subheading" style={{ marginBottom: "20px" }}>Home Screen Iterations</h3>
              <div className="musea-polaroid" style={{ transform: "rotate(1.5deg)" }}>
                <Image src="/musea/wireframes/wireframe-iterations.jpg" alt="Four wireframe iterations of the home screen showing progression from basic layout to final design with Daily Inspiration, Scan Artwork, and Trending Exhibitions" width={600} height={800} style={{ width: "100%", height: "auto" }} />
                <p className="musea-polaroid-caption">Four iterations — exploring layout hierarchy, scan CTA placement, and content prioritisation</p>
              </div>
              <div className="musea-card" style={{ marginTop: "20px" }}>
                <p className="musea-subheading" style={{ marginBottom: "6px", fontSize: "0.65rem" }}>What changed</p>
                <p className="musea-body" style={{ fontSize: "0.83rem" }}>The Scan button moved from inline to a prominent floating position. Daily Inspiration shifted to the top for immediate engagement. Added &ldquo;See All&rdquo; links and Recommended Artists in the final version to improve discoverability.</p>
              </div>
            </div>

            {/* Final wireframe */}
            <div>
              <h3 className="musea-subheading" style={{ marginBottom: "20px" }}>Final Home Screen Wireframe</h3>
              <div className="musea-polaroid" style={{ transform: "rotate(-2deg)" }}>
                <Image src="/musea/wireframes/home-screen-wireframe.jpg" alt="Final home screen wireframe showing refined layout with search bar, featured artwork area, category pills, scan button, and bottom navigation" width={600} height={850} style={{ width: "100%", height: "auto" }} />
                <p className="musea-polaroid-caption">Final wireframe — refined structure with clear visual hierarchy</p>
              </div>
              <div className="musea-card" style={{ marginTop: "20px" }}>
                <p className="musea-subheading" style={{ marginBottom: "6px", fontSize: "0.65rem" }}>Why this version</p>
                <p className="musea-body" style={{ fontSize: "0.83rem" }}>This layout balances content discovery with the core scan action. The search bar is persistent, the hero area creates visual interest, and the bottom navigation provides clear wayfinding across all four app sections.</p>
              </div>
            </div>
          </div>

          {/* Design evolution note */}
          <div className="musea-quote" style={{ marginTop: "48px", maxWidth: "700px" }}>
            &ldquo;The biggest lesson from wireframing: the scan button needed to feel like the heart of the app — not hidden behind a menu, not competing with other actions. It needed to be always one tap away.&rdquo;
          </div>
        </div>
      </section>
      {/* ==================== DESIGN SYSTEM ==================== */}
      <section id="design-system" className="musea-section">
        <div className="musea-container">
          <p className="musea-section-number">09 — Design System</p>
          <div className="musea-divider" />

          <h2 className="musea-heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "16px", maxWidth: "700px" }}>
            A visual language inspired by museum interiors.
          </h2>
          <p className="musea-body" style={{ maxWidth: "600px", marginBottom: "48px" }}>
            The design system draws from the atmosphere of real galleries — dark walls that let art breathe, warm gold accents that echo antique frames, and typography that balances classical elegance with modern readability.
          </p>

          {/* Color Palette */}
          <h3 className="musea-subheading" style={{ marginBottom: "20px" }}>Colour Palette</h3>
          <div className="musea-grid-4" style={{ marginBottom: "48px" }}>
            {[
              { color: "#0a0a0a", name: "Museum Black", hex: "#0A0A0A" },
              { color: "#141414", name: "Gallery Surface", hex: "#141414" },
              { color: "#c9a84c", name: "Antique Gold", hex: "#C9A84C" },
              { color: "#e8e4de", name: "Parchment", hex: "#E8E4DE" },
            ].map((swatch) => (
              <div key={swatch.name}>
                <div className="musea-swatch" style={{ background: swatch.color, border: "1px solid var(--musea-border)" }} />
                <p style={{ fontSize: "0.85rem", color: "var(--musea-text)", marginBottom: "2px" }}>{swatch.name}</p>
                <p style={{ fontSize: "0.75rem", color: "var(--musea-text-muted)", fontFamily: "var(--musea-display)" }}>{swatch.hex}</p>
              </div>
            ))}
          </div>

          {/* Typography */}
          <h3 className="musea-subheading" style={{ marginBottom: "20px" }}>Typography</h3>
          <div className="musea-grid-2" style={{ marginBottom: "48px" }}>
            <div className="musea-card">
              <p style={{ fontSize: "0.7rem", color: "var(--musea-text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>Headings</p>
              <p style={{ fontFamily: "var(--musea-serif)", fontSize: "2.5rem", fontWeight: 300, color: "var(--musea-text)", lineHeight: 1.1, marginBottom: "8px" }}>Cormorant Garamond</p>
              <p className="musea-body" style={{ fontSize: "0.83rem" }}>Light weight, elegant serif. Used for section headings and display text. Evokes classical art catalogues and museum signage.</p>
            </div>
            <div className="musea-card">
              <p style={{ fontSize: "0.7rem", color: "var(--musea-text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>Body &amp; UI</p>
              <p style={{ fontFamily: "var(--musea-sans)", fontSize: "2rem", fontWeight: 300, color: "var(--musea-text)", lineHeight: 1.1, marginBottom: "8px" }}>Inter</p>
              <p className="musea-body" style={{ fontSize: "0.83rem" }}>Clean sans-serif for body text, labels, and interface elements. Optimised for screen readability at small sizes.</p>
            </div>
          </div>

          {/* Components */}
          <h3 className="musea-subheading" style={{ marginBottom: "20px" }}>UI Components</h3>
          <div className="musea-grid-3">
            <div className="musea-card" style={{ textAlign: "center", padding: "24px" }}>
              <div style={{ display: "inline-block", padding: "12px 32px", background: "var(--musea-gold)", color: "#0a0a0a", fontFamily: "var(--musea-display)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 600, marginBottom: "12px" }}>
                Scan Artwork
              </div>
              <p style={{ fontSize: "0.75rem", color: "var(--musea-text-muted)" }}>Primary CTA Button</p>
            </div>
            <div className="musea-card" style={{ textAlign: "center", padding: "24px" }}>
              <div style={{ display: "inline-block", padding: "12px 32px", border: "1px solid var(--musea-gold)", color: "var(--musea-gold)", fontFamily: "var(--musea-display)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 500, marginBottom: "12px" }}>
                Learn More
              </div>
              <p style={{ fontSize: "0.75rem", color: "var(--musea-text-muted)" }}>Secondary Button</p>
            </div>
            <div className="musea-card" style={{ textAlign: "center", padding: "24px" }}>
              <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginBottom: "12px" }}>
                {["All", "Artworks", "Artists"].map((tab, i) => (
                  <span key={tab} style={{ padding: "8px 16px", background: i === 0 ? "var(--musea-gold)" : "transparent", color: i === 0 ? "#0a0a0a" : "var(--musea-text-dim)", borderRadius: "20px", fontSize: "0.75rem", fontFamily: "var(--musea-display)", border: i === 0 ? "none" : "1px solid var(--musea-border)" }}>{tab}</span>
                ))}
              </div>
              <p style={{ fontSize: "0.75rem", color: "var(--musea-text-muted)" }}>Filter Chips</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FINAL UI SHOWCASE ==================== */}
      <section id="ui-showcase" className="musea-section" style={{ background: "var(--musea-surface)" }}>
        <div className="musea-container">
          <p className="musea-section-number">10 — Final UI Showcase</p>
          <div className="musea-divider" />

          <h2 className="musea-heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "16px", maxWidth: "700px" }}>
            The finished product — every pixel intentional.
          </h2>
          <p className="musea-body" style={{ maxWidth: "600px", marginBottom: "56px" }}>
            High-fidelity screens designed in Figma, optimised for dark museum environments, one-handed use, and instant comprehension.
          </p>

          {/* Screen 1 — Search */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", marginBottom: "80px" }}>
            <div>
              <p className="musea-subheading" style={{ marginBottom: "12px" }}>Search &amp; Discover</p>
              <h3 className="musea-heading" style={{ fontSize: "1.8rem", marginBottom: "16px" }}>
                Find any artwork, artist, or movement in seconds.
              </h3>
              <p className="musea-body" style={{ marginBottom: "16px" }}>
                The search screen uses filter chips (All, Artworks, Artists) to let users refine results quickly. Each result card shows a thumbnail, movement tag, title, and a one-line description — scannable at a glance.
              </p>
              <p className="musea-body">
                The Featured Artist card at the bottom encourages serendipitous discovery, bridging search with exploration.
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="musea-screen-mockup" style={{ maxWidth: "280px" }}>
                <Image src="/musea/figma/search-screen.png" alt="Musea search screen showing Impressionism results with artwork cards and filter chips" width={280} height={600} style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>

          {/* Screen 2 — Scanner */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", marginBottom: "80px" }}>
            <div style={{ display: "flex", justifyContent: "center", order: -1 }}>
              <div className="musea-screen-mockup" style={{ maxWidth: "280px" }}>
                <Image src="/musea/figma/scanner-screen.png" alt="Musea scanner screen with camera viewfinder recognising a portrait painting in a gallery" width={280} height={600} style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
            <div>
              <p className="musea-subheading" style={{ marginBottom: "12px" }}>Scan &amp; Learn</p>
              <h3 className="musea-heading" style={{ fontSize: "1.8rem", marginBottom: "16px" }}>
                Point. Scan. Understand.
              </h3>
              <p className="musea-body" style={{ marginBottom: "16px" }}>
                The scanner is the heart of Musea. A full-screen camera view with corner brackets creates a focused viewfinder. The &ldquo;Recognising Subject&rdquo; status gives real-time feedback, and the gold Scan Artwork button is always within thumb reach.
              </p>
              <p className="musea-body">
                Designed for low-light gallery conditions with high-contrast UI elements and minimal visual clutter over the camera feed.
              </p>
            </div>
          </div>

          {/* Floating composition with all screens */}
          <div style={{ marginTop: "32px", textAlign: "center" }}>
            <h3 className="musea-subheading" style={{ marginBottom: "32px" }}>All Key Screens</h3>
            <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
              <div className="musea-screen-mockup musea-float" style={{ maxWidth: "200px", "--r": "-3deg" } as React.CSSProperties}>
                <Image src="/musea/figma/search-screen.png" alt="Search screen" width={200} height={430} style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="musea-screen-mockup musea-float" style={{ maxWidth: "220px", "--r": "0deg", animationDelay: "1s", marginTop: "-20px" } as React.CSSProperties}>
                <Image src="/musea/figma/scanner-screen.png" alt="Scanner screen" width={220} height={475} style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== ACCESSIBILITY ==================== */}
      <section id="accessibility" className="musea-section">
        <div className="musea-container">
          <p className="musea-section-number">11 — Accessibility Considerations</p>
          <div className="musea-divider" />

          <h2 className="musea-heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "16px", maxWidth: "700px" }}>
            Designed to be understood by everyone.
          </h2>
          <p className="musea-body" style={{ maxWidth: "600px", marginBottom: "48px" }}>
            Accessibility was not an afterthought — it was embedded into every design decision from typography to interaction patterns.
          </p>

          <div className="musea-grid-2">
            {[
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.399-.586c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"/></svg>, title: "Readable Typography", desc: "Body text uses Inter at 16px+ with 1.8 line height. Headings use Cormorant Garamond at generous sizes. No decorative fonts in content areas." },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/></svg>, title: "High Contrast", desc: "Gold (#C9A84C) on dark backgrounds passes WCAG AA for large text. Body text (#8A857D) is used at sizes above 18px for comfortable readability." },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 6.002-2.082 9.72 9.72 0 0 0 3-3.916Z"/></svg>, title: "Dark Mode Native", desc: "The entire app is built dark-first for museum environments where bright screens are disruptive. Reduces eye strain during extended gallery visits." },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/></svg>, title: "Large Tap Targets", desc: "All interactive elements are minimum 44×44px. The scan button is oversized and centred for easy one-handed thumb access." },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"/><path d="M6 6h.008v.008H6V6Z"/></svg>, title: "Icon + Label Pairing", desc: "Every icon in the navigation and UI is paired with a text label. No icon-only interactions — reducing guesswork for all users." },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"/></svg>, title: "Simplified Language", desc: "Art terminology is explained in plain language with optional \"learn more\" expansions. Content is written at a conversational reading level." },
            ].map((item) => (
              <div key={item.title} className="musea-a11y-item">
                <div className="musea-a11y-icon" style={{ color: "var(--musea-gold)" }}>{item.icon}</div>
                <div>
                  <h3 style={{ fontFamily: "var(--musea-serif)", fontSize: "1.05rem", color: "var(--musea-text)", marginBottom: "6px" }}>{item.title}</h3>
                  <p className="musea-body" style={{ fontSize: "0.83rem" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CHALLENGES & DECISIONS ==================== */}
      <section id="challenges" className="musea-section" style={{ background: "var(--musea-surface)" }}>
        <div className="musea-container">
          <p className="musea-section-number">12 — Challenges &amp; Design Decisions</p>
          <div className="musea-divider" />

          <h2 className="musea-heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "16px", maxWidth: "700px" }}>
            The hard choices behind the clean interface.
          </h2>
          <p className="musea-body" style={{ maxWidth: "600px", marginBottom: "48px" }}>
            Every polished screen hides dozens of tradeoffs. These are the key design decisions that shaped Musea.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              { challenge: "Simplicity vs. Depth", decision: "I designed a layered information architecture — surface-level summaries visible immediately, with expandable sections for deeper content. This serves both casual visitors (who glance) and students (who study).", tradeoff: "More complex component design, but dramatically better for both user types." },
              { challenge: "Expertise Level Differences", decision: "Rather than separate \"beginner\" and \"expert\" modes, I wrote all content in accessible language with optional academic references. The terminology adapts — the interface stays the same.", tradeoff: "Content writing takes significantly longer, but the UX stays unified." },
              { challenge: "Cognitive Overload in Galleries", decision: "The scanner interface shows only the essential: artwork name, artist, and a 2-line summary. Full details are one tap away, but never forced. The gallery context demands minimalism.", tradeoff: "Less information density per screen, but much higher comprehension rates." },
              { challenge: "Maintaining Immersion", decision: "Dark UI, no splash screens, instant results, minimal transitions. The app should feel like a natural extension of the gallery visit — not an interruption.", tradeoff: "Some onboarding clarity sacrificed for flow state preservation." },
            ].map((item) => (
              <div key={item.challenge} className="musea-decision">
                <h3 className="musea-decision-header">{item.challenge}</h3>
                <p className="musea-body" style={{ fontSize: "0.88rem", marginBottom: "12px" }}>{item.decision}</p>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "12px 16px", background: "rgba(201,168,76,0.06)", borderLeft: "2px solid var(--musea-gold-dim)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--musea-gold-dim)" strokeWidth="1.5" style={{ flexShrink: 0, marginTop: "2px" }}><path d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"/></svg>
                  <p style={{ fontSize: "0.8rem", color: "var(--musea-text-muted)", fontStyle: "italic" }}>Tradeoff: {item.tradeoff}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SUCCESS METRICS ==================== */}
      <section id="metrics" className="musea-section">
        <div className="musea-container">
          <p className="musea-section-number">13 — Success Metrics</p>
          <div className="musea-divider" />

          <h2 className="musea-heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "16px", maxWidth: "700px" }}>
            How we would measure impact.
          </h2>
          <p className="musea-body" style={{ maxWidth: "600px", marginBottom: "48px" }}>
            While this is a concept project, I defined success metrics that would guide real product decisions post-launch.
          </p>

          <div className="musea-grid-3" style={{ marginBottom: "48px" }}>
            {[
              { value: "85%", label: "Target scan-to-detail completion rate", sub: "Users who scan should reach the detail screen" },
              { value: "3.2x", label: "Target avg. artworks explored per session", sub: "Measuring engagement depth per visit" },
              { value: "40%", label: "Target journal save rate", sub: "Users saving at least one item per session" },
              { value: "60s", label: "Target avg. time on art detail screen", sub: "Enough to absorb key information" },
              { value: "72%", label: "Target Day-7 retention", sub: "Users returning within a week of first use" },
              { value: "4.5+", label: "Target app store rating", sub: "Based on usability and content quality" },
            ].map((metric) => (
              <div key={metric.label} className="musea-metric">
                <div className="musea-metric-value">{metric.value}</div>
                <p className="musea-metric-label" style={{ textTransform: "none", letterSpacing: "normal", lineHeight: 1.5, marginBottom: "4px" }}>{metric.label}</p>
                <p style={{ fontSize: "0.7rem", color: "var(--musea-text-muted)" }}>{metric.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINAL REFLECTION ==================== */}
      <section id="reflection" className="musea-section" style={{ background: "var(--musea-surface)", paddingBottom: "120px" }}>
        <div className="musea-container">
          <p className="musea-section-number">14 — Final Reflection</p>
          <div className="musea-divider" />

          <h2 className="musea-heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "24px", maxWidth: "700px" }}>
            What this project taught me.
          </h2>

          <div className="musea-grid-2" style={{ marginBottom: "48px" }}>
            <div>
              <h3 className="musea-subheading" style={{ marginBottom: "16px" }}>Lessons Learned</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  "Designing for a physical context (museums) requires understanding environmental constraints — lighting, movement, and social awareness.",
                  "The best UX writing is invisible. When art descriptions feel natural, the interface disappears.",
                  "Wireframing on paper first saved me from over-committing to layouts that didn't serve the user's real behaviour.",
                  "Accessibility is not a checkbox — it's a design philosophy that makes everything better for everyone.",
                ].map((lesson, i) => (
                  <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--musea-gold)", flexShrink: 0, marginTop: "8px" }} />
                    <p className="musea-body" style={{ fontSize: "0.9rem" }}>{lesson}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="musea-subheading" style={{ marginBottom: "16px" }}>Personal Growth</h3>
              <p className="musea-body" style={{ fontSize: "0.9rem", marginBottom: "16px" }}>
                Musea pushed me to think beyond screens. I learned that product design is about understanding systems — how people move through spaces, how information should be layered, and how technology can enhance (not replace) human experiences.
              </p>
              <p className="musea-body" style={{ fontSize: "0.9rem" }}>
                This was the project where I stopped designing interfaces and started designing experiences.
              </p>
            </div>
          </div>

          {/* If I Had More Time */}
          <div className="musea-card musea-card-gold" style={{ maxWidth: "700px" }}>
            <h3 className="musea-subheading" style={{ marginBottom: "16px" }}>If I Had More Time</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "Conduct usability testing with real museum visitors using the Figma prototype",
                "Design the onboarding flow and first-time user experience",
                "Explore AR overlay features for in-gallery artwork annotations",
                "Build out the Timeline section with interactive chronological browsing",
                "Design the Journal detail screens with note-taking and tagging",
                "Create a companion Apple Watch app for quick artwork lookup",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--musea-gold-dim)" strokeWidth="1.5" style={{ flexShrink: 0, marginTop: "3px" }}><path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                  <p className="musea-body" style={{ fontSize: "0.85rem" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Closing */}
          <div style={{ marginTop: "64px", textAlign: "center", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
            <div className="musea-divider" style={{ margin: "0 auto 24px" }} />
            <p style={{ fontFamily: "var(--musea-serif)", fontSize: "1.6rem", fontWeight: 300, color: "var(--musea-text)", lineHeight: 1.4, marginBottom: "16px" }}>
              Thank you for reading.
            </p>
            <p className="musea-body" style={{ marginBottom: "32px" }}>
              If you&rsquo;d like to discuss this project, collaborate on something new, or just talk about design — I&rsquo;d love to hear from you.
            </p>
            <a href="/#contact" style={{ display: "inline-block", padding: "14px 36px", background: "var(--musea-gold)", color: "#0a0a0a", fontFamily: "var(--musea-display)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 600, textDecoration: "none", transition: "opacity 0.3s" }}>
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
