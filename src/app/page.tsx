import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  description:
    "Bespoke barcode, RFID, wireless, and digital signage technology for warehouses, retail, and logistics operations across Australia.",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero hero-backdrop-section">
        <div className="hero-backdrop-image">
          <Image
            src="/images/home-banner.png"
            alt="LogiQ-On Supply Chain and Warehouse Technology Showcase"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div className="hero-backdrop-overlay" style={{ background: "linear-gradient(90deg, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.75) 50%, rgba(15, 23, 42, 0.4) 100%)" }} />
        </div>

        <div className="container hero-backdrop-content">
          <span className="eyebrow" style={{ color: "var(--brand-primary, #0ce3fb)" }}>Australian Supply Chain Tech &middot; Since 2020</span>
          <h1 style={{ color: "#ffffff" }}>
            Give your warehouse
            <br />a faster reflex.
          </h1>
          <p className="lede" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
            LogiQ-On sources, installs, and supports the barcode, RFID, wireless, and digital signage systems that
            turn slow, paper-heavy operations into ones that scan, track, and despatch in real time.
          </p>
          <div className="hero-cta">
            <Link href="/login" className="btn btn-primary btn-lg">Get Started</Link>
            <Link href="/request?type=quote" className="btn btn-ghost btn-lg" style={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.4)" }}>Request a Quote</Link>
          </div>
        </div>

        <div className="hero-stats-banner">
          <div className="container hero-stats">
            <div>
              <div className="stat-num">2020</div>
              <div className="stat-label">Founded in Australia</div>
            </div>
            <div>
              <div className="stat-num">AU-Wide</div>
              <div className="stat-label">Site surveys &amp; install</div>
            </div>
            <div>
              <div className="stat-num">HW + SW</div>
              <div className="stat-label">One accountable partner</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED BANNER IMAGE SHOWCASE */}
      <section className="section" style={{ padding: "40px 0 0 0" }}>
        <div className="container">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 480,
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
              border: "1px solid var(--border-color, rgba(255,255,255,0.1))",
            }}
          >
            <Image
              src="/images/home-banner.png"
              alt="LogiQ-On Modern Warehouse Technology & Hardware Platform"
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.2) 60%, transparent 100%)",
                display: "flex",
                alignItems: "flex-end",
                padding: "36px 40px",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    padding: "4px 12px",
                    borderRadius: 20,
                    background: "rgba(12, 227, 251, 0.2)",
                    color: "#0ce3fb",
                    border: "1px solid rgba(12, 227, 251, 0.4)",
                    display: "inline-block",
                    marginBottom: 10,
                  }}
                >
                  Next-Gen Supply Chain Platform
                </span>
                <h3 style={{ fontSize: 28, color: "#ffffff", marginBottom: 6 }}>
                  Integrated Mobile Computing, RFID &amp; Label Printing Systems
                </h3>
                <p style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: 15, margin: 0, maxWidth: 640 }}>
                  Deploy robust, floor-proven hardware engineered for Australian logistics, retail, and manufacturing operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY STRIP */}
      <section style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", marginTop: 50 }}>
        <div className="container logo-strip">
          <span className="wordmark">Warehousing &amp; 3PL</span>
          <span className="wordmark">Retail &amp; ESL</span>
          <span className="wordmark">Manufacturing</span>
          <span className="wordmark">Cold Chain</span>
          <span className="wordmark">Healthcare</span>
          <span className="wordmark">Transport</span>
        </div>
      </section>

      {/* SOLUTIONS OVERVIEW */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we deploy</span>
            <h2>Hardware, software, and the wireless backbone in between.</h2>
            <p className="lede">
              Four categories cover most rollouts. Every one of them is designed around your floor plan, not a
              catalogue template.
            </p>
          </div>
          <div className="grid grid-4">
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="6" width="16" height="12" rx="2" /><path d="M8 10v4M11 10v4M14 10v4M17 10v4" /></svg>
              </div>
              <span className="tag">Capture</span>
              <h3>Mobile Computing &amp; Scanning</h3>
              <p>Rugged handhelds, wearables, and vehicle-mount computers built for the floor, not the office.</p>
              <Link href="/products" className="card-link">
                Explore products <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8c2-2 14-2 16 0M4 12c2-2 14-2 16 0M4 16c2-2 14-2 16 0" /></svg>
              </div>
              <span className="tag">Identify</span>
              <h3>RFID &amp; Barcode Infrastructure</h3>
              <p>Fixed and mobile RFID, printers, tags, and antennas for item-level visibility end to end.</p>
              <Link href="/products?tab=solutions" className="card-link">
                See solutions <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 1 0-8-8" /><path d="M12 20v-8l5-3" /></svg>
              </div>
              <span className="tag">Connect</span>
              <h3>Wireless Site Design</h3>
              <p>Site surveys and wireless infrastructure engineered for concrete, racking, and interference.</p>
              <Link href="/products?tab=solutions" className="card-link">
                See solutions <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="4" width="14" height="16" rx="2" /><path d="M9 20h6" /></svg>
              </div>
              <span className="tag">Display</span>
              <h3>Digital Signage &amp; ESL</h3>
              <p>Electronic shelf labels and digital signage that refresh pricing instantly, storewide.</p>
              <Link href="/products?tab=retail" className="card-link">
                Retail Stores <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SPLIT / VALUE PROPS */}
      <section className="section tint">
        <div className="container split">
          <div>
            <span className="eyebrow">How we work</span>
            <h2>Built around your floor, not a demo floor.</h2>
            <p className="lede" style={{ marginTop: 14 }}>
              Legacy systems keep businesses running, but they weren&apos;t built for on-demand despatch and
              real-time tracking. We fit new capability around what you already have.
            </p>
            <ul className="checklist">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> On-site discovery before any hardware is proposed</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> One vendor for hardware, software, and wireless</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> Staff training included in every rollout</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> Ongoing support once the trucks start leaving on time</li>
            </ul>
          </div>
          <div className="split-visual scan-panel" style={{ padding: 32, minHeight: 300, display: "flex", alignItems: "flex-end", position: "relative", overflow: "hidden", borderRadius: 16 }}>
            <Image
              src="/images/home-banner.png"
              alt="Warehouse discovery and wireless site survey"
              fill
              sizes="(max-width: 880px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.7) 60%, rgba(15, 23, 42, 0.3) 100%)" }} />
            <div style={{ position: "relative", zIndex: 2, color: "#ffffff" }}>
              <span className="pill" style={{ background: "rgba(12, 227, 251, 0.2)", color: "#0ce3fb", border: "1px solid rgba(12, 227, 251, 0.4)" }}>
                DISCOVERY &rarr; DESIGN &rarr; DEPLOY &rarr; SUPPORT
              </span>
              <p style={{ marginTop: 14, color: "#ffffff", fontSize: 14.5, fontWeight: 500 }}>
                A single engagement model, whether we&apos;re adding wireless coverage to one dock or re-platforming
                an entire distribution centre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES PREVIEW */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Who we equip</span>
            <h2>Industries that can&apos;t afford a dropped scan.</h2>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <span className="tag">3PL</span>
              <h3>Warehousing &amp; Distribution</h3>
              <p>Receiving, picking, and dispatch systems that keep pace with same-day SLAs.</p>
            </div>
            <div className="card">
              <span className="tag">Storefront</span>
              <h3>Retail</h3>
              <p>ESL, RFID, and digital signage that cut price-change labour to minutes.</p>
            </div>
            <div className="card">
              <span className="tag">Production</span>
              <h3>Manufacturing</h3>
              <p>Line-side data capture and asset tracking across the plant floor.</p>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: 36 }}>
            <Link href="/products?tab=industries" className="btn btn-ghost">View all industries</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-banner">
            <div>
              <h2>See it running on your own SKUs.</h2>
              <p>
                Bring a floor plan and a stock list to a discovery session &mdash; we&apos;ll show you exactly where
                scanning, RFID, or wireless upgrades pay for themselves.
              </p>
            </div>
            <div className="cta-actions">
              <Link href="/login" className="btn btn-primary">Get Started</Link>
              <Link href="/contact" className="btn btn-ghost">Talk to the Team</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
