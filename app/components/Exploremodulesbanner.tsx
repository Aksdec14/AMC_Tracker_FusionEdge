"use client";

import Link from "next/link";

const MODULES = [
    {
        title: "Digital Asset Register",
        desc: "A single, living record of all assets across all sites.",
        href: "#digital-asset-register",
        icon: (
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden>
                <rect x="3" y="2" width="16" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
                <line x1="7" y1="7" x2="15" y2="7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="7" y1="11" x2="15" y2="11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="7" y1="15" x2="11" y2="15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: "Asset Register Breakdown",
        desc: "Complete insight into every asset failure event, from fault to fix.",
        href: "#asset-register-breakdown",
        icon: (
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden>
                <circle cx="11" cy="11" r="8.5" stroke="currentColor" strokeWidth="1.6" />
                <path d="M11 7v4.5l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: "Asset Health Monitoring",
        desc: "Predictive insights into asset condition before failure occurs.",
        href: "#asset-health-monitoring",
        icon: (
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden>
                <path d="M2 12h3l2.5-7 3 10 2.5-6 2 3H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

export default function ExploreModulesBanner() {
    return (
        <section className="relative w-full overflow-hidden">
            <div className="relative flex flex-col lg:flex-row w-full min-h-[320px]">

                {/* ══ LEFT — Purple side ══ */}
                <div
                    className="relative flex-shrink-0 lg:w-[38%] w-full flex flex-col justify-center px-8 sm:px-12 py-12 lg:py-16 overflow-hidden"
                    style={{ background: "#5D1F73" }}
                >
                    {/* Blob 1 — large circle top-left */}
                    <div
                        aria-hidden
                        className="absolute -top-16 -left-16 w-56 h-56 rounded-full"
                        style={{ background: "rgba(255,255,255,0.08)" }}
                    />
                    {/* Blob 2 — medium circle bottom-right */}
                    <div
                        aria-hidden
                        className="absolute -bottom-12 -right-10 w-44 h-44 rounded-full"
                        style={{ background: "rgba(255,255,255,0.10)" }}
                    />
                    {/* Blob 3 — small accent circle */}
                    <div
                        aria-hidden
                        className="absolute top-1/2 right-4 w-24 h-24 rounded-full -translate-y-1/2"
                        style={{ background: "rgba(42,191,176,0.18)" }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                        <p className="text-[0.68rem] font-bold tracking-[0.22em] uppercase text-white/50 mb-4">
                            Platform
                        </p>
                        <h2 className="font-extrabold text-white leading-[1.15] text-[2rem] sm:text-[2.4rem] lg:text-[2.6rem] tracking-tighter mx-auto">
                            Explore
                            More
                            <br />
                            Modules
                        </h2>
                        {/* Teal accent line */}
                        <div className="mt-5 w-10 h-[3px] rounded-full" style={{ background: "#2ABFB0" }} />
                    </div>
                </div>

                {/* ══ RIGHT — White side ══ */}
                <div className="relative flex-1 bg-white flex flex-col justify-center px-8 sm:px-10 py-10 lg:py-12">

                    {/* Wave SVG divider on the left edge (desktop only) */}
                    <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-12 pointer-events-none z-10">
                        <svg
                            viewBox="0 0 48 300"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-full w-full"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M48 0 C20 60, 20 90, 48 150 C20 210, 20 240, 48 300 L0 300 L0 0 Z"
                                fill="#5D1F73"
                            />
                        </svg>
                    </div>

                    {/* Module list */}
                    <div className="flex flex-col gap-4 lg:pl-8">
                        {MODULES.map((mod) => (
                            <Link
                                key={mod.title}
                                href={mod.href}
                                className="group flex items-start gap-4 rounded-xl border border-slate-100 bg-[#faf9fc] hover:bg-[#f3eefa] hover:border-[#5D1F73]/20 p-4 transition-all duration-200"
                            >
                                {/* Icon */}
                                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#5D1F73]/10 flex items-center justify-center text-[#5D1F73] group-hover:bg-[#5D1F73]/18 transition-colors duration-200">
                                    {mod.icon}
                                </div>

                                {/* Text */}
                                <div className="flex-1 min-w-0">
                                    <p className="text-[0.9rem] font-bold text-[#0f0f1a] leading-snug mb-0.5 group-hover:text-[#5D1F73] transition-colors duration-150">
                                        {mod.title}
                                    </p>
                                    <p className="text-[0.78rem] text-[#7a7a98] leading-snug">{mod.desc}</p>
                                </div>

                                {/* Arrow */}
                                <div className="flex-shrink-0 mt-1 text-[#5D1F73] opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1 transform">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                                        <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}