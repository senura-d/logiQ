import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import HeroArt from "@/components/HeroArt";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Talk to the LogiQ-On team about barcode, RFID, wireless, and retail technology for your operation.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Contact Us</span>
            <h1>Talk to the friendly team at LogiQ-On.</h1>
            <p className="lede">
              Ask a question, book a site survey, or start scoping a discovery session — a real person picks this up,
              not a queue.
            </p>
          </div>
          <HeroArt variant="contact" className="page-hero-art" />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <ContactForm />

          <div>
            <span className="eyebrow">Reach us directly</span>
            <h2 style={{ marginTop: 14 }}>Prefer to call or email?</h2>
            <div style={{ marginTop: 28, display: "grid", gap: 20 }}>
              <div className="card" style={{ padding: 22 }}>
                <span className="tag">Phone</span>
                <h3 style={{ fontSize: 17 }}>1300 717 433</h3>
                <p>03 9448 8011</p>
              </div>
              <div className="card" style={{ padding: 22 }}>
                <span className="tag">Email</span>
                <h3 style={{ fontSize: 17 }}>info@logiqon.com.au</h3>
                <p>We aim to respond within one business day.</p>
              </div>
              <div className="card" style={{ padding: 22 }}>
                <span className="tag">Office</span>
                <h3 style={{ fontSize: 17 }}>Melbourne, Victoria</h3>
                <p>Site visits available across Australia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
