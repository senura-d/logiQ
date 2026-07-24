import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroArt from "@/components/HeroArt";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Since 2020, LogiQ-On has sourced, installed, and supported barcode, RFID, wireless, and signage technology for Australian supply chains.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">About LogiQ-On</span>
            <h1>Supply chain technology, built by people who&apos;ve stood on the floor.</h1>
            <p className="lede">
              We&apos;re a Melbourne-founded team that&apos;s spent since 2020 sourcing, installing, and supporting
              the hardware and software that keep Australian warehouses, retailers, and logistics operators moving.
            </p>
          </div>
          <HeroArt variant="about" className="page-hero-art" />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Why we started</span>
            <h2>Legacy systems age quietly, until customers stop being quiet about it.</h2>
            <p className="lede" style={{ marginTop: 14 }}>
              Entrenched processes can serve a business well for years — until real-time tracking, instant despatch,
              and on-demand logistics become the baseline customers expect. LogiQ-On exists for the businesses that
              decide not to be the ones left behind.
            </p>
            <p className="lede" style={{ marginTop: 14 }}>
              We work across every level of an operation, from executives setting strategy to the floor staff
              scanning cartons, because a rollout only succeeds if both ends of that chain trust it.
            </p>
          </div>
          <div className="scan-panel" style={{ padding: 32, minHeight: 320, display: "flex", alignItems: "flex-end", position: "relative", overflow: "hidden" }}>
            <Image
              src="https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Warehouse technology and logistics operations"
              fill
              sizes="(max-width: 880px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.75) 60%, rgba(255, 255, 255, 0.4) 100%)" }} />
            <div style={{ position: "relative", zIndex: 2 }}>
              <span className="pill">SINCE 2020</span>
              <p style={{ marginTop: 14, color: "var(--ink)", fontSize: 15, fontWeight: 500 }}>
                Sourcing and supplying hardware, software, and wireless solutions for logistics-based businesses
                across Australia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How we think</span>
            <h2>Four principles that shape every rollout.</h2>
          </div>
          <div className="grid grid-4">
            <div className="card">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7z" /></svg></div>
              <h3>Accountability</h3>
              <p>One partner for hardware, software, and wireless — not three vendors pointing at each other.</p>
            </div>
            <div className="card">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></svg></div>
              <h3>Longevity</h3>
              <p>We design for the next five years of volume, not just the go-live date.</p>
            </div>
            <div className="card">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 20h-10a2 2 0 0 1 -2 -2v-1a4 4 0 0 1 4 -4h6a4 4 0 0 1 4 4v1a2 2 0 0 1 -2 2z" /><circle cx="12" cy="7" r="4" /></svg></div>
              <h3>Client-led</h3>
              <p>Your team defines the vision for the operation; we deliver the technology behind it.</p>
            </div>
            <div className="card">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18" /></svg></div>
              <h3>Craftsmanship</h3>
              <p>Site surveys and floor plans come before any hardware gets specified.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Engagement model</span>
            <h2>One process, whether it&apos;s one dock door or a whole DC.</h2>
          </div>
          <div className="grid grid-4">
            <div className="card">
              <span className="tag">01 · Discovery</span>
              <h3>Walk the floor</h3>
              <p>We map current process, pain points, and infrastructure before proposing anything.</p>
            </div>
            <div className="card">
              <span className="tag">02 · Design</span>
              <h3>Specify the system</h3>
              <p>Hardware, software, and wireless coverage designed around your actual layout.</p>
            </div>
            <div className="card">
              <span className="tag">03 · Deploy</span>
              <h3>Install &amp; train</h3>
              <p>Supply, installation, and staff training delivered as one coordinated rollout.</p>
            </div>
            <div className="card">
              <span className="tag">04 · Support</span>
              <h3>Stay on call</h3>
              <p>Ongoing maintenance and support once the system is live in production.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section tint" id="partners">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Partners</span>
            <h2>Backed by the hardware makers who set the standard.</h2>
            <p className="lede">
              We stay vendor-agnostic on purpose — our partner network spans the categories that matter, so the
              recommendation you get is about fit, not backroom deals.
            </p>
          </div>
          <div className="grid grid-3">
            <div className="card text-center">
              <div className="card-icon" style={{ marginInline: "auto" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="6" width="16" height="12" rx="2" /><path d="M8 10v4M12 10v4M16 10v4" /></svg></div>
              <h3>Enterprise Hardware</h3>
              <p>Rugged mobile computers and scanning devices built for continuous industrial use.</p>
            </div>
            <div className="card text-center">
              <div className="card-icon" style={{ marginInline: "auto" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8c2-2 14-2 16 0M4 12c2-2 14-2 16 0M4 16c2-2 14-2 16 0" /></svg></div>
              <h3>RFID Technology</h3>
              <p>Fixed and mobile RFID readers, antennas, and tags for item-level accuracy.</p>
            </div>
            <div className="card text-center">
              <div className="card-icon" style={{ marginInline: "auto" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="4" width="14" height="16" rx="2" /><path d="M9 20h6" /></svg></div>
              <h3>Electronic Shelf Labels</h3>
              <p>Retail ESL platforms for instant, storewide pricing and promotions.</p>
            </div>
            <div className="card text-center">
              <div className="card-icon" style={{ marginInline: "auto" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 1 0-8-8" /><path d="M12 20v-8l5-3" /></svg></div>
              <h3>Wireless Infrastructure</h3>
              <p>Enterprise-grade wireless networking hardware for demanding warehouse RF environments.</p>
            </div>
            <div className="card text-center">
              <div className="card-icon" style={{ marginInline: "auto" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="9" width="18" height="10" rx="1" /><path d="M7 9V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" /></svg></div>
              <h3>Automated Retail</h3>
              <p>Smart-store and automated fulfilment platforms for high-footfall retail formats.</p>
            </div>
            <div className="card text-center">
              <div className="card-icon" style={{ marginInline: "auto" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 17V7a2 2 0 0 1 2-2h8l6 6v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" /></svg></div>
              <h3>Software Integration</h3>
              <p>Inventory, stock-taking, and ERP integration partners for the systems layer.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Become a partner</span>
            <h2>Manufacturers trust us to get their hardware right the first time.</h2>
            <p className="lede" style={{ marginTop: 14 }}>
              If you build barcode, RFID, wireless, or display hardware, our Vendor Portal gives you a direct line
              into Australian warehouse, retail, and logistics deployments — with compliance, orders, and reporting
              in one place.
            </p>
            <div className="hero-cta">
              <Link href="/login?as=vendor" className="btn btn-primary">Vendor Login</Link>
              <Link href="/contact" className="btn btn-ghost">Enquire About Partnering</Link>
            </div>
          </div>
          <div className="split-visual scan-panel" style={{ padding: 28, minHeight: 240, display: "flex", alignItems: "center" }}>
            <div>
              <span className="pill">VENDOR PORTAL</span>
              <p style={{ marginTop: 14, color: "var(--ink-soft)", fontSize: 14.5 }}>
                Company profile, product management, orders, compliance, and reporting — self-serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-banner">
            <div>
              <h2>Can your business afford to be left behind?</h2>
              <p>Talk to the team about where a scanning, RFID, or wireless upgrade would pay off first.</p>
            </div>
            <div className="cta-actions">
              <Link href="/request?type=demo" className="btn btn-primary">Request a Demo</Link>
              <Link href="/contact" className="btn btn-ghost">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
