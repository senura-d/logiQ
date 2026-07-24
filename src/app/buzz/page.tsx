import type { Metadata } from "next";
import Link from "next/link";
import HeroArt from "@/components/HeroArt";

export const metadata: Metadata = {
  title: "LogiQ-On Buzz",
  description:
    "Notes from LogiQ-On on barcode, RFID, wireless, and retail technology trends across Australian supply chains.",
};

export default function BuzzPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">LogiQ-On Buzz</span>
            <h1>Notes from the floor, the field, and the warehouse.</h1>
            <p className="lede">
              Product updates, deployment notes, and the occasional opinion on where supply chain technology is
              heading next.
            </p>
          </div>
          <HeroArt variant="buzz" className="page-hero-art" />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          <div className="card" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, padding: 32 }}>
            <div className="thumb" style={{ height: "100%", minHeight: 220, marginBottom: 0 }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8c2-2 14-2 16 0M4 12c2-2 14-2 16 0M4 16c2-2 14-2 16 0" /></svg>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div className="post-meta"><span>Featured</span><span className="dot" /><span>Jul 2026</span><span className="dot" /><span>RFID</span></div>
              <h2 style={{ fontSize: 26 }}>Why item-level RFID is finally paying for itself in Australian retail</h2>
              <p className="lede" style={{ marginTop: 12 }}>
                Tag costs have dropped enough that stocktake and loss-prevention gains alone justify a rollout —
                before shelf-availability upside is even counted.
              </p>
              <Link href="#" className="card-link" style={{ marginTop: 18 }}>
                Read the full note <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="container">
          <div className="grid grid-3">
            <div className="card post-card">
              <div className="thumb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="6" width="16" height="12" rx="2" /><path d="M8 10v4M12 10v4M16 10v4" /></svg></div>
              <div className="post-meta"><span>Hardware</span><span className="dot" /><span>Jun 2026</span></div>
              <h3>Choosing between handheld and wearable scanners for pick-heavy sites</h3>
              <p>A field comparison from three recent distribution centre rollouts.</p>
              <Link href="#" className="card-link">Read more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
            </div>

            <div className="card post-card">
              <div className="thumb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 1 0-8-8" /><path d="M12 20v-8l5-3" /></svg></div>
              <div className="post-meta"><span>Wireless</span><span className="dot" /><span>Jun 2026</span></div>
              <h3>What a proper wireless site survey actually checks for</h3>
              <p>Racking height, dock doors, and metal shelving all change the answer.</p>
              <Link href="#" className="card-link">Read more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
            </div>

            <div className="card post-card">
              <div className="thumb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="4" width="14" height="16" rx="2" /><path d="M9 20h6" /></svg></div>
              <div className="post-meta"><span>Retail</span><span className="dot" /><span>May 2026</span></div>
              <h3>The real labour saving behind Electronic Shelf Labels</h3>
              <p>It&apos;s not the price changes — it&apos;s the compliance audits that disappear.</p>
              <Link href="#" className="card-link">Read more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
            </div>

            <div className="card post-card">
              <div className="thumb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="10" rx="1" /><path d="M7 17v2M15 17v2M3 11h18" /></svg></div>
              <div className="post-meta"><span>Software</span><span className="dot" /><span>May 2026</span></div>
              <h3>Stock-taking software is only as good as its exception handling</h3>
              <p>What happens when a scan doesn&apos;t match the system matters more than the scan itself.</p>
              <Link href="#" className="card-link">Read more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
            </div>

            <div className="card post-card">
              <div className="thumb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></svg></div>
              <div className="post-meta"><span>Company</span><span className="dot" /><span>Apr 2026</span></div>
              <h3>Inside a LogiQ-On discovery session</h3>
              <p>What we actually measure before a single device gets specified.</p>
              <Link href="#" className="card-link">Read more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
            </div>

            <div className="card post-card">
              <div className="thumb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h2M4 12h2M4 18h2M9 6h1M9 12h1M9 18h1M13 6h2M13 12h2M13 18h2" /></svg></div>
              <div className="post-meta"><span>RFID</span><span className="dot" /><span>Apr 2026</span></div>
              <h3>BLE RTLS vs RFID: picking the right tracking technology</h3>
              <p>They solve different problems — here&apos;s how to tell which one you have.</p>
              <Link href="#" className="card-link">Read more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-banner">
            <div>
              <h2>Want these notes in your inbox?</h2>
              <p>Get product updates and field notes from LogiQ-On, sent occasionally, never spammy.</p>
            </div>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-primary">Subscribe via Contact</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
