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
  { id: "journey", label: "Journey" },
  { id: "wireframes", label: "Wireframes" },
  { id: "design-system", label: "Design System" },
  { id: "ui-showcase", label: "UI Showcase" },
  { id: "challenges", label: "Challenges" },
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

          {/* Hero Mockup — two screens */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              marginBottom: "48px",
              alignItems: "flex-end",
            }}
          >
            <div
              className="musea-screen-mockup musea-float"
              style={{ maxWidth: "170px", "--r": "-3deg", marginBottom: "18px" } as React.CSSProperties}
            >
              <Image
                src="/musea/figma/home-screen.png"
                alt="Musea Home Screen"
                width={170}
                height={367}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div
              className="musea-screen-mockup musea-float"
              style={{ maxWidth: "200px", "--r": "2deg", animationDelay: "1.5s" } as React.CSSProperties}
            >
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

          {/* Colour Palette — from Figma */}
          <h3 className="musea-subheading" style={{ marginBottom: "20px" }}>Colour Palette</h3>
          <div style={{ display: "flex", gap: "0", marginBottom: "12px", borderRadius: "8px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}>
            {[
              { color: "#111111", label: "bg/secondary" },
              { color: "#666666", label: "status/inactive" },
              { color: "#a8843a", label: "accent/gold-muted" },
              { color: "#c9a84c", label: "accent/gold" },
              { color: "#f0ead6", label: "text/cream" },
            ].map((s) => (
              <div key={s.color} style={{ flex: 1, background: s.color, height: "120px" }} title={s.label} />
            ))}
          </div>
          <div style={{ display: "flex", gap: "0", marginBottom: "48px" }}>
            {[
              { color: "#111111", label: "bg/secondary" },
              { color: "#666666", label: "status/inactive" },
              { color: "#a8843a", label: "accent/gold-muted" },
              { color: "#c9a84c", label: "accent/gold" },
              { color: "#f0ead6", label: "text/cream" },
            ].map((s) => (
              <div key={s.color} style={{ flex: 1, textAlign: "center", paddingTop: "8px" }}>
                <p style={{ fontSize: "0.7rem", fontFamily: "var(--musea-display)", color: "var(--musea-text-muted)", letterSpacing: "0.05em" }}>{s.label}</p>
                <p style={{ fontSize: "0.65rem", color: "var(--musea-text-muted)", marginTop: "2px" }}>{s.color.toUpperCase()}</p>
              </div>
            ))}
          </div>

          {/* Figma Variables */}
          <h3 className="musea-subheading" style={{ marginBottom: "20px" }}>Figma Design Tokens</h3>
          <div className="musea-grid-2" style={{ marginBottom: "48px", gap: "16px" }}>
            {[
              {
                group: "bg",
                vars: [
                  { token: "bg/primary",   value: "#1A1A1A", color: "#1a1a1a" },
                  { token: "bg/secondary", value: "#111111", color: "#111111" },
                  { token: "bg/card",      value: "#2A2A2A", color: "#2a2a2a" },
                ],
              },
              {
                group: "accent",
                vars: [
                  { token: "accent/gold",       value: "#C9A84C", color: "#c9a84c" },
                  { token: "accent/gold-muted",  value: "#A8843A", color: "#a8843a" },
                ],
              },
              {
                group: "text",
                vars: [
                  { token: "text/primary",   value: "#FFFFFF", color: "#ffffff" },
                  { token: "text/secondary", value: "#AAAAAA", color: "#aaaaaa" },
                  { token: "text/cream",     value: "#F0EAD6", color: "#f0ead6" },
                ],
              },
              {
                group: "border & status",
                vars: [
                  { token: "border/default",   value: "#2A2A2A", color: "#2a2a2a" },
                  { token: "border/gold",       value: "#C9A84C", color: "#c9a84c" },
                  { token: "status/active",     value: "#C9A84C", color: "#c9a84c" },
                  { token: "status/inactive",   value: "#666666", color: "#666666" },
                ],
              },
            ].map((group) => (
              <div key={group.group} className="musea-card" style={{ padding: "24px" }}>
                <p className="musea-subheading" style={{ marginBottom: "16px", fontSize: "0.6rem" }}>{group.group}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {group.vars.map((v) => (
                    <div key={v.token} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ width: "28px", height: "28px", borderRadius: "6px", background: v.color, border: "1px solid rgba(255,255,255,0.08)", flexShrink: 0 }} />
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: "0.78rem", color: "var(--musea-text)", fontFamily: "var(--musea-display)" }}>{v.token}</p>
                      </div>
                      <p style={{ fontSize: "0.72rem", color: "var(--musea-text-muted)", fontFamily: "var(--musea-display)" }}>{v.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Spacing Scale */}
          <h3 className="musea-subheading" style={{ marginBottom: "20px" }}>Spacing Scale</h3>
          <div className="musea-card" style={{ padding: "24px", marginBottom: "48px" }}>
            <div style={{ display: "flex", alignItems: "flex-end", gap: "24px", flexWrap: "wrap" }}>
              {[
                { token: "xs",  value: 4 },
                { token: "sm",  value: 8 },
                { token: "md",  value: 16 },
                { token: "lg",  value: 24 },
                { token: "xl",  value: 32 },
                { token: "2xl", value: 48 },
              ].map((sp) => (
                <div key={sp.token} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: `${Math.min(sp.value * 2, 96)}px`, height: `${Math.min(sp.value * 2, 96)}px`, background: "rgba(201,168,76,0.15)", border: "1px solid var(--musea-gold-dim)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "0.65rem", color: "var(--musea-gold)", fontFamily: "var(--musea-display)" }}>{sp.value}px</span>
                  </div>
                  <p style={{ fontSize: "0.7rem", color: "var(--musea-text-muted)", fontFamily: "var(--musea-display)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{sp.token}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <h3 className="musea-subheading" style={{ marginBottom: "20px" }}>Typography</h3>
          <div className="musea-grid-2" style={{ marginBottom: "48px" }}>
            <div className="musea-card">
              <p style={{ fontSize: "0.7rem", color: "var(--musea-text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>Headings</p>
              <p style={{ fontFamily: "var(--musea-serif)", fontSize: "2.5rem", fontWeight: 600, color: "var(--musea-text)", lineHeight: 1.1, marginBottom: "4px" }}>Playfair Display</p>
              <p style={{ fontFamily: "var(--musea-serif)", fontSize: "1.4rem", fontWeight: 400, fontStyle: "italic", color: "var(--musea-gold)", lineHeight: 1.3, marginBottom: "12px" }}>Playfair Display &mdash; italics</p>
              <p className="musea-body" style={{ fontSize: "0.83rem" }}>Classic editorial serif with strong contrast between thick and thin strokes. Used for all display headings and section titles. Italic variant used for pull quotes and art titles.</p>
            </div>
            <div className="musea-card">
              <p style={{ fontSize: "0.7rem", color: "var(--musea-text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>Body &amp; UI</p>
              <p style={{ fontFamily: "var(--musea-sans)", fontSize: "2rem", fontWeight: 300, color: "var(--musea-text)", lineHeight: 1.1, marginBottom: "8px" }}>Inter &mdash; light</p>
              <p className="musea-body" style={{ fontSize: "0.83rem" }}>Clean geometric sans-serif at 300 weight for body text and UI labels. Optimised for legibility at small sizes, high-contrast environments, and extended reading in low-light gallery conditions.</p>
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

          {/* Screen 1 — Home */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", marginBottom: "80px" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="musea-screen-mockup" style={{ maxWidth: "280px" }}>
                <Image
                  src="/musea/figma/home-screen.png"
                  alt="Musea home screen showing Good Morning greeting, Daily Inspiration artwork, Movements filter pills, and Trending Artists carousel"
                  width={280}
                  height={600}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div>
              <p className="musea-subheading" style={{ marginBottom: "12px" }}>Home &amp; Discovery</p>
              <h3 className="musea-heading" style={{ fontSize: "1.8rem", marginBottom: "16px" }}>
                Your personalised gateway to the world of art.
              </h3>
              <p className="musea-body" style={{ marginBottom: "16px" }}>
                The home screen greets users by name and surfaces a curated Daily Inspiration — a featured artwork that rotates daily to encourage habitual engagement. Movement pills (Renaissance, Baroque, Impressionism) allow instant one-tap filtering.
              </p>
              <p className="musea-body">
                The Trending Artists carousel drives serendipitous discovery, while the persistent gold Scan button in the bottom navigation keeps the core feature always one tap away.
              </p>
            </div>
          </div>

          {/* Screen 2 — Search */}
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

          {/* Screen 4 — Artwork Detail */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", marginBottom: "80px" }}>
            <div>
              <p className="musea-subheading" style={{ marginBottom: "12px" }}>Artwork Detail</p>
              <h3 className="musea-heading" style={{ fontSize: "1.8rem", marginBottom: "16px" }}>
                Everything you want to know — one tap after scanning.
              </h3>
              <p className="musea-body" style={{ marginBottom: "16px" }}>
                The detail screen presents a full-bleed hero image of the artwork, followed by structured metadata — artist, year, medium, and dimensions — in a clean two-column grid. A gold progress bar subtly signals content depth below the fold.
              </p>
              <p className="musea-body">
                Two clear CTAs — Share and Save to Favourites — remain always visible. The tabbed History / Artist / Related Works section lets users choose their depth of exploration. A location card grounds the digital experience in the physical gallery.
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="musea-screen-mockup" style={{ maxWidth: "280px" }}>
                <Image
                  src="/musea/figma/artwork-detail.png"
                  alt="Musea artwork detail screen showing The Starry Night with metadata, Share and Save to Favourites buttons, and tabbed History section"
                  width={280}
                  height={600}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>

          {/* Screen 5 — My Journal */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", marginBottom: "80px" }}>
            <div style={{ display: "flex", justifyContent: "center", order: -1 }}>
              <div className="musea-screen-mockup" style={{ maxWidth: "280px" }}>
                <Image
                  src="/musea/figma/journal-screen.png"
                  alt="Musea My Journal screen showing bookmarked artworks — The Starry Night, Girl with a Pearl Earring, The Great Wave — with recent notes"
                  width={280}
                  height={600}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div>
              <p className="musea-subheading" style={{ marginBottom: "12px" }}>My Journal</p>
              <h3 className="musea-heading" style={{ fontSize: "1.8rem", marginBottom: "16px" }}>
                Your personal art collection, always with you.
              </h3>
              <p className="musea-body" style={{ marginBottom: "16px" }}>
                The Journal gives users a space to own their experience. Tabbed navigation across Bookmarks, Notes, and Visited creates three distinct layers of engagement. Quick-glance stats (12 items saved, 4 galleries) reinforce the habit loop.
              </p>
              <p className="musea-body">
                Recent Notes shows timestamped personal observations — a feature that transforms passive art appreciation into active, reflective learning.
              </p>
            </div>
          </div>

          {/* Screen 6 — Exhibition Detail */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", marginBottom: "80px" }}>
            <div>
              <p className="musea-subheading" style={{ marginBottom: "12px" }}>Exhibition Detail</p>
              <h3 className="musea-heading" style={{ fontSize: "1.8rem", marginBottom: "16px" }}>
                Plan your visit before you arrive.
              </h3>
              <p className="musea-body" style={{ marginBottom: "16px" }}>
                The exhibition screen uses a full-bleed hero painting as the backdrop, overlaying key details — series name, title, venue, and dates — in a visually immersive layout. The gold “Add to Planner” CTA makes it actionable in one tap.
              </p>
              <p className="musea-body">
                Location, opening hours, and a Related Exhibitions carousel ensure users stay in context and discover more — turning a single visit into a broader cultural journey.
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="musea-screen-mockup" style={{ maxWidth: "280px" }}>
                <Image
                  src="/musea/figma/exhibition-detail.png"
                  alt="Exhibition detail screen for Vermeer at the Rijksmuseum showing hero artwork, dates, Add to Planner CTA, location, and Related Exhibitions"
                  width={280}
                  height={600}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>

          {/* Screen 7 — Movement Detail */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", marginBottom: "80px" }}>
            <div style={{ display: "flex", justifyContent: "center", order: -1 }}>
              <div className="musea-screen-mockup" style={{ maxWidth: "280px" }}>
                <Image
                  src="/musea/figma/movement-detail.png"
                  alt="Movement detail screen for Renaissance showing full-bleed ceiling fresco, century range, interactive timeline, Key Artists and Key Works sections"
                  width={280}
                  height={600}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div>
              <p className="musea-subheading" style={{ marginBottom: "12px" }}>Movement Detail</p>
              <h3 className="musea-heading" style={{ fontSize: "1.8rem", marginBottom: "16px" }}>
                Deep dive into any era of art history.
              </h3>
              <p className="musea-body" style={{ marginBottom: "16px" }}>
                Each art movement gets a cinematic full-screen entry — a defining artwork fills the hero, overlaid with the movement name and century range. An interactive dot timeline charts the period at a glance.
              </p>
              <p className="musea-body">
                Key Artists and Key Works sections surface the most iconic figures and paintings. The gold “Explore Full Timeline” CTA connects this screen back to the broader Timeline tab, creating a seamless learning loop.
              </p>
            </div>
          </div>

          {/* Screen 8 — Timeline */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", marginBottom: "80px" }}>
            <div>
              <p className="musea-subheading" style={{ marginBottom: "12px" }}>Timeline</p>
              <h3 className="musea-heading" style={{ fontSize: "1.8rem", marginBottom: "16px" }}>
                The entire history of art, beautifully scrollable.
              </h3>
              <p className="musea-body" style={{ marginBottom: "16px" }}>
                The Timeline screen lists all major art movements in chronological order on a vertical dot-line timeline. Each entry shows the era, movement name, a one-line description, location tags, and a representative artwork thumbnail.
              </p>
              <p className="musea-body">
                This screen serves as both a learning tool and a navigation hub — tapping any movement opens the Movement Detail screen, giving users a consistent, explorable structure across the entire history of art.
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="musea-screen-mockup" style={{ maxWidth: "280px" }}>
                <Image
                  src="/musea/figma/timeline-screen.png"
                  alt="Timeline screen showing art movements on a vertical dot timeline — Impressionism, Ancient Art, Renaissance, Baroque, Surrealism, Pop Art"
                  width={280}
                  height={600}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>

          {/* Floating composition with all screens */}
          <div style={{ marginTop: "32px", textAlign: "center" }}>
            <h3 className="musea-subheading" style={{ marginBottom: "8px" }}>All Key Screens</h3>
            <p className="musea-body" style={{ fontSize: "0.85rem", marginBottom: "40px", color: "var(--musea-text-muted)" }}>8 screens designed end-to-end in Figma</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap", alignItems: "flex-end" }}>
              <div className="musea-screen-mockup musea-float" style={{ maxWidth: "140px", "--r": "-4deg", marginBottom: "16px" } as React.CSSProperties}>
                <Image src="/musea/figma/home-screen.png" alt="Home screen" width={140} height={302} style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="musea-screen-mockup musea-float" style={{ maxWidth: "148px", "--r": "-2deg", animationDelay: "0.3s" } as React.CSSProperties}>
                <Image src="/musea/figma/search-screen.png" alt="Search screen" width={148} height={319} style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="musea-screen-mockup musea-float" style={{ maxWidth: "155px", "--r": "0deg", animationDelay: "0.6s", marginBottom: "16px" } as React.CSSProperties}>
                <Image src="/musea/figma/scanner-screen.png" alt="Scanner screen" width={155} height={334} style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="musea-screen-mockup musea-float" style={{ maxWidth: "148px", "--r": "1.5deg", animationDelay: "0.9s" } as React.CSSProperties}>
                <Image src="/musea/figma/artwork-detail.png" alt="Artwork detail" width={148} height={319} style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="musea-screen-mockup musea-float" style={{ maxWidth: "148px", "--r": "2.5deg", animationDelay: "1.2s", marginBottom: "16px" } as React.CSSProperties}>
                <Image src="/musea/figma/journal-screen.png" alt="Journal screen" width={148} height={319} style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="musea-screen-mockup musea-float" style={{ maxWidth: "155px", "--r": "3deg", animationDelay: "1.5s" } as React.CSSProperties}>
                <Image src="/musea/figma/exhibition-detail.png" alt="Exhibition detail" width={155} height={334} style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="musea-screen-mockup musea-float" style={{ maxWidth: "148px", "--r": "4deg", animationDelay: "1.8s", marginBottom: "16px" } as React.CSSProperties}>
                <Image src="/musea/figma/movement-detail.png" alt="Movement detail" width={148} height={319} style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="musea-screen-mockup musea-float" style={{ maxWidth: "140px", "--r": "5deg", animationDelay: "2.1s" } as React.CSSProperties}>
                <Image src="/musea/figma/timeline-screen.png" alt="Timeline screen" width={140} height={302} style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>

          {/* Interactive Prototype */}
          <div id="prototyping" style={{ marginTop: "96px", scrollMarginTop: "80px" }}>
            <p className="musea-subheading" style={{ marginBottom: "12px" }}>Interactive Prototype</p>
            <div className="musea-divider" />
            <h3 className="musea-heading" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", marginBottom: "16px", maxWidth: "700px" }}>
              All screens connected — the complete user flow.
            </h3>
            <p className="musea-body" style={{ maxWidth: "620px", marginBottom: "40px" }}>
              The Figma prototype links all 8 screens into a fully interactive user flow. Every interaction state, navigation transition, and screen connection was mapped to simulate the real app experience for usability walkthroughs and stakeholder reviews.
            </p>

            {/* Prototype screenshot in browser chrome */}
            <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid var(--musea-border)", background: "var(--musea-surface-2)", boxShadow: "0 24px 64px rgba(0,0,0,0.5)" }}>
              <div style={{ padding: "12px 20px", background: "rgba(201,168,76,0.06)", borderBottom: "1px solid var(--musea-border)", display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#febc2e" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840" }} />
                <span style={{ fontSize: "0.72rem", color: "var(--musea-text-muted)", fontFamily: "var(--musea-display)", marginLeft: "12px", letterSpacing: "0.05em" }}>
                  Figma — Flow 1 · 8 Screens · 3587 × 1724
                </span>
              </div>
              <Image
                src="/musea/figma/prototype-flow.JPG"
                alt="Figma prototype flow diagram showing all 8 Musea screens — Home, Scanner, Art Info, Search, Exhibition, Movement Detail, Timeline, My Journal — connected with interactive prototype arrows across Flow 1"
                width={1200}
                height={576}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            <div className="musea-grid-3" style={{ marginTop: "24px" }}>
              {[
                { stat: "8", label: "Screens", sub: "Fully linked in Figma" },
                { stat: "Flow 1", label: "Prototype Flow", sub: "Complete end-to-end journey" },
                { stat: "100%", label: "Interactive States", sub: "Every tap state designed" },
              ].map((item) => (
                <div key={item.stat} className="musea-card" style={{ textAlign: "center", padding: "20px" }}>
                  <div style={{ fontFamily: "var(--musea-serif)", fontSize: "1.8rem", fontWeight: 600, color: "var(--musea-gold)", marginBottom: "4px" }}>{item.stat}</div>
                  <p style={{ fontSize: "0.82rem", color: "var(--musea-text)", marginBottom: "4px" }}>{item.label}</p>
                  <p style={{ fontSize: "0.72rem", color: "var(--musea-text-muted)" }}>{item.sub}</p>
                </div>
              ))}
            </div>
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
