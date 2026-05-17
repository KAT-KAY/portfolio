"use client"
import "./hifazat.css"
import Link from "next/link"
import Image from "next/image"

const Shield = ({ s = 22, c = "currentColor" }: { s?: number; c?: string }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5">
    <path d="M12 2l8 4v6c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V6l8-4Z"/>
    <circle cx="12" cy="11" r="2.5" fill={c} stroke="none"/>
  </svg>
)
const Paw = ({ s = 24, cls = "" }: { s?: number; cls?: string }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" className={cls}>
    <ellipse cx="6" cy="7.5" rx="1.5" ry="2"/><ellipse cx="10" cy="6" rx="1.5" ry="2"/>
    <ellipse cx="14" cy="6" rx="1.5" ry="2"/><ellipse cx="18" cy="7.5" rx="1.5" ry="2"/>
    <path d="M12 10c-3.5 0-6 2.5-6 5.5 0 1.5 1 2.5 2.5 2.5h7c1.5 0 2.5-1 2.5-2.5C18 12.5 15.5 10 12 10z"/>
  </svg>
)

const CompFrame = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="hc-comp-frame">
    <span className="hc-comp-label">{label}</span>
    {children}
  </div>
)

export default function HifazatCard() {
  return (
    <div className="hc-page">

      {/* NAV */}
      <nav className="hc-nav">
        <Link href="/#case-studies" className="hc-nav-logo">
          <Shield s={20} c="var(--hc-primary)" /> HIFAZATCARD
        </Link>
        <div className="hc-nav-links">
          {["problem","solution","design","wireframe"].map(id => (
            <a key={id} href={`#${id}`} className="hc-nav-link" style={{textTransform:"capitalize"}}>{id}</a>
          ))}
          <a href="/#case-studies" className="hc-btn hc-btn-accent" style={{padding:"8px 20px"}}>← Portfolio</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hc-section" style={{paddingTop:"80px", paddingBottom:"48px"}}>
        <div className="hc-container">
          <div className="hc-hero">
            <div>
              <span className="hc-eyebrow">UX Case Study — Kaynat Tahir</span>
              <h1 className="hc-h1" style={{marginBottom:"18px"}}>Every animal deserves an identity.</h1>
              <p className="hc-body" style={{maxWidth:"440px", marginBottom:"28px"}}>
                Pakistan's first QR-based pet identity & vaccination record system. A physical card, a digital profile — scannable by any phone, no app needed.
              </p>
              <div style={{display:"flex", gap:"10px", flexWrap:"wrap", marginBottom:"28px"}}>
                <span className="hc-badge hc-badge-green">Research Complete</span>
                <span className="hc-badge hc-badge-accent">UI In Progress</span>
                <span className="hc-badge hc-badge-soft">Social Impact</span>
              </div>
              <div style={{display:"flex", gap:"14px"}}>
                <a href="#problem" className="hc-btn hc-btn-accent">Read Case Study</a>
                <a href="#design" className="hc-btn hc-btn-outline">Design System ↓</a>
              </div>
            </div>
            <div className="hc-hero-img-wrap">
              <svg className="hc-hero-star hc-hero-star-1" width="26" height="26" viewBox="0 0 24 24" fill="var(--hc-accent)"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z"/></svg>
              <svg className="hc-hero-star hc-hero-star-2" width="18" height="18" viewBox="0 0 24 24" fill="var(--hc-primary-light)"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z"/></svg>
              <Paw s={20} cls="hc-hero-paw hc-hero-paw-1" />
              <Paw s={16} cls="hc-hero-paw hc-hero-paw-2" />
              <div className="hc-hero-img-frame hc-float">
                <Image src="/hifazat/hero-pets.png" alt="Dog and cat" width={500} height={500} style={{width:"100%",height:"auto",display:"block"}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRIEF BAR */}
      <div className="hc-brief-bar">
        <div className="hc-container">
          <div className="hc-brief-grid">
            {[["Type","UX / Product Design"],["Role","Solo Designer"],["Tools","Figma · User Research"],["Status","UI In Progress"]].map(([l,v]) => (
              <div key={l} className="hc-brief-item">
                <span className="hc-brief-label">{l}</span>
                <span className="hc-brief-value">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ PROBLEM (compact) ═══ */}
      <section id="problem" className="hc-section-sm hc-section-alt">
        <div className="hc-container">
          <div className="hc-section-header">
            <div className="hc-counter">01 — THE PROBLEM</div>
            <h2 className="hc-h2">A gap no one has filled.</h2>
          </div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"32px", alignItems:"start"}}>
            <div className="hc-pullquote">
              "A pet was killed in its own neighborhood because no one knew it had a home. Pakistan has 10M+ pet owners and zero digital tools built for them."
            </div>
            <div className="hc-stat-grid">
              {[["10M+","pet owners in Pakistan","var(--hc-primary-light)"],["0","local ID systems","var(--hc-accent-light)"],["0","digital tools exist","var(--hc-soft-green)"]].map(([n,l,bg]) => (
                <div key={l} className="hc-stat-card" style={{background:bg}}>
                  <div className="hc-stat-num" style={{fontSize:"2rem"}}>{n}</div>
                  <p className="hc-body-sm" style={{marginTop:"4px"}}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RESEARCH (compact) ═══ */}
      <section id="research" className="hc-section-sm">
        <div className="hc-container">
          <div className="hc-section-header">
            <div className="hc-counter">02 — RESEARCH</div>
            <h2 className="hc-h2">The numbers confirmed the gap.</h2>
          </div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"16px"}}>
            {[
              ["8,100+","monthly searches for 'vet near me Karachi' — no local site ranks.","var(--hc-primary)","#fff"],
              ["< 15","keyword difficulty — the market is wide open for a local solution.","var(--hc-accent-light)","var(--hc-black)"],
              ["#1","The closest competitor is Indian and doesn't even list Pakistan.","var(--hc-primary-light)","var(--hc-black)"],
            ].map(([n,d,bg,col]) => (
              <div key={n} style={{background:bg, border:"var(--border)", boxShadow:"var(--shadow-sm)", padding:"24px"}}>
                <div className="hc-stat-num" style={{color:col,fontSize:"1.8rem",marginBottom:"8px"}}>{n}</div>
                <p style={{color:col==="#fff"?"rgba(255,255,255,0.75)":"var(--hc-charcoal)",fontSize:"0.82rem",fontFamily:"var(--hc-body)",opacity:0.85}}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ USERS (compact list) ═══ */}
      <section id="users" className="hc-section-sm hc-section-alt">
        <div className="hc-container">
          <div className="hc-section-header">
            <div className="hc-counter">03 — USER PERSONAS</div>
            <h2 className="hc-h2">Three people, one shared problem.</h2>
          </div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"16px"}}>
            {[
              {emoji:"🐕",title:"Urban Pet Owner",color:"var(--hc-primary)",bg:"var(--hc-primary-light)",points:["Forgets vaccination dates — nothing reminds her","No proof of ownership if pet goes missing"]},
              {emoji:"🐐",title:"Livestock Farmer",color:"var(--hc-accent-hover)",bg:"var(--hc-accent-light)",points:["Manages 40+ animals with zero digital records","Can't prove vaccination status at inspections"]},
              {emoji:"🏥",title:"Veterinary Clinic",color:"var(--hc-success)",bg:"var(--hc-soft-green)",points:["No patient history before the animal arrives","Paper records lost, damaged, incomplete"]},
            ].map(p => (
              <div key={p.title} style={{background:"var(--hc-white)",border:"var(--border)",boxShadow:"var(--shadow-sm)",padding:"24px"}}>
                <div style={{width:"40px",height:"40px",background:p.bg,border:`2px solid ${p.color}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",marginBottom:"12px"}}>{p.emoji}</div>
                <div style={{fontFamily:"var(--hc-display)",fontWeight:700,fontSize:"0.95rem",color:p.color,marginBottom:"12px"}}>{p.title}</div>
                <ul style={{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"8px"}}>
                  {p.points.map(pt => (
                    <li key={pt} style={{display:"flex",gap:"8px",fontSize:"0.82rem",fontFamily:"var(--hc-body)",color:"var(--hc-charcoal)",lineHeight:1.5}}>
                      <span style={{color:p.color,flexShrink:0,fontWeight:700}}>—</span>{pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SOLUTION (compact) ═══ */}
      <section id="solution" className="hc-section-sm">
        <div className="hc-container">
          <div className="hc-section-header">
            <div className="hc-counter">04 — THE SOLUTION</div>
            <h2 className="hc-h2">What HifazatCard does.</h2>
          </div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px"}}>
            {[
              ["🪪","QR Identity Card","Scannable by any phone. No app. Any stranger identifies the pet in seconds."],
              ["📋","Digital Animal Profile","Photo, breed, owner contact — emergency-ready in under 5 seconds."],
              ["💉","Vaccination Records","Chronological records updated by owner or verified vet."],
              ["💬","WhatsApp Reminders","Fires 14 days before each due date — channels people already open."],
              ["💳","JazzCash + EasyPaisa","Payments built for Pakistan, not borrowed from elsewhere."],
              ["🏥","Clinic Dashboard","Vets manage all registered patients. No paper, no manual tracking."],
            ].map(([icon,name,desc]) => (
              <div key={name} style={{display:"flex",gap:"14px",padding:"18px 20px",background:"var(--hc-white)",border:"var(--border)",boxShadow:"var(--shadow-sm)",alignItems:"flex-start"}}>
                <span style={{fontSize:"1.4rem",flexShrink:0}}>{icon}</span>
                <div>
                  <div style={{fontFamily:"var(--hc-display)",fontWeight:700,fontSize:"0.92rem",color:"var(--hc-black)",marginBottom:"4px"}}>{name}</div>
                  <p style={{fontFamily:"var(--hc-body)",fontSize:"0.8rem",color:"var(--hc-charcoal)",margin:0,lineHeight:1.5}}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DESIGN FOUNDATION ═══ */}
      <section id="design" className="hc-section-sm hc-section-alt">
        <div className="hc-container">
          <div className="hc-section-header">
            <div className="hc-counter">05 — DESIGN SYSTEM</div>
            <h2 className="hc-h2">Building the foundation.</h2>
          </div>

          {/* Color Palette */}
          <div className="hc-design-section">
            <p className="hc-design-section-title">Color Palette</p>
            <div className="hc-swatch-row">
              {[
                {hex:"#0D3B38",name:"Primary",label:"#0D3B38"},
                {hex:"#EBF5F2",name:"Primary Light",label:"#EBF5F2"},
                {hex:"#EBA020",name:"Accent",label:"#EBA020"},
                {hex:"#C98A10",name:"Accent Hover",label:"#C98A10"},
                {hex:"#F9F9F0",name:"BG Cream",label:"#F9F9F0"},
                {hex:"#E8E4DC",name:"Border",label:"#E8E4DC"},
                {hex:"#0D1F1E",name:"Heading",label:"#0D1F1E"},
                {hex:"#4A4A4A",name:"Body",label:"#4A4A4A"},
                {hex:"#8A8A8A",name:"Muted",label:"#8A8A8A"},
                {hex:"#2D9E68",name:"Success",label:"#2D9E68"},
                {hex:"#E2484A",name:"Danger",label:"#E2484A"},
              ].map(s => (
                <div key={s.label} className="hc-swatch">
                  <div className="hc-swatch-color" style={{background:s.hex}} />
                  <span className="hc-swatch-name">{s.name}</span>
                  <span className="hc-swatch-hex">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Typography + Spacing */}
          <div className="hc-comp-grid">
            <div className="hc-comp-frame">
              <span className="hc-comp-label">Typography Scale</span>
              <div style={{padding:"24px",display:"flex",flexDirection:"column",gap:"8px"}}>
                <p style={{fontFamily:"var(--hc-display)",fontWeight:800,fontSize:"1.6rem",lineHeight:1.1,color:"var(--hc-black)",margin:0}}>Welcome to HifazatCard</p>
                <p style={{fontFamily:"var(--hc-display)",fontWeight:700,fontSize:"1.1rem",color:"var(--hc-black)",margin:0}}>Register your animal today</p>
                <p style={{fontFamily:"var(--hc-display)",fontWeight:600,fontSize:"0.95rem",color:"var(--hc-black)",margin:0}}>Every animal deserves an identity</p>
                <p style={{fontFamily:"var(--hc-body)",fontSize:"0.88rem",color:"var(--hc-charcoal)",margin:0}}>Body text reads like this across the website. Comfortable and clear.</p>
                <p style={{fontFamily:"var(--hc-body)",fontSize:"0.75rem",color:"var(--hc-gray)",margin:0}}>Helper text, captions and small labels</p>
                <span style={{fontFamily:"var(--hc-display)",fontWeight:700,fontSize:"0.6rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--hc-black)"}}>BADGE · TAG · NAV ITEM</span>
              </div>
            </div>
            <div className="hc-comp-frame">
              <span className="hc-comp-label">Spacing & Radius</span>
              <div style={{padding:"24px"}}>
                <div style={{display:"flex",gap:"10px",alignItems:"flex-end",marginBottom:"24px"}}>
                  {[["xs","4px","4px"],["sm","8px","8px"],["md","16px","16px"],["lg","24px","24px"],["xl","32px","32px"],["2xl","48px","48px"]].map(([label,w,h]) => (
                    <div key={label} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"}}>
                      <div style={{width:w,height:h,background:"var(--hc-accent)",borderRadius:"2px"}} />
                      <span style={{fontSize:"0.58rem",fontFamily:"var(--hc-display)",fontWeight:700,color:"var(--hc-gray)"}}>{label}</span>
                    </div>
                  ))}
                </div>
                <div style={{display:"flex",gap:"16px",alignItems:"center"}}>
                  {[["sm","4px"],["md","8px"],["lg","12px"],["full","9999px"]].map(([label,r]) => (
                    <div key={label} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"}}>
                      <div style={{width:"40px",height:"40px",border:"2px solid var(--hc-black)",borderRadius:r}} />
                      <span style={{fontSize:"0.58rem",fontFamily:"var(--hc-display)",fontWeight:700,color:"var(--hc-gray)"}}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ UI COMPONENTS ═══ */}
      <section className="hc-section-sm">
        <div className="hc-container">
          <div className="hc-section-header">
            <div className="hc-counter">06 — UI COMPONENTS</div>
            <h2 className="hc-h2">Designed from scratch.</h2>
          </div>

          {/* Row 1: Navbar full-width */}
          <div style={{marginBottom:"16px"}}>
            <CompFrame label="Navigation Bar">
              <Image src="/hifazat/design-navbar.png" alt="Navbar" width={1040} height={200} style={{width:"100%",height:"auto",display:"block"}} />
            </CompFrame>
          </div>

          {/* Row 2: Buttons + Badges */}
          <div className="hc-comp-grid" style={{marginBottom:"16px"}}>
            <CompFrame label="Buttons">
              <Image src="/hifazat/design-buttons.png" alt="Button variants" width={520} height={260} style={{width:"100%",height:"auto",display:"block"}} />
            </CompFrame>
            <CompFrame label="Badges">
              <Image src="/hifazat/design-badges.png" alt="Badge variants" width={520} height={180} style={{width:"100%",height:"auto",display:"block"}} />
            </CompFrame>
          </div>

          {/* Row 3: Input Fields + Stats Cards */}
          <div className="hc-comp-grid" style={{marginBottom:"16px"}}>
            <CompFrame label="Input Fields">
              <Image src="/hifazat/design-inputs.png" alt="Input field states" width={520} height={220} style={{width:"100%",height:"auto",display:"block"}} />
            </CompFrame>
            <CompFrame label="Stats Cards">
              <Image src="/hifazat/design-stats.png" alt="Stats cards" width={520} height={220} style={{width:"100%",height:"auto",display:"block"}} />
            </CompFrame>
          </div>

          {/* Row 4: Feature Cards + Pet ID Card */}
          <div className="hc-comp-grid">
            <CompFrame label="Feature Cards">
              <Image src="/hifazat/design-feature-card.png" alt="Feature card variants" width={520} height={340} style={{width:"100%",height:"auto",display:"block"}} />
            </CompFrame>
            <CompFrame label="Pet ID Card">
              <Image src="/hifazat/design-pet-id.png" alt="Pet ID card states" width={520} height={340} style={{width:"100%",height:"auto",display:"block"}} />
            </CompFrame>
          </div>

          {/* Row 5: Footer full-width */}
          <div style={{marginTop:"16px"}}>
            <CompFrame label="Footer">
              <Image src="/hifazat/design-footer-comp.png" alt="Footer design" width={1040} height={260} style={{width:"100%",height:"auto",display:"block"}} />
            </CompFrame>
          </div>
        </div>
      </section>

      {/* ═══ WIREFRAME (split, left-aligned) ═══ */}
      <section id="wireframe" className="hc-section-sm hc-section-alt">
        <div className="hc-container">
          <div className="hc-wireframe-split">
            <div className="hc-wireframe-frame">
              <Image src="/hifazat/wireframe.jpg" alt="Hand-drawn wireframe" width={700} height={520} style={{width:"100%",height:"auto",display:"block"}} />
            </div>
            <div style={{paddingTop:"8px"}}>
              <div className="hc-section-header">
                <div className="hc-counter">07 — WIREFRAME</div>
                <h2 className="hc-h2">First sketch, first decision.</h2>
              </div>
              <p className="hc-body" style={{marginBottom:"20px",fontSize:"0.92rem"}}>
                Identity at the top. Owner contact second. Medical records below. A stranger needs to act in under 10 seconds.
              </p>
              {[["Priority","Emergency info visible above the fold"],["Hierarchy","Name → Owner → QR → Records"],["Access","Browser-based, zero download friction"]].map(([label,text]) => (
                <div key={label} style={{display:"flex",gap:"12px",alignItems:"flex-start",padding:"12px 16px",background:"var(--hc-white)",border:"var(--border)",boxShadow:"var(--shadow-sm)",marginBottom:"10px"}}>
                  <span style={{fontFamily:"var(--hc-display)",fontWeight:700,fontSize:"0.6rem",letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--hc-accent)",flexShrink:0,paddingTop:"3px"}}>{label}</span>
                  <p style={{fontFamily:"var(--hc-body)",fontSize:"0.83rem",color:"var(--hc-charcoal)",margin:0}}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="hc-cta">
        <Paw s={30} cls="hc-wobble" />
        <p className="hc-cta-text" style={{marginTop:"16px"}}>Research done. Problem defined.</p>
        <p className="hc-cta-text" style={{color:"var(--hc-accent)",marginTop:"8px"}}>The interface is coming<span className="hc-blink">|</span></p>
        <a href="/#case-studies" className="hc-btn hc-btn-accent" style={{marginTop:"32px"}}>← Back to Portfolio</a>
      </div>

      {/* FOOTER */}
      <footer style={{background:"var(--hc-bg)",borderTop:"2px solid var(--hc-black)",padding:"22px"}}>
        <div className="hc-container" style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px"}}>
          <div style={{display:"flex",alignItems:"center",gap:"8px",fontFamily:"var(--hc-display)",fontWeight:800,fontSize:"0.88rem"}}>
            <Shield s={18} c="var(--hc-primary)"/> HifazatCard
          </div>
          <p style={{fontFamily:"var(--hc-body)",fontSize:"0.78rem",color:"var(--hc-gray)"}}>
            Designed by <strong style={{color:"var(--hc-black)"}}>Kaynat Tahir</strong> — UI/UX Designer
          </p>
          <div style={{display:"flex",gap:"14px"}}>
            <a href="/#contact" style={{color:"var(--hc-black)"}} aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8l9 6 9-6M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/></svg>
            </a>
            <a href="/#contact" style={{color:"var(--hc-black)"}} aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
