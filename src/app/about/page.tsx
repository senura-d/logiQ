import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PARTNER_LOGOS } from "@/lib/data/partners";
import GsapSection from "@/components/GsapSection";
import PageHero from "@/components/site/PageHero";
import SectionIntro from "@/components/site/SectionIntro";
import { TextAnimate } from "@/components/ui/text-animate";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Since 2020, LogiQ-On has sourced, installed, and supported barcode, RFID, wireless, and signage technology for Australian supply chains.",
};

const VALUES = [
  {
    title: "Accountability",
    desc: "One partner for hardware, software, and wireless — not three vendors pointing at each other.",
    icon: "verified_user",
    tag: "Single Owner",
  },
  {
    title: "Client-Led Delivery",
    desc: "Your team defines the vision for the operation; we deliver the technology behind it, on your floor plan.",
    icon: "handshake",
    tag: "Your Floor Plan",
  },
  {
    title: "Built to Last",
    desc: "We design for the next five years of volume, not just the go-live date.",
    icon: "verified",
    tag: "Five Year Horizon",
  },
];

const PROCESS = [
  {
    num: "01",
    tag: "Discovery",
    title: "Walk the floor",
    desc: "We map current process, pain points, and infrastructure before proposing anything.",
    icon: "explore",
  },
  {
    num: "02",
    tag: "Design",
    title: "Specify the system",
    desc: "Hardware, software, and wireless coverage designed around your actual layout.",
    icon: "architecture",
  },
  {
    num: "03",
    tag: "Deploy",
    title: "Install & train",
    desc: "Supply, installation, and staff training delivered as one coordinated rollout.",
    icon: "construction",
  },
  {
    num: "04",
    tag: "Support",
    title: "Stay on call",
    desc: "Ongoing maintenance and support once the system is live in production.",
    icon: "support_agent",
  },
];

const STATS = [
  { value: "2020", label: "Founded", icon: "flag" },
  { value: "AU", label: "Wide Coverage", icon: "public" },
  { value: "1", label: "Accountable Partner", icon: "handshake" },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About LogiQ-On"
        title={
          <>
            Driving Peak Performance,
            <br />
            Built By People Who Stood On The Floor
          </>
        }
        lede="We're a Melbourne-founded team that's spent since 2020 sourcing, installing, and supporting the barcode, RFID, wireless, and signage technology that keeps Australian warehouses, retailers, and logistics operators moving."
        image="/images/pexels/home-warehouse-aisle.jpg"
        imageAlt="LogiQ-On warehouse operations and automated supply chain infrastructure"
        primary={{ label: "Request Demo", href: "/request-demo" }}
        secondary={{ label: "Talk to the Team", href: "/contact" }}
      />

      <GsapSection id="mission" className="bg-surface" fullScreen>
        <div className="container mx-auto px-margin-desktop flex flex-col items-center justify-center text-center">
          <SectionIntro
            eyebrow="Our Mission"
            title="Supply chains you can actually trust."
            lede="To empower Australian supply chains through real-time automation, removing the friction and operational blind spots that make it hard to trust what's actually happening on the floor."
          />
        </div>
      </GsapSection>

      <GsapSection id="mission-stats" className="bg-white py-14 border-y border-slate-200" fullScreen={false}>
        <div className="container mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="gsap-animate rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4 text-slate-900">
                  <span className="material-symbols-outlined text-[24px] text-slate-900">{stat.icon}</span>
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-none">
                  {stat.value}
                </div>
                <div className="text-[11px] font-bold text-slate-700 uppercase tracking-widest mt-4">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </GsapSection>

      <GsapSection id="values-header" className="bg-surface" fullScreen>
        <div className="container mx-auto px-margin-desktop flex flex-col items-center justify-center text-center">
          <SectionIntro
            eyebrow="What guides us"
            title="Core Values"
            lede="Three commitments that shape every survey, every install, and every support call we take."
          />
        </div>
      </GsapSection>

      <GsapSection id="values-cards" className="bg-surface border-t border-slate-100" fullScreen scrub={false} start="top 92%" stagger={0.06} duration={0.45}>
        <div className="container mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="gsap-animate group flex flex-col bg-white border border-slate-200 rounded-2xl p-7 hover:border-slate-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-7">
                  <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl text-white">{v.icon}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 text-[10px] font-bold uppercase tracking-wider">
                    {v.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-950 leading-snug mb-3">{v.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </GsapSection>

      <GsapSection id="process" className="bg-surface-container-low border-y border-outline-variant/30" fullScreen>
        <div className="container mx-auto px-margin-desktop">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="gsap-animate">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 mb-3 tracking-tight">
                Engagement Model
              </h2>
              <p className="text-base text-slate-600">
                One process, whether it&apos;s one dock door or a whole distribution centre.
              </p>
            </div>
            <Link
              href="/contact"
              className="gsap-animate flex items-center gap-2 text-sm font-bold text-slate-950 hover:text-indigo-600 transition-colors"
            >
              Start a Discovery Session <span className="material-symbols-outlined text-base">arrow_outward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((step) => (
              <div
                key={step.num}
                className="gsap-animate group flex flex-col bg-white border border-slate-200 rounded-2xl p-7 hover:border-slate-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-7">
                  <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl text-white">{step.icon}</span>
                  </div>
                  <span className="text-3xl font-extrabold text-slate-200 leading-none tracking-tight">{step.num}</span>
                </div>
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest block mb-2">
                  {step.tag}
                </span>
                <h3 className="text-lg font-bold text-slate-950 leading-snug mb-2.5">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </GsapSection>

      <GsapSection id="partners" className="bg-surface" fullScreen>
        <div className="container mx-auto px-margin-desktop">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <SectionIntro
              eyebrow="Partners"
              title="Backed by the hardware makers who set the standard."
              lede="We stay vendor-agnostic on purpose — our network spans the categories that matter, so the recommendation you get is about fit, not backroom deals."
              ledeWidth="3xl"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {PARTNER_LOGOS.map((partner) => (
              <div
                key={partner.file}
                className="gsap-animate bg-white border border-outline-variant rounded-xl h-24 flex items-center justify-center p-4 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 hover:border-primary/40 transition-all"
              >
                <Image
                  src={`/images/partners/${partner.file}`}
                  alt={partner.name}
                  width={120}
                  height={48}
                  style={{ width: "auto", height: "auto", maxHeight: 40, maxWidth: "100%" }}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10 gsap-animate">
            <Link href="/partners" className="flex items-center gap-2 text-primary font-label-md hover:underline w-fit mx-auto">
              View all {PARTNER_LOGOS.length} partners <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </GsapSection>

      <GsapSection id="about-cta" className="bg-surface border-t border-slate-100" fullScreen>
        <div className="container mx-auto px-margin-desktop max-w-3xl text-center flex flex-col items-center justify-center">
          <TextAnimate
            by="word"
            animation="wavy"
            as="h2"
            startOnView
            once={false}
            duration={0.3}
            className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-6 text-center tracking-tight leading-tight"
          >
            Discover how LogiQ-On can improve your operation.
          </TextAnimate>
          <TextAnimate
            by="word"
            animation="wavy"
            as="p"
            startOnView
            once={false}
            delay={0.05}
            duration={0.35}
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto text-center font-normal mt-4 mb-10 block"
          >
            Bring a floor plan and a stock list to a discovery session — we&apos;ll show you exactly where scanning, RFID, or wireless upgrades pay for themselves.
          </TextAnimate>
          <Link
            href="/contact"
            className="gsap-animate inline-block bg-slate-950 hover:bg-slate-800 text-white font-bold text-base px-9 py-4 rounded-full shadow-md transition-all duration-300 hover:scale-105 mt-12"
            style={{ color: "#ffffff" }}
          >
            Contact Us
          </Link>
        </div>
      </GsapSection>
    </div>
  );
}
