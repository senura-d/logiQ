import Image from "next/image";
import Link from "next/link";
import GsapSection from "@/components/GsapSection";
import SectionIntro from "@/components/site/SectionIntro";
import { getAssetPath } from "@/lib/nav";

/**
 * One engagement, four accountable owners. No individuals are named in the
 * repo yet — `person` is intentionally left unset. Fill it in per entry and the
 * card swaps the icon tile for a headshot and prints the name under the role;
 * nothing else in this section has to change.
 */
type EngagementRole = {
  stage: string;
  role: string;
  owns: string;
  desc: string;
  icon: string;
  proof: string[];
  person?: { name: string; title: string; photo: string };
};

const ENGAGEMENT_TEAM: EngagementRole[] = [
  {
    stage: "Before you sign",
    role: "Client Account Lead",
    icon: "handshake",
    owns: "Scope, pricing, and every commitment made to you in writing.",
    desc: "Your single accountable contact. They hold the commercial picture across hardware, software, and wireless, so you never re-explain your operation to a new face or chase three vendors for one answer.",
    proof: ["One escalation path, not a queue", "Same contact from quote to renewal"],
  },
  {
    stage: "On your floor",
    role: "Technical Consultant",
    icon: "architecture",
    owns: "The site survey, the RF and hardware design, and the spec you sign off.",
    desc: "The person who walks your aisles, docks, and cold rooms before anything is quoted. They turn what they see into a specification you can challenge line by line — coverage, density, mounting, failure points.",
    proof: ["Surveys the site before specifying", "Design decisions explained, not asserted"],
  },
  {
    stage: "Through rollout",
    role: "Delivery Lead",
    icon: "construction",
    owns: "Install sequencing, staff training, and the go-live cutover.",
    desc: "They run the rollout against your operating hours: what gets installed when, which shift gets trained, and what the fallback is if a dock door has to stay live. The design that was specified is the system that gets delivered.",
    proof: ["Cutover planned around your shifts", "Training delivered on your own devices"],
  },
  {
    stage: "After go-live",
    role: "Support Manager",
    icon: "support_agent",
    owns: "Response times, spares, firmware, and the system&apos;s next five years.",
    desc: "Once the site is in production they hold the service relationship: logged faults, replacement units, firmware currency, and the periodic review that catches a capacity problem before your volume does.",
    proof: ["A named owner for every logged fault", "Reviews capacity as volume grows"],
  },
];

const CONTINUITY_GUARANTEES = [
  "One accountable owner at every stage",
  "Context carried across each hand-off",
  "The same team answers after go-live",
];

export default function MgmtTypecheck() {
  return (
    <>
      <GsapSection
        id="management"
        className="bg-surface"
        fullScreen
        scrub={false}
        start="top 92%"
        stagger={0.06}
        duration={0.45}
      >
        <div className="container mx-auto px-margin-desktop">
          {/* ---- Section header -------------------------------------------------- */}
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="gsap-animate max-w-2xl">
              <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest block mb-2">
                Management and Consultants
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 mb-3 tracking-tight">
                You will always know who owns your account.
              </h2>
              <p className="text-base text-slate-600">
                Every engagement is staffed the same way — four defined roles, four clear owners, and no hand-off
                where accountability quietly disappears.
              </p>
            </div>
            <Link
              href="/contact"
              className="gsap-animate flex items-center gap-2 text-sm font-bold text-slate-950 hover:text-indigo-600 transition-colors shrink-0"
            >
              Request an introduction <span className="material-symbols-outlined text-base">arrow_outward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* ---- Left rail: continuity proof ---------------------------------- */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 flex flex-col gap-6">
                <div className="gsap-animate relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 bg-white">
                  <Image
                    src={getAssetPath("/images/pexels/contact-support-team.jpg")}
                    alt="LogiQ-On consultants and support staff working with a client team"
                    fill
                    sizes="(min-width: 1024px) 32vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span
                      className="inline-block px-3 py-1 rounded-full bg-white/15 border border-white/30 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: "#ffffff" }}
                    >
                      Continuity
                    </span>
                    <p className="text-sm leading-relaxed mt-3" style={{ color: "rgba(255,255,255,0.92)" }}>
                      The people who scope your system are the people who install it — and the people who answer
                      the phone afterwards.
                    </p>
                  </div>
                </div>

                <div className="gsap-animate rounded-2xl bg-slate-950 p-7">
                  <div className="w-12 h-12 bg-white/10 border border-white/15 rounded-xl flex items-center justify-center shrink-0 mb-6">
                    <span className="material-symbols-outlined text-xl text-white" style={{ color: "#ffffff" }}>
                      verified_user
                    </span>
                  </div>
                  <h3 className="text-xl font-bold leading-snug mb-3" style={{ color: "#ffffff" }}>
                    No hand-off, no reset.
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Most vendor pain starts at a hand-off — sales to delivery, delivery to support — where context
                    is lost and ownership turns vague. We staff engagements so the people who specified your system
                    are the people who stand behind it.
                  </p>
                  <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                    {CONTINUITY_GUARANTEES.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-slate-400">
                        <span className="material-symbols-outlined text-indigo-400 text-[18px]">check_circle</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* ---- Right rail: who you deal with, stage by stage ----------------- */}
            <div className="lg:col-span-8">
              <ol className="list-none p-0 m-0 flex flex-col">
                {ENGAGEMENT_TEAM.map((member, i) => {
                  const isLast = i === ENGAGEMENT_TEAM.length - 1;
                  return (
                    <li key={member.role} className="gsap-animate flex gap-5 sm:gap-6">
                      <div className="flex flex-col items-center shrink-0">
                        {member.person ? (
                          <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-slate-200 bg-white shrink-0">
                            <Image
                              src={getAssetPath(member.person.photo)}
                              alt={member.person.name}
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-xl text-white">{member.icon}</span>
                          </div>
                        )}
                        {!isLast && <div className="w-px flex-1 bg-slate-300 my-3" aria-hidden="true" />}
                      </div>

                      <div className={`min-w-0 flex-1 ${isLast ? "" : "pb-6"}`}>
                        <div className="group bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 hover:border-slate-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                            <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 text-[10px] font-bold uppercase tracking-wider">
                              {member.stage}
                            </span>
                            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                              Owner {String(i + 1).padStart(2, "0")} / {String(ENGAGEMENT_TEAM.length).padStart(2, "0")}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-slate-950 leading-snug">{member.role}</h3>
                          {member.person && (
                            <p className="text-sm font-bold text-slate-700 mt-1">
                              {member.person.name}
                              <span className="font-normal text-slate-500"> · {member.person.title}</span>
                            </p>
                          )}

                          <p className="text-sm text-slate-600 leading-relaxed mt-3">{member.desc}</p>

                          <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest block mb-2">
                              Owns
                            </span>
                            <p className="text-sm font-medium text-slate-800 leading-relaxed">{member.owns}</p>
                          </div>

                          <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                            {member.proof.map((point) => (
                              <li key={point} className="flex items-center gap-3 text-sm text-slate-600">
                                <span className="material-symbols-outlined text-indigo-600 text-[18px]">
                                  check_circle
                                </span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          {/* ---- Closing accountability bar ------------------------------------ */}
          <div className="gsap-animate mt-8 flex flex-col sm:flex-row sm:items-center gap-5 rounded-2xl border border-slate-200 bg-white p-6">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 text-slate-900">
              <span className="material-symbols-outlined text-[24px] text-slate-900">diversity_3</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              <span className="font-bold text-slate-950">Same team, start to finish.</span> The size of the team
              scales with the size of the rollout — the accountability model does not. One dock door and a full
              distribution centre get the same four owners.
            </p>
            <Link
              href="/contact"
              className="sm:ml-auto shrink-0 flex items-center gap-2 text-sm font-bold text-slate-950 hover:text-indigo-600 transition-colors"
            >
              Start a discovery session <span className="material-symbols-outlined text-base">arrow_outward</span>
            </Link>
          </div>
        </div>
      </GsapSection>
      <SectionIntro eyebrow="x" title="y" lede="z" ledeWidth="3xl" />
    </>
  );
}
