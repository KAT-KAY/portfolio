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
  { id: "wireframes", label: "Wireframes" },
  { id: "design-system", label: "Design System" },
  { id: "ui-showcase", label: "UI Showcase" },
  { id: "reflection", label: "Reflection" },
]

export default function MuseaCaseStudy() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id) }),
      { threshold: 0.3 }
    )
    sections.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="musea-page">
      <Link href="/#case-studies" className="musea-back">
        <span>←</span><span>Back to Portfolio</span>
      </Link>

      <nav className="musea-side-nav" aria-label="Case study sections">
        {sections.map(({ id, label }) => (
          <a key={id} href={`#${id}`} className={activeSection === id ? "active" : ""} title={label} aria-label={label} />
        ))}
      </nav>

      {/* ═══ HERO ═══ */}
      <section id="hero" className="musea-hero">
        <div className="musea-hero-bg" style={{ backgroundImage: "url(/musea/museum-hero-bg.png)" }} />
        <div className="musea-hero-overlay" />
        <div className="musea-hero-content">
          <p className="musea-subheading" style={{ marginBottom: "16px" }}>UX / UI Case Study</p>
          <h1 className="musea-hero-title">Musea</h1>
          <p style={{ fontFamily:"var(--musea-serif)", fontSize:"clamp(1rem,2.5vw,1.3rem)", fontStyle:"italic", fontWeight:300, color:"var(--musea-gold)", marginBottom:"12px" }}>
            The Art History &amp; Gallery Companion
          </p>
          <p className="musea-hero-tagline">&ldquo;Transforming passive gallery visits into immersive learning experiences.&rdquo;</p>

          {/* Two hero screens */}
          <div style={{ display:"flex", justifyContent:"center", gap:"20px", marginBottom:"40px", alignItems:"flex-end" }}>
            <div className="musea-screen-mockup musea-float" style={{ maxWidth:"160px", "--r":"-3deg" } as React.CSSProperties}>
              <Image src="/musea/figma/home-screen.png" alt="Home" width={160} height={345} style={{ width:"100%", height:"auto" }} />
            </div>
            <div className="musea-screen-mockup musea-float" style={{ maxWidth:"185px", "--r":"2deg", animationDelay:"1.5s" } as React.CSSProperties}>
              <Image src="/musea/figma/scanner-screen.png" alt="Scanner" width={185} height={400} style={{ width:"100%", height:"auto" }} />
            </div>
          </div>

          <dl className="musea-hero-meta">
            {[["Role","UI/UX Designer"],["Platform","iOS / Android"],["Tools","Figma, Sketching"],["Type","Academic Project"]].map(([dt,dd]) => (
              <div key={dt} style={{ textAlign:"center" }}><dt>{dt}</dt><dd>{dd}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      {/* ═══ OVERVIEW ═══ */}
      <section id="overview" className="musea-section" style={{ borderTop:"1px solid var(--musea-border)", padding:"48px 0" }}>
        <div className="musea-container">
          <p className="musea-section-number">01 — Project Overview</p>
          <div className="musea-divider" />
          <p className="musea-body" style={{ maxWidth:"640px", marginBottom:"28px" }}>
            Musea lets users scan any painting and instantly receive contextual information — artist biography, movement, and plain-language descriptions. It bridges the gap between awe and understanding.
          </p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1px", background:"var(--musea-border)", border:"1px solid var(--musea-border)" }}>
            {[
              ["Objective","Scan-first app making art history accessible in live gallery visits"],
              ["Role","Solo UI/UX Designer — research · wireframes · visual design · prototype"],
              ["Deliverables","User research · Personas · Wireframes · High-fidelity UI · Prototype"],
            ].map(([label, value]) => (
              <div key={label} style={{ background:"var(--musea-surface)", padding:"20px 24px" }}>
                <p className="musea-subheading" style={{ marginBottom:"6px", fontSize:"0.58rem" }}>{label}</p>
                <p className="musea-body" style={{ fontSize:"0.84rem", lineHeight:1.55 }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM ═══ */}
      <section id="problem" className="musea-section" style={{ background:"var(--musea-surface)", padding:"56px 0" }}>
        <div className="musea-container">
          <p className="musea-section-number">02 — Problem Statement</p>
          <div className="musea-divider" />
          <div className="musea-grid-2" style={{ gap:"48px", alignItems:"start" }}>
            <div>
              <h2 className="musea-heading" style={{ fontSize:"clamp(1.6rem,3vw,2.4rem)", marginBottom:"24px" }}>
                Museums inspire awe — but rarely understanding.
              </h2>
              <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
                {[
                  ["🚧","Intimidating Experiences","Invisible barriers — atmosphere, language, and presentation keep people from engaging."],
                  ["📖","Complex Jargon","Wall plaques use academic terms most visitors walk past confused."],
                  ["🌊","Information Overload","Decision fatigue — no guidance means visitors miss what would resonate most."],
                  ["😶","Passive Experiences","Look-and-move-on. No way to interact, save, or revisit."],
                  ["🔍","No Contextual Info","Googling mid-visit breaks immersion and yields inconsistent results."],
                ].map(([icon,title,desc]) => (
                  <div key={title as string} style={{ display:"flex", gap:"12px", alignItems:"flex-start", padding:"12px 14px", background:"var(--musea-surface-2)", border:"1px solid var(--musea-border)" }}>
                    <span style={{ fontSize:"1rem", flexShrink:0 }}>{icon}</span>
                    <div>
                      <p style={{ fontFamily:"var(--musea-serif)", fontSize:"0.92rem", color:"var(--musea-text)", marginBottom:"2px" }}>{title}</p>
                      <p className="musea-body" style={{ fontSize:"0.78rem" }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ paddingTop:"8px" }}>
              <div className="musea-quote" style={{ marginBottom:"20px" }}>
                &ldquo;I love going to galleries, but I always feel like I&rsquo;m missing the point. The plaques are either too simple or too academic.&rdquo;
                <p style={{ fontSize:"0.76rem", color:"var(--musea-text-muted)", marginTop:"10px", fontStyle:"normal" }}>— Interview participant</p>
              </div>
              <div className="musea-quote">
                &ldquo;I want to know the story — tell me why the artist was heartbroken, not the paint medium.&rdquo;
                <p style={{ fontSize:"0.76rem", color:"var(--musea-text-muted)", marginTop:"10px", fontStyle:"normal" }}>— Sophia, Art Student</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RESEARCH ═══ */}
      <section id="research" className="musea-section" style={{ padding:"72px 0" }}>
        <div className="musea-container">
          <p className="musea-section-number">03 — Research &amp; Discovery</p>
          <div className="musea-divider" />
          <h2 className="musea-heading" style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", marginBottom:"36px", maxWidth:"640px" }}>
            Understanding how people actually experience art.
          </h2>
          <div className="musea-grid-3" style={{ marginBottom:"36px" }}>
            {[["87%","of visitors wanted simpler, more contextual art descriptions"],["6 / 8","interviewees Google paintings mid-visit but find inconsistent results"],["72%","preferred visual learning over reading long text blocks in galleries"]].map(([stat,label]) => (
              <div key={stat} className="musea-metric">
                <div className="musea-metric-value">{stat}</div>
                <p className="musea-metric-label" style={{ textTransform:"none", letterSpacing:"normal", lineHeight:1.5 }}>{label}</p>
              </div>
            ))}
          </div>
          <div className="musea-grid-2">
            <div className="musea-quote">
              &ldquo;I want to know the story — not technical details. Tell me why the artist was heartbroken, not the paint medium.&rdquo;
              <p style={{ fontSize:"0.78rem", color:"var(--musea-text-muted)", marginTop:"10px", fontStyle:"normal" }}>— Sophia, Art Student</p>
            </div>
            <div className="musea-quote">
              &ldquo;Every time I try to read the plaque, the text is tiny and full of words I don&rsquo;t know. I just move on and feel stupid.&rdquo;
              <p style={{ fontSize:"0.78rem", color:"var(--musea-text-muted)", marginTop:"10px", fontStyle:"normal" }}>— Haima, Casual Visitor</p>
            </div>
          </div>
        </div>
      </section>


      {/* ═══ WIREFRAMES ═══ */}
      <section id="wireframes" className="musea-section" style={{ background:"var(--musea-surface)", padding:"72px 0" }}>
        <div className="musea-container">
          <p className="musea-section-number">05 — Wireframes &amp; Ideation</p>
          <div className="musea-divider" />
          <h2 className="musea-heading" style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", marginBottom:"12px", maxWidth:"640px" }}>
            From paper to pixels.
          </h2>
          <p className="musea-body" style={{ maxWidth:"560px", marginBottom:"40px" }}>
            Starting with rough sketches to explore ideas quickly, then iterating through wireframe versions before arriving at the final visual direction.
          </p>

          {/* User flow sketch */}
          <div style={{ marginBottom:"40px" }}>
            <p className="musea-subheading" style={{ marginBottom:"16px" }}>User Flow Sketches</p>
            <div className="musea-polaroid" style={{ transform:"rotate(-1deg)", maxWidth:"560px" }}>
              <Image src="/musea/wireframes/userflow-storyboard.jpg" alt="Hand-drawn user flow sketches" width={560} height={740} style={{ width:"100%", height:"auto" }} />
              <p className="musea-polaroid-caption">User flow &amp; storyboard — hand sketched during ideation</p>
            </div>
          </div>

          {/* Wireframe iterations */}
          <div className="musea-grid-2" style={{ gap:"32px", alignItems:"start" }}>
            <div>
              <p className="musea-subheading" style={{ marginBottom:"16px" }}>Home Screen Iterations</p>
              <div className="musea-polaroid" style={{ transform:"rotate(1.5deg)" }}>
                <Image src="/musea/wireframes/wireframe-iterations.jpg" alt="Four wireframe iterations" width={560} height={740} style={{ width:"100%", height:"auto" }} />
                <p className="musea-polaroid-caption">Four iterations — layout hierarchy &amp; scan CTA placement</p>
              </div>
              <div className="musea-card" style={{ marginTop:"16px", padding:"20px" }}>
                <p className="musea-subheading" style={{ marginBottom:"6px", fontSize:"0.6rem" }}>What changed</p>
                <p className="musea-body" style={{ fontSize:"0.82rem" }}>Scan button moved to a prominent floating position. Daily Inspiration shifted to top for immediate engagement.</p>
              </div>
            </div>
            <div>
              <p className="musea-subheading" style={{ marginBottom:"16px" }}>Final Home Screen Wireframe</p>
              <div className="musea-polaroid" style={{ transform:"rotate(-2deg)" }}>
                <Image src="/musea/wireframes/home-screen-wireframe.jpg" alt="Final home wireframe" width={560} height={800} style={{ width:"100%", height:"auto" }} />
                <p className="musea-polaroid-caption">Final wireframe — refined structure with clear hierarchy</p>
              </div>
              <div className="musea-card" style={{ marginTop:"16px", padding:"20px" }}>
                <p className="musea-subheading" style={{ marginBottom:"6px", fontSize:"0.6rem" }}>Why this version</p>
                <p className="musea-body" style={{ fontSize:"0.82rem" }}>Balances content discovery with the core scan action. Persistent search bar + bottom navigation = clear wayfinding.</p>
              </div>
            </div>
          </div>
          <div className="musea-quote" style={{ marginTop:"36px", maxWidth:"640px" }}>
            &ldquo;The scan button needed to feel like the heart of the app — always one tap away.&rdquo;
          </div>
        </div>
      </section>

      {/* ═══ DESIGN SYSTEM ═══ */}
      <section id="design-system" className="musea-section" style={{ padding:"72px 0" }}>
        <div className="musea-container">
          <p className="musea-section-number">06 — Design System</p>
          <div className="musea-divider" />
          <h2 className="musea-heading" style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", marginBottom:"12px", maxWidth:"640px" }}>
            A visual language inspired by museum interiors.
          </h2>
          <p className="musea-body" style={{ maxWidth:"560px", marginBottom:"36px" }}>
            Dark walls that let art breathe, warm gold accents echoing antique frames, typography balancing classical elegance with modern readability.
          </p>

          {/* Color Palette */}
          <p className="musea-subheading" style={{ marginBottom:"14px" }}>Colour Palette</p>
          <div style={{ display:"flex", gap:0, marginBottom:"8px", borderRadius:"6px", overflow:"hidden", boxShadow:"0 8px 32px rgba(0,0,0,0.5)" }}>
            {[["#111111","bg/secondary"],["#666666","status/inactive"],["#a8843a","accent/gold-muted"],["#c9a84c","accent/gold"],["#f0ead6","text/cream"]].map(([color,label]) => (
              <div key={color} style={{ flex:1, background:color, height:"100px" }} title={label} />
            ))}
          </div>
          <div style={{ display:"flex", gap:0, marginBottom:"36px" }}>
            {[["#111111","bg/secondary"],["#666666","status/inactive"],["#a8843a","accent/gold-muted"],["#c9a84c","accent/gold"],["#f0ead6","text/cream"]].map(([color,label]) => (
              <div key={color} style={{ flex:1, textAlign:"center", paddingTop:"8px" }}>
                <p style={{ fontSize:"0.65rem", fontFamily:"var(--musea-display)", color:"var(--musea-text-muted)", letterSpacing:"0.04em" }}>{label}</p>
                <p style={{ fontSize:"0.6rem", color:"var(--musea-text-muted)", marginTop:"2px" }}>{color.toUpperCase()}</p>
              </div>
            ))}
          </div>

          {/* Typography + Components */}
          <div className="musea-grid-2" style={{ gap:"20px", marginBottom:"36px" }}>
            <div className="musea-card">
              <p style={{ fontSize:"0.68rem", color:"var(--musea-text-muted)", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"12px" }}>Headings</p>
              <p style={{ fontFamily:"var(--musea-serif)", fontSize:"2.2rem", fontWeight:600, color:"var(--musea-text)", lineHeight:1.1, marginBottom:"4px" }}>Playfair Display</p>
              <p style={{ fontFamily:"var(--musea-serif)", fontSize:"1.2rem", fontWeight:400, fontStyle:"italic", color:"var(--musea-gold)", marginBottom:"10px" }}>Playfair Display — italics</p>
              <p className="musea-body" style={{ fontSize:"0.82rem" }}>Classic editorial serif. Used for all display headings. Italic variant for pull quotes and art titles.</p>
            </div>
            <div className="musea-card">
              <p style={{ fontSize:"0.68rem", color:"var(--musea-text-muted)", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"12px" }}>Body &amp; UI</p>
              <p style={{ fontFamily:"var(--musea-sans)", fontSize:"1.8rem", fontWeight:300, color:"var(--musea-text)", lineHeight:1.1, marginBottom:"10px" }}>Inter — light 300</p>
              <p className="musea-body" style={{ fontSize:"0.82rem" }}>Clean geometric sans-serif. Optimised for legibility at small sizes and high-contrast low-light environments.</p>
            </div>
          </div>

          {/* UI Components */}
          <p className="musea-subheading" style={{ marginBottom:"16px" }}>UI Components</p>
          <div className="musea-grid-3" style={{ gap:"16px" }}>
            <div className="musea-card" style={{ textAlign:"center", padding:"20px" }}>
              <div style={{ display:"inline-block", padding:"10px 28px", background:"var(--musea-gold)", color:"#0a0a0a", fontFamily:"var(--musea-display)", fontSize:"0.78rem", textTransform:"uppercase", letterSpacing:"0.15em", fontWeight:600, marginBottom:"10px" }}>Scan Artwork</div>
              <p style={{ fontSize:"0.72rem", color:"var(--musea-text-muted)" }}>Primary CTA</p>
            </div>
            <div className="musea-card" style={{ textAlign:"center", padding:"20px" }}>
              <div style={{ display:"inline-block", padding:"10px 28px", border:"1px solid var(--musea-gold)", color:"var(--musea-gold)", fontFamily:"var(--musea-display)", fontSize:"0.78rem", textTransform:"uppercase", letterSpacing:"0.15em", fontWeight:500, marginBottom:"10px" }}>Learn More</div>
              <p style={{ fontSize:"0.72rem", color:"var(--musea-text-muted)" }}>Secondary Button</p>
            </div>
            <div className="musea-card" style={{ textAlign:"center", padding:"20px" }}>
              <div style={{ display:"flex", gap:"6px", justifyContent:"center", marginBottom:"10px" }}>
                {["All","Artworks","Artists"].map((tab,i) => (
                  <span key={tab} style={{ padding:"6px 14px", background: i===0?"var(--musea-gold)":"transparent", color: i===0?"#0a0a0a":"var(--musea-text-muted)", borderRadius:"20px", fontSize:"0.72rem", fontFamily:"var(--musea-display)", border: i===0?"none":"1px solid var(--musea-border)" }}>{tab}</span>
                ))}
              </div>
              <p style={{ fontSize:"0.72rem", color:"var(--musea-text-muted)" }}>Filter Chips</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ UI SHOWCASE ═══ */}
      <section id="ui-showcase" className="musea-section" style={{ background:"var(--musea-surface)", padding:"72px 0" }}>
        <div className="musea-container">
          <p className="musea-section-number">07 — Final UI Showcase</p>
          <div className="musea-divider" />
          <h2 className="musea-heading" style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", marginBottom:"12px", maxWidth:"640px" }}>
            The finished product — every pixel intentional.
          </h2>
          <p className="musea-body" style={{ maxWidth:"560px", marginBottom:"40px" }}>
            8 high-fidelity screens designed in Figma, optimised for dark museum environments, one-handed use, and instant comprehension.
          </p>

          {/* Row 1 — 4 screens */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"20px", marginBottom:"36px" }}>
            {[
              ["/musea/figma/home-screen.png","Home & Discovery","Personalised feed, daily inspiration, movement filters"],
              ["/musea/figma/search-screen.png","Search & Discover","Filter chips, artwork cards, featured artists"],
              ["/musea/figma/scanner-screen.png","Scan & Learn","Full-screen camera, real-time recognition feedback"],
              ["/musea/figma/artwork-detail.png","Artwork Detail","Full-bleed hero, metadata, tabbed History/Artist/Related"],
            ].map(([src,label,desc]) => (
              <div key={label as string}>
                <div className="musea-screen-mockup" style={{ maxWidth:"100%" }}>
                  <Image src={src as string} alt={label as string} width={280} height={600} style={{ width:"100%", height:"auto" }} />
                </div>
                <p style={{ fontFamily:"var(--musea-display)", fontSize:"0.7rem", fontWeight:600, color:"var(--musea-gold)", marginTop:"10px", marginBottom:"4px" }}>{label}</p>
                <p style={{ fontSize:"0.73rem", color:"var(--musea-text-muted)", lineHeight:1.5 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Row 2 — 4 screens */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"20px", marginBottom:"48px" }}>
            {[
              ["/musea/figma/journal-screen.png","My Journal","Bookmarks, notes, visited — personal art collection"],
              ["/musea/figma/exhibition-detail.png","Exhibition Detail","Full-bleed hero, planner CTA, related exhibitions"],
              ["/musea/figma/movement-detail.png","Movement Detail","Cinematic entry, dot timeline, key artists & works"],
              ["/musea/figma/timeline-screen.png","Timeline","All movements chronologically — tappable navigation"],
            ].map(([src,label,desc]) => (
              <div key={label as string}>
                <div className="musea-screen-mockup" style={{ maxWidth:"100%" }}>
                  <Image src={src as string} alt={label as string} width={280} height={600} style={{ width:"100%", height:"auto" }} />
                </div>
                <p style={{ fontFamily:"var(--musea-display)", fontSize:"0.7rem", fontWeight:600, color:"var(--musea-gold)", marginTop:"10px", marginBottom:"4px" }}>{label}</p>
                <p style={{ fontSize:"0.73rem", color:"var(--musea-text-muted)", lineHeight:1.5 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Prototype Flow */}
          <p className="musea-subheading" style={{ marginBottom:"12px" }}>Interactive Prototype</p>
          <div className="musea-divider" />
          <p className="musea-body" style={{ maxWidth:"560px", marginBottom:"28px" }}>
            All 8 screens connected in Figma Flow 1 — every tap state, transition, and interaction mapped for usability walkthroughs.
          </p>
          <div style={{ borderRadius:"10px", overflow:"hidden", border:"1px solid var(--musea-border)", background:"var(--musea-surface-2)", boxShadow:"0 24px 64px rgba(0,0,0,0.5)", marginBottom:"20px" }}>
            <div style={{ padding:"10px 16px", background:"rgba(201,168,76,0.06)", borderBottom:"1px solid var(--musea-border)", display:"flex", alignItems:"center", gap:"6px" }}>
              {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width:"10px", height:"10px", borderRadius:"50%", background:c }} />)}
              <span style={{ fontSize:"0.68rem", color:"var(--musea-text-muted)", fontFamily:"var(--musea-display)", marginLeft:"8px" }}>Figma — Flow 1 · 8 Screens · 3587 × 1724</span>
            </div>
            <Image src="/musea/figma/prototype-flow.JPG" alt="Figma prototype flow" width={1200} height={576} style={{ width:"100%", height:"auto", display:"block" }} />
          </div>
          <div className="musea-grid-3" style={{ gap:"16px" }}>
            {[["8","Screens","Fully linked in Figma"],["Flow 1","Prototype","Complete end-to-end journey"],["100%","Interactions","Every tap state designed"]].map(([stat,label,sub]) => (
              <div key={label} className="musea-card" style={{ textAlign:"center", padding:"20px" }}>
                <div style={{ fontFamily:"var(--musea-serif)", fontSize:"1.6rem", fontWeight:600, color:"var(--musea-gold)", marginBottom:"4px" }}>{stat}</div>
                <p style={{ fontSize:"0.8rem", color:"var(--musea-text)", marginBottom:"2px" }}>{label}</p>
                <p style={{ fontSize:"0.7rem", color:"var(--musea-text-muted)" }}>{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CHALLENGES ═══ */}
      <section id="challenges" className="musea-section" style={{ padding:"72px 0" }}>
        <div className="musea-container">
          <p className="musea-section-number">08 — Challenges &amp; Decisions</p>
          <div className="musea-divider" />
          <h2 className="musea-heading" style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", marginBottom:"36px", maxWidth:"640px" }}>
            The hard choices behind the clean interface.
          </h2>
          <div style={{ display:"flex", flexDirection:"column", gap:"16px" }}>
            {[
              ["Simplicity vs. Depth","Layered IA — surface-level summaries visible immediately, expandable sections for deeper content. Serves both casual visitors and students.","More complex components, but dramatically better for both user types."],
              ["Expertise Level Differences","Accessible language with optional academic references — no separate beginner/expert modes. The terminology adapts, the interface stays unified.","Content writing takes longer, but UX stays consistent for all users."],
              ["Cognitive Overload in Galleries","Scanner shows only: name, artist, 2-line summary. Full details one tap away, never forced. Gallery context demands minimalism.","Less density per screen, but much higher comprehension rates."],
              ["Maintaining Immersion","Dark UI, no splash screens, instant results, minimal transitions. The app feels like a natural extension of the gallery visit.","Some onboarding clarity sacrificed for flow state preservation."],
            ].map(([challenge, decision, tradeoff]) => (
              <div key={challenge} className="musea-decision">
                <h3 className="musea-decision-header">{challenge}</h3>
                <p className="musea-body" style={{ fontSize:"0.86rem", marginBottom:"10px" }}>{decision}</p>
                <div style={{ padding:"10px 14px", background:"rgba(201,168,76,0.06)", borderLeft:"2px solid var(--musea-gold-dim)" }}>
                  <p style={{ fontSize:"0.78rem", color:"var(--musea-text-muted)", fontStyle:"italic" }}>Tradeoff: {tradeoff}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REFLECTION ═══ */}
      <section id="reflection" className="musea-section" style={{ background:"var(--musea-surface)", padding:"72px 0 100px" }}>
        <div className="musea-container">
          <p className="musea-section-number">09 — Final Reflection</p>
          <div className="musea-divider" />
          <h2 className="musea-heading" style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", marginBottom:"32px", maxWidth:"640px" }}>
            What this project taught me.
          </h2>
          <div className="musea-grid-2" style={{ gap:"40px", marginBottom:"36px" }}>
            <div>
              <p className="musea-subheading" style={{ marginBottom:"16px" }}>Lessons Learned</p>
              <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
                {[
                  "Designing for physical contexts requires understanding environmental constraints — lighting, movement, and social awareness.",
                  "The best UX writing is invisible. When art descriptions feel natural, the interface disappears.",
                  "Paper wireframes saved me from over-committing to layouts that didn't serve real behaviour.",
                  "Accessibility is a design philosophy that makes everything better for everyone.",
                ].map((lesson, i) => (
                  <div key={i} style={{ display:"flex", gap:"10px", alignItems:"flex-start" }}>
                    <div style={{ width:"5px", height:"5px", borderRadius:"50%", background:"var(--musea-gold)", flexShrink:0, marginTop:"8px" }} />
                    <p className="musea-body" style={{ fontSize:"0.88rem" }}>{lesson}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="musea-subheading" style={{ marginBottom:"16px" }}>If I Had More Time</p>
              <div className="musea-card musea-card-gold" style={{ padding:"20px" }}>
                {[
                  "Usability testing with real museum visitors",
                  "Design the onboarding & first-time user experience",
                  "Explore AR overlay features for in-gallery annotations",
                  "Build out the Timeline with interactive chronological browsing",
                  "Design Journal detail screens with note-taking and tagging",
                ].map((item, i) => (
                  <div key={i} style={{ display:"flex", gap:"8px", alignItems:"flex-start", marginBottom:"10px" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--musea-gold-dim)" strokeWidth="1.5" style={{ flexShrink:0, marginTop:"3px" }}><path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                    <p className="musea-body" style={{ fontSize:"0.82rem" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ textAlign:"center", maxWidth:"520px", margin:"0 auto" }}>
            <div className="musea-divider" style={{ margin:"0 auto 24px" }} />
            <p style={{ fontFamily:"var(--musea-serif)", fontSize:"1.5rem", fontWeight:300, color:"var(--musea-text)", lineHeight:1.4, marginBottom:"14px" }}>
              Thank you for reading.
            </p>
            <p className="musea-body" style={{ marginBottom:"28px" }}>
              If you&rsquo;d like to discuss this project, collaborate, or just talk about design — I&rsquo;d love to hear from you.
            </p>
            <a href="/#contact" style={{ display:"inline-block", padding:"13px 32px", background:"var(--musea-gold)", color:"#0a0a0a", fontFamily:"var(--musea-display)", fontSize:"0.78rem", textTransform:"uppercase", letterSpacing:"0.15em", fontWeight:600, textDecoration:"none" }}>
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
