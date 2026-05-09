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
    <ellipse cx="6" cy="7.5" rx="1.5" ry="2"/>
    <ellipse cx="10" cy="6" rx="1.5" ry="2"/>
    <ellipse cx="14" cy="6" rx="1.5" ry="2"/>
    <ellipse cx="18" cy="7.5" rx="1.5" ry="2"/>
    <path d="M12 10c-3.5 0-6 2.5-6 5.5 0 1.5 1 2.5 2.5 2.5h7c1.5 0 2.5-1 2.5-2.5C18 12.5 15.5 10 12 10z"/>
  </svg>
)

const Divider = ({ bg = "on-white" }: { bg?: string }) => (
  <div className={`hc-sep ${bg}`}>
    <div className="hc-sep-icon" style={{ background: bg === "on-alt" ? "var(--hc-bg-alt)" : "var(--hc-bg)" }}>
      <Paw s={18} />
    </div>
  </div>
)

export default function HifazatCard() {
  return (
    <div className="hc-page">

      {/* NAV */}
      <nav className="hc-nav">
        <Link href="/#case-studies" className="hc-nav-logo">
          <Shield s={20} /> HIFAZATCARD
        </Link>
        <div className="hc-nav-links">
          {["problem","research","users","solution","wireframe"].map(id => (
            <a key={id} href={`#${id}`} className="hc-nav-link" style={{textTransform:"capitalize"}}>{id}</a>
          ))}
          <a href="#solution" className="hc-btn hc-btn-yellow" style={{padding:"8px 20px"}}>Register</a>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="hc-section" style={{paddingTop:"96px", paddingBottom:"56px"}}>
        <div className="hc-container">
          <div className="hc-hero">
            <div>
              <span className="hc-eyebrow">UX Case Study — Kaynat Tahir · 2024</span>
              <h1 className="hc-h1" style={{marginBottom:"20px"}}>Every animal deserves an identity.</h1>
              <p className="hc-body" style={{maxWidth:"460px", marginBottom:"28px", fontSize:"1.1rem"}}>
                HifazatCard is Pakistan&rsquo;s first QR-based pet identity and vaccination record system — a physical card that gives every animal a digital profile, scannable by any phone, no app required.
              </p>
              <div style={{display:"flex", gap:"10px", flexWrap:"wrap", marginBottom:"28px"}}>
                <span className="hc-badge hc-badge-green">Research Complete</span>
                <span className="hc-badge hc-badge-yellow">UI In Progress</span>
                <span className="hc-badge" style={{background:"var(--hc-peach-light)"}}>Social Impact</span>
              </div>
              <div style={{display:"flex", gap:"16px", alignItems:"center"}}>
                <a href="#problem" className="hc-btn hc-btn-yellow">Read Case Study</a>
                <Paw s={36} cls="hc-wobble" />
              </div>
            </div>
            <div className="hc-hero-img-wrap">
              {/* Decorative stars */}
              <svg className="hc-hero-star hc-hero-star-1" width="28" height="28" viewBox="0 0 24 24" fill="var(--hc-yellow)" stroke="var(--hc-black)" strokeWidth="1.5"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z"/></svg>
              <svg className="hc-hero-star hc-hero-star-2" width="20" height="20" viewBox="0 0 24 24" fill="var(--hc-peach)" stroke="var(--hc-black)" strokeWidth="1.5"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z"/></svg>
              <svg className="hc-hero-star hc-hero-star-3" width="16" height="16" viewBox="0 0 24 24" fill="var(--hc-green-light)" stroke="var(--hc-black)" strokeWidth="1.5"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z"/></svg>
              {/* Decorative paws */}
              <Paw s={22} cls="hc-hero-paw hc-hero-paw-1" />
              <Paw s={18} cls="hc-hero-paw hc-hero-paw-2" />
              <Paw s={24} cls="hc-hero-paw hc-hero-paw-3" />
              <div className="hc-hero-img-frame hc-float">
                <Image src="/hifazat/hero-pets.png" alt="Dog and cat together" width={500} height={500} style={{width:"100%",height:"auto",display:"block"}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider bg="on-white" />

      {/* ═══ PROBLEM ═══ */}
      <section id="problem" className="hc-section-sm hc-section-alt">
        <div className="hc-container">
          <div className="hc-section-header">
            <div className="hc-counter">01</div>
            <span className="hc-eyebrow">The Problem</span>
            <h2 className="hc-h2">A gap no one has filled.</h2>
          </div>
          <div style={{display:"grid", gridTemplateColumns:"1.2fr 0.8fr", gap:"48px", alignItems:"start"}}>
            <div>
              <div className="hc-pullquote" style={{marginBottom:"28px"}}>
                A pet was killed in its own neighborhood because no one knew it had a home. A cat hasn&rsquo;t seen a vet in three years because her owner gets no reminders. Pakistan has over 10 million pet owners and zero digital tools built for them.
              </div>
              <div className="hc-stat-grid">
                {[["10M+","pet owners in Pakistan"],["0","local ID systems"],["0","digital tools exist"]].map(([n,l]) => (
                  <div key={l} className="hc-stat-card" style={{background: n==="10M+"?"var(--hc-peach-light)": n==="0" && l.includes("ID")?"var(--hc-yellow-light)":"var(--hc-green-light)"}}>
                    <div className="hc-stat-num">{n}</div>
                    <p className="hc-body-sm" style={{marginTop:"4px"}}>{l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hc-frame hc-frame-tilt-r">
              <Image src="/hifazat/golden-flower.jpg" alt="Golden retriever with flower" width={400} height={500} style={{width:"100%",height:"auto",display:"block"}} />
            </div>
          </div>
        </div>
      </section>

      <Divider bg="on-alt" />

      {/* ═══ RESEARCH ═══ */}
      <section id="research" className="hc-section-sm">
        <div className="hc-container">
          <div className="hc-section-header">
            <div className="hc-counter">02</div>
            <span className="hc-eyebrow">Research &amp; Data</span>
            <h2 className="hc-h2">The numbers confirmed the gap.</h2>
          </div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"20px", marginBottom:"32px"}}>
            {[["8,000+","monthly searches for 'vet near me Karachi' — zero local websites ranking."],["< 15","keyword difficulty. The market is wide open for a local solution."]].map(([n,d]) => (
              <div key={n} className="hc-card hc-card-green" style={{padding:"32px"}}>
                <div className="hc-stat-num" style={{color:"#fff",fontSize:"3rem",marginBottom:"8px"}}>{n}</div>
                <p className="hc-body-sm" style={{color:"rgba(255,255,255,0.85)"}}>{d}</p>
              </div>
            ))}
          </div>
          <div style={{position:"relative"}}>
            <table className="hc-table">
              <thead><tr><th>Keyword</th><th>Monthly Volume</th><th>Difficulty</th><th>Opportunity</th></tr></thead>
              <tbody>
                {[["vet near me karachi","8,100","12","Very High"],["pet vaccination schedule","3,200","8","High"],["pet registration pakistan","1,400","5","Wide Open"],["dog vaccination card","2,600","11","High"],["lost pet found pakistan","900","3","No Competition"]].map((r,i)=>(
                  <tr key={i}>{r.map((c,j)=><td key={j}>{c}</td>)}</tr>
                ))}
              </tbody>
            </table>
            <div className="hc-sticky" style={{position:"absolute",top:"-24px",right:"-16px",transform:"rotate(3deg)"}}>
              &ldquo;No local competitor exists.&rdquo;
            </div>
          </div>
        </div>
      </section>

      {/* DARK INTERLUDE */}
      <div style={{background:"var(--hc-black)",padding:"64px 28px",textAlign:"center"}}>
        <p style={{fontFamily:"var(--hc-display)",fontWeight:700,fontSize:"clamp(1.3rem,3vw,2rem)",color:"var(--hc-white)",maxWidth:"700px",margin:"0 auto",lineHeight:1.4}}>
          &ldquo;The closest competitor is an Indian app. It doesn&rsquo;t even know Pakistan exists.&rdquo;
        </p>
      </div>

      <Divider bg="on-white" />

      {/* ═══ USERS ═══ */}
      <section id="users" className="hc-section-sm">
        <div className="hc-container">
          <div className="hc-section-header">
            <div className="hc-counter">03</div>
            <span className="hc-eyebrow">User Research</span>
            <h2 className="hc-h2">Three people, one shared problem.</h2>
          </div>
          <div className="hc-persona-grid">
            {[
              {img:"/hifazat/small-dog.jpg",alt:"Small white dog",bg:"hc-persona-green",title:"Urban Pet Owner",titleCls:"hc-persona-title-white",items:["Forgets vaccination dates — no system reminds them.","No proof of ownership if the pet goes missing.","Uses WhatsApp for everything, not pet records."],itemCls:"hc-persona-item-white"},
              {img:"/hifazat/goat-flower.jpg",alt:"Goat with flowers",bg:"hc-persona-peach",title:"Livestock Farmer",titleCls:"",items:["Manages 40+ animals with zero digital records.","Can't prove vaccination status at inspections.","Loses track of which animals were treated."],itemCls:""},
              {img:"/hifazat/baby-goat.jpg",alt:"Baby white goat",bg:"hc-persona-yellow",title:"Veterinary Clinic",titleCls:"",items:["No patient history before the animal arrives.","Paper records are lost, damaged, incomplete.","No way to send reminders to pet owners."],itemCls:""},
            ].map(p=>(
              <div key={p.title} className={`hc-persona-card ${p.bg}`}>
                <Image src={p.img} alt={p.alt} width={360} height={180} className="hc-persona-img" />
                <div className="hc-persona-body">
                  <div className={`hc-persona-title ${p.titleCls}`}>{p.title}</div>
                  <ul className="hc-persona-list">
                    {p.items.map(it=><li key={it} className={`hc-persona-item ${p.itemCls}`}>{it}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider bg="on-white" />

      {/* ═══ EMPATHY MAP ═══ */}
      <section className="hc-section-sm hc-section-alt">
        <div className="hc-container">
          <div style={{display:"grid",gridTemplateColumns:"1fr 0.5fr",gap:"40px",alignItems:"start"}}>
            <div>
              <div className="hc-section-header">
                <div className="hc-counter">04</div>
                <span className="hc-eyebrow">Empathy Map</span>
                <h2 className="hc-h2">Inside the user&rsquo;s head.</h2>
              </div>
              <div style={{position:"relative"}}>
                <div className="hc-empathy">
                  {[
                    {l:"Says",bg:"var(--hc-green-light)",t:'"I know I need to vaccinate him, I just keep forgetting the date." — "There should be an app for this."'},
                    {l:"Thinks",bg:"var(--hc-white)",t:'"If something happens to my cat, no one would know she\'s mine." — "What if someone mistakes her for a stray?"'},
                    {l:"Feels",bg:"var(--hc-white)",t:"Guilt about missed vaccinations. Anxiety about losing their pet with no ID. Frustration that nothing exists."},
                    {l:"Does",bg:"var(--hc-peach-light)",t:'Relies on memory. Asks WhatsApp groups. Googles "vet near me" when things go wrong. Hopes nothing bad happens.'},
                  ].map(c=>(
                    <div key={c.l} className="hc-empathy-cell" style={{background:c.bg}}>
                      <span className="hc-empathy-label">{c.l}</span>
                      <p className="hc-body" style={{fontSize:"0.88rem",color:"var(--hc-charcoal)"}}>{c.t}</p>
                    </div>
                  ))}
                </div>
                <div className="hc-sticky" style={{position:"absolute",bottom:"-28px",right:"-8px",transform:"rotate(2deg)"}}>
                  &ldquo;She doesn&rsquo;t forget because she doesn&rsquo;t care — she forgets because no system reminds her.&rdquo;
                </div>
              </div>
            </div>
            <div style={{paddingTop:"72px"}}>
              <div className="hc-frame hc-frame-tilt-r" style={{marginBottom:"20px"}}>
                <Image src="/hifazat/small-dog.jpg" alt="Small white dog" width={260} height={320} style={{width:"100%",height:"auto",display:"block"}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider bg="on-alt" />

      {/* ═══ HMW ═══ */}
      <section className="hc-section-sm">
        <div className="hc-container">
          <div className="hc-section-header">
            <div className="hc-counter">05</div>
            <span className="hc-eyebrow">How Might We</span>
            <h2 className="hc-h2">Turning problems into questions.</h2>
          </div>
          <div className="hc-hmw-grid">
            {[
              {q:"HMW make an animal's identity readable by any stranger in seconds — no app needed?",bg:"var(--hc-green-light)"},
              {q:"HMW send vaccination reminders through channels people already open every day?",bg:"var(--hc-peach-light)"},
              {q:"HMW make registration simple enough for a farmer managing 40+ animals?",bg:"var(--hc-yellow-light)"},
            ].map((item,i)=>(
              <div key={i} className="hc-hmw-card" style={{background:item.bg}}>
                <span className="hc-badge hc-badge-green" style={{marginBottom:"14px",display:"inline-block"}}>HMW</span>
                <p className="hc-body" style={{fontWeight:500,color:"var(--hc-black)"}}>{item.q}</p>
              </div>
            ))}
          </div>
          <div className="hc-hmw-row2">
            {[
              {q:"HMW give vets patient history before the animal even walks in?",bg:"var(--hc-cream)"},
              {q:"HMW make HifazatCard feel official enough to trust in an emergency?",bg:"var(--hc-yellow-light)"},
            ].map((item,i)=>(
              <div key={i} className="hc-hmw-card" style={{background:item.bg}}>
                <span className="hc-badge hc-badge-green" style={{marginBottom:"14px",display:"inline-block"}}>HMW</span>
                <p className="hc-body" style={{fontWeight:500,color:"var(--hc-black)"}}>{item.q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider bg="on-white" />

      {/* ═══ SOLUTION ═══ */}
      <section id="solution" className="hc-section-sm hc-section-alt">
        <div className="hc-container">
          <div className="hc-section-header">
            <div className="hc-counter">06</div>
            <span className="hc-eyebrow">The Solution</span>
            <h2 className="hc-h2">What HifazatCard does.</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 0.55fr",gap:"48px",alignItems:"start"}}>
            <div className="hc-feature-list">
              {[
                ["01","QR Identity Card","Scanned by any phone. No app. No friction. Any stranger can identify the pet in seconds."],
                ["02","Digital Animal Profile","Photo, breed, age, owner contact. Emergency-ready in under five seconds."],
                ["03","Vaccination History","Chronological, filterable records — updated by owner or verified vet."],
                ["04","WhatsApp + SMS Reminders","Fires 14 days before each due date. Uses channels people already open every day."],
                ["05","Clinic Dashboard","Vets manage all registered patients in one place. No paper, no manual tracking."],
                ["06","JazzCash + EasyPaisa","Payments built for Pakistan — not borrowed from somewhere else."],
              ].map(([num,name,desc])=>(
                <div key={name} className="hc-feature-item">
                  <div><span className="hc-feature-num">{num}</span><div className="hc-feature-name">{name}</div></div>
                  <p className="hc-body">{desc}</p>
                </div>
              ))}
            </div>
            <div style={{position:"sticky",top:"90px",display:"flex",flexDirection:"column",gap:"20px"}}>
              <div className="hc-frame hc-frame-tilt-l">
                <Image src="/hifazat/golden-puppy.jpg" alt="Golden puppy" width={300} height={300} style={{width:"100%",height:"auto",display:"block"}} />
              </div>
              <div className="hc-frame hc-frame-tilt-r">
                <Image src="/hifazat/baby-goat.jpg" alt="Baby goat" width={300} height={370} style={{width:"100%",height:"auto",display:"block"}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider bg="on-alt" />

      {/* ═══ WIREFRAME ═══ */}
      <section id="wireframe" className="hc-section-sm">
        <div className="hc-container">
          <div className="hc-section-header">
            <div className="hc-counter">07</div>
            <span className="hc-eyebrow">Wireframe</span>
            <h2 className="hc-h2">First sketch, first decision.</h2>
          </div>
          <div className="hc-wireframe-wrap" style={{marginBottom:"32px"}}>
            <Image src="/hifazat/wireframe.jpg" alt="Hand-drawn wireframe of the HifazatCard QR public profile page" width={1000} height={750} style={{width:"100%",height:"auto",display:"block"}} />
          </div>
          <div className="hc-pullquote" style={{maxWidth:"720px"}}>
            &ldquo;The first wireframe was the first design decision: identity at the top, owner contact second, medical records below. A stranger in the street needs to know what to do in under ten seconds.&rdquo;
          </div>
        </div>
      </section>

      <Divider bg="on-white" />

      {/* ═══ DESIGN DIRECTION ═══ */}
      <section className="hc-section-sm hc-section-alt">
        <div className="hc-container">
          <div className="hc-section-header">
            <div className="hc-counter">08</div>
            <span className="hc-eyebrow">Design Direction</span>
            <h2 className="hc-h2">Three principles, one goal.</h2>
          </div>
          <div className="hc-principle-grid">
            {[
              {icon:"shield",bg:"var(--hc-green-light)",title:"Hierarchy First",desc:"Emergency info leads. Everything else follows. The QR scan page was designed so a stranger can identify the pet, find the owner, and call them — in that order. No scrolling required."},
              {icon:"phone", bg:"var(--hc-peach-light)",title:"No App Required",desc:"One less barrier between a lost pet and its owner. The finder scans a QR code and sees everything instantly in the browser. Zero downloads, zero sign-ups."},
              {icon:"globe", bg:"var(--hc-yellow-light)",title:"Urdu-Ready",desc:"Designed for Pakistan, not translated for it. Every label, every notification, every reminder — built to work natively in Urdu from day one, with RTL layout considered."},
            ].map(d=>(
              <div key={d.title} className="hc-principle-card" style={{background:d.bg}}>
                <div className="hc-principle-icon">
                  {d.icon==="shield" && <Shield s={20} c="#fff"/>}
                  {d.icon==="phone"  && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="18" r="1" fill="#fff"/></svg>}
                  {d.icon==="globe"  && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/></svg>}
                </div>
                <h3 className="hc-h3">{d.title}</h3>
                <p className="hc-body-sm" style={{color:"var(--hc-charcoal)"}}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA CLOSE ═══ */}
      <div className="hc-cta">
        <p className="hc-cta-text">Research done. Problem defined. Users understood.</p>
        <p className="hc-cta-text" style={{color:"var(--hc-green-mid)",marginTop:"8px"}}>
          The interface is coming<span className="hc-blink">|</span>
        </p>
        <a href="/#case-studies" className="hc-btn hc-btn-yellow" style={{marginTop:"32px"}}>
          ← Back to Portfolio
        </a>
      </div>

      {/* FOOTER */}
      <footer style={{background:"var(--hc-bg)",borderTop:"2px solid var(--hc-black)",padding:"28px"}}>
        <div className="hc-container" style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px"}}>
          <div style={{display:"flex",alignItems:"center",gap:"8px",fontFamily:"var(--hc-display)",fontWeight:800,fontSize:"0.9rem"}}>
            <Shield s={18}/> HifazatCard
          </div>
          <p style={{fontFamily:"var(--hc-body)",fontSize:"0.82rem",color:"var(--hc-gray)"}}>
            Designed by <strong style={{color:"var(--hc-black)"}}>Kaynat Tahir</strong> — UI/UX Designer
          </p>
          <div style={{display:"flex",gap:"16px"}}>
            <a href="/#contact" style={{color:"var(--hc-black)"}} aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8l9 6 9-6M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/></svg>
            </a>
            <a href="/#contact" style={{color:"var(--hc-black)"}} aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
