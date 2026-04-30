"use client";

import Link from "next/link";

/* ── Placeholder logo SVGs ── */
const LOGOS = [
    {
        name: "TechCorp",
        svg: (
            <svg width="90" height="32" viewBox="0 0 90 32" fill="none">
                <rect x="2" y="8" width="16" height="16" rx="3" fill="#4B3080" fillOpacity="0.7" />
                <rect x="6" y="12" width="8" height="8" rx="1.5" fill="#2ABFB0" />
                <text x="24" y="22" fontSize="13" fontWeight="700" fill="#4B3080" fontFamily="system-ui" letterSpacing="-0.3">TechCorp</text>
            </svg>
        ),
    },
    {
        name: "MediPlex",
        svg: (
            <svg width="90" height="32" viewBox="0 0 90 32" fill="none">
                <circle cx="14" cy="16" r="10" stroke="#2ABFB0" strokeWidth="2" />
                <path d="M14 11v10M9 16h10" stroke="#2ABFB0" strokeWidth="2" strokeLinecap="round" />
                <text x="30" y="22" fontSize="13" fontWeight="700" fill="#1a1a3a" fontFamily="system-ui" letterSpacing="-0.3">MediPlex</text>
            </svg>
        ),
    },
    {
        name: "NexaBuild",
        svg: (
            <svg width="96" height="32" viewBox="0 0 96 32" fill="none">
                <path d="M4 26L12 6l8 20M8 18h8" stroke="#4B3080" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <text x="26" y="22" fontSize="13" fontWeight="700" fill="#1a1a3a" fontFamily="system-ui" letterSpacing="-0.3">NexaBuild</text>
            </svg>
        ),
    },
    {
        name: "StayElite",
        svg: (
            <svg width="90" height="32" viewBox="0 0 90 32" fill="none">
                <path d="M14 4l2.5 7h7.5l-6 4.5 2.5 7L14 19l-6.5 3.5 2.5-7L4 11h7.5z" fill="#E8900A" fillOpacity="0.85" />
                <text x="28" y="22" fontSize="13" fontWeight="700" fill="#1a1a3a" fontFamily="system-ui" letterSpacing="-0.3">StayElite</text>
            </svg>
        ),
    },
    {
        name: "RetailAxis",
        svg: (
            <svg width="96" height="32" viewBox="0 0 96 32" fill="none">
                <rect x="3" y="18" width="6" height="10" rx="1.5" fill="#4B3080" fillOpacity="0.5" />
                <rect x="12" y="12" width="6" height="16" rx="1.5" fill="#4B3080" fillOpacity="0.7" />
                <rect x="21" y="6" width="6" height="22" rx="1.5" fill="#4B3080" />
                <text x="34" y="22" fontSize="13" fontWeight="700" fill="#1a1a3a" fontFamily="system-ui" letterSpacing="-0.3">RetailAxis</text>
            </svg>
        ),
    },
    {
        name: "EduSpace",
        svg: (
            <svg width="90" height="32" viewBox="0 0 90 32" fill="none">
                <path d="M14 6L24 11l-10 5L4 11z" fill="#2ABFB0" fillOpacity="0.8" />
                <path d="M4 11v8c0 2 4.5 5 10 5s10-3 10-5v-8" stroke="#2ABFB0" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                <text x="30" y="22" fontSize="13" fontWeight="700" fill="#1a1a3a" fontFamily="system-ui" letterSpacing="-0.3">EduSpace</text>
            </svg>
        ),
    },
];

const TESTIMONIALS = [
    {
        quote:
            "We would only learn about expired AMCs when something went wrong. With FusionEdge, we receive notifications 60 days before and have not missed a renewal since.",
        author: "Facility Manager",
        company: "IT Campus, India",
        initials: "FM",
        accentColor: "#4B3080",
        accentBg: "#f0ecfa",
        photoGradient: "from-[#4B3080] to-[#6B4FA0]",
    },
    {
        quote:
            "Vendor performance tracking was worth it. It was the first time we had data to support our decisions when it came to renewing the contract rather than relying on gut feel.",
        author: "Operations Head",
        company: "Commercial Real Estate, Singapore",
        initials: "OH",
        accentColor: "#2ABFB0",
        accentBg: "#e8faf8",
        photoGradient: "from-[#1A9E92] to-[#2ABFB0]",
    },
];

export default function TrustSection() {
    return (
        <section className="relative w-full bg-gradient-to-t from-bg-white/50 to-bg-white/90 overflow-hidden py-16 sm:py-20">

            {/* Top accent */}

            <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10">

                {/* ══ SINGLE WHITE FLOATING PANEL ══ */}
                <div className="rounded-3xl bg-white shadow-[0_8px_56px_rgba(75,48,128,0.13)] border border-slate-100 px-6 sm:px-10 lg:px-14 py-12">

                    {/* ── TRUSTED BY HEADER ── */}
                    <div className="text-center mb-10">
                        <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[#4B3080] mb-3">
                            Trusted By
                        </p>
                        <h2 className="font-extrabold tracking-tight text-[#0f0f1a] text-[1.6rem] sm:text-[2rem] lg:text-[2.4rem] leading-tight">
                            Trusted by Facility Teams Across{" "}
                            <span className="relative inline-block">
                                India and Singapore
                                <svg aria-hidden className="absolute -bottom-1 left-0 w-full" viewBox="0 0 280 6" fill="none" preserveAspectRatio="none" style={{ height: "4px" }}>
                                    <path d="M2 4 Q70 1 140 4 Q210 7 278 2" stroke="#2ABFB0" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                                </svg>
                            </span>
                        </h2>
                    </div>

                    {/* ── LOGO STRIP ── */}
                    <div className="relative mb-12">
                        <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 z-10 pointer-events-none"
                            style={{ background: "linear-gradient(to right, white, transparent)" }} />
                        <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 z-10 pointer-events-none"
                            style={{ background: "linear-gradient(to left, white, transparent)" }} />
                        <div className="flex items-center justify-center flex-wrap gap-6 sm:gap-8 lg:gap-12 px-8">
                            {LOGOS.map((logo) => (
                                <div
                                    key={logo.name}
                                    className="flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                >
                                    {logo.svg}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── DIVIDER ── */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-[#4B3080]/15 to-transparent mb-12" />

                    {/* ── TESTIMONIALS ── */}
                    <div className="text-center mb-8">
                        <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[#4B3080] mb-2">
                            Customer Stories
                        </p>
                        <h3 className="font-extrabold tracking-tight text-[#0f0f1a] text-[1.4rem] sm:text-[1.8rem]">
                            Real Facilities. Real Results.
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        {TESTIMONIALS.map((t, i) => (
                            <div
                                key={i}
                                className="flex flex-col rounded-2xl border border-slate-100 overflow-hidden shadow-[0_4px_24px_rgba(75,48,128,0.08)] hover:shadow-[0_8px_32px_rgba(75,48,128,0.14)] transition-shadow duration-300"
                            >
                                {/* Top colour band */}
                                <div className={`w-full bg-gradient-to-br ${t.photoGradient} flex items-center justify-center`}
                                    style={{ height: "120px" }}>
                                    <div className="flex flex-col items-center gap-2 opacity-60">
                                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
                                            <rect x="4" y="4" width="28" height="28" rx="6" stroke="white" strokeWidth="1.8" />
                                            <circle cx="18" cy="14" r="5" stroke="white" strokeWidth="1.8" />
                                            <path d="M8 30c0-5.5 4.5-9 10-9s10 3.5 10 9" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                                        </svg>
                                        <span className="text-white/70 text-[0.7rem] font-medium">Facility Photo</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 flex flex-col p-6" style={{ background: t.accentBg }}>
                                    <svg width="28" height="20" viewBox="0 0 28 20" fill="none" className="mb-3 flex-shrink-0" aria-hidden>
                                        <path d="M0 20V12C0 5.4 3.6 1.6 10.8 0L12 2.4C9 3.2 7 4.8 6 7.2H11V20H0ZM16 20V12C16 5.4 19.6 1.6 26.8 0L28 2.4C25 3.2 23 4.8 22 7.2H27V20H16Z"
                                            fill={t.accentColor} fillOpacity="0.18" />
                                    </svg>
                                    <p className="text-[0.92rem] sm:text-[0.96rem] text-[#2a2a4a] leading-relaxed italic flex-1 mb-5">
                                        &ldquo;{t.quote}&rdquo;
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[0.72rem] font-bold flex-shrink-0"
                                            style={{ background: `linear-gradient(135deg, ${t.accentColor}, #2ABFB0)` }}
                                        >
                                            {t.initials}
                                        </div>
                                        <div>
                                            <p className="text-[0.85rem] font-semibold text-[#0f0f1a]">{t.author}</p>
                                            <p className="text-[0.75rem] text-[#7a7a98]">{t.company}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ── CTA STRIP ── */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 rounded-2xl bg-gradient-to-r from-[#4B3080]/8 to-[#2ABFB0]/8 border border-[#4B3080]/10 px-6 py-7 sm:py-5">
                        <p className="text-[0.95rem] font-semibold text-[#0f0f1a] text-center sm:text-left sm:mr-4">
                            Ready to join them?
                        </p>
                        <div className="flex items-center gap-3 flex-wrap justify-center">
                            <Link
                                href="#demo"
                                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[0.88rem] font-semibold text-white
                  bg-gradient-to-r from-[#4B3080] to-[#2ABFB0]
                  shadow-[0_4px_16px_rgba(75,48,128,0.30)]
                  hover:shadow-[0_6px_24px_rgba(75,48,128,0.45)]
                  hover:brightness-105 active:scale-[0.97] transition-all duration-200"
                            >
                                Get a Free Demo
                                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
                                    <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                            <Link
                                href="#contact"
                                className="inline-flex items-center px-6 py-2.5 rounded-full text-[0.88rem] font-semibold text-[#0f0f1a]
                  bg-white border border-[#d0d2e8]
                  shadow-[0_2px_8px_rgba(0,0,0,0.06)]
                  hover:border-[#4B3080]/40 hover:shadow-[0_4px_14px_rgba(75,48,128,0.10)]
                  active:scale-[0.97] transition-all duration-200"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                </div>
                {/* end white panel */}

            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#2ABFB0]/20 to-transparent" />
        </section>
    );
}