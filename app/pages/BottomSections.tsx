"use client";

import Link from "next/link";

const BLOGS = [
    {
        tag: "Asset Management",
        desc: "Everything you need to know about managing facility assets at scale.",
        href: "#asset-management",
        readTime: "5 min read",
        icon: (
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden>
                <rect x="3" y="2" width="16" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
                <line x1="7" y1="7" x2="15" y2="7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="7" y1="11" x2="15" y2="11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="7" y1="15" x2="11" y2="15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        ),
        accent: "#4B3080",
        accentBg: "#f0ecfa",
    },
    {
        tag: "Facility and Inventory",
        desc: "How smart inventory management keeps your facility running without gaps.",
        href: "#facility-inventory",
        readTime: "4 min read",
        icon: (
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden>
                <path d="M3 7l8-4 8 4v9l-8 4-8-4V7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M11 3v18M3 7l8 4 8-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        ),
        accent: "#2ABFB0",
        accentBg: "#e8faf8",
    },
    {
        tag: "ESG and Engagement",
        desc: "How modern facilities are tracking sustainability and stakeholder satisfaction.",
        href: "#esg-engagement",
        readTime: "6 min read",
        icon: (
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden>
                <circle cx="11" cy="11" r="8.5" stroke="currentColor" strokeWidth="1.6" />
                <path d="M7 13.5c.8 1.5 2.2 2.5 4 2.5s3.2-1 4-2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <circle cx="8.5" cy="9.5" r="1" fill="currentColor" />
                <circle cx="13.5" cy="9.5" r="1" fill="currentColor" />
            </svg>
        ),
        accent: "#E8900A",
        accentBg: "#fff6e6",
    },
];

export default function BottomSections() {
    return (
        <div className="w-full">

            {/* ══════════════════════════════════
                SECTION 1 — Security promise banner
            ══════════════════════════════════ */}
            <section
                className="relative w-full overflow-hidden"
                style={{ background: "#5D1F73" }}
            >
                {/* Decorative blobs */}
                <div aria-hidden className="pointer-events-none absolute -top-10 -left-10 w-52 h-52 rounded-full opacity-10"
                    style={{ background: "radial-gradient(circle, white, transparent 70%)" }} />
                <div aria-hidden className="pointer-events-none absolute -bottom-8 right-20 w-40 h-40 rounded-full opacity-10"
                    style={{ background: "radial-gradient(circle, #2ABFB0, transparent 70%)" }} />
                {/* Dot grid */}
                <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]"
                    style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

                <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10 py-10 sm:py-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                    {/* Lock icon */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                            <rect x="4" y="10" width="14" height="10" rx="2.5" stroke="white" strokeWidth="1.6" />
                            <path d="M7 10V7a4 4 0 018 0v3" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                            <circle cx="11" cy="15" r="1.5" fill="white" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-white font-extrabold text-[1.1rem] sm:text-[1.25rem] leading-snug mb-1">
                            Safe while you stay.{" "}
                            <span style={{ color: "#2ABFB0" }}>Gone when you leave.</span>
                        </h3>
                        <p className="text-white/65 text-[0.85rem] max-w-[540px] leading-relaxed">
                            We never view, share, or retain your data — and the day you leave,
                            it is deleted completely. No copies. No exceptions.
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 2 — Final CTA
            ══════════════════════════════════ */}
            <section className="relative w-full bg-[#f5f3fa] overflow-hidden">
                {/* Subtle wave top */}
                <div aria-hidden className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#5D1F73]/20 to-transparent" />

                <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">

                        {/* Left text */}
                        <div className="flex-1 min-w-0">
                            <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[#5D1F73] mb-3">
                                Get Started
                            </p>
                            <h2 className="font-extrabold tracking-tight text-[#0f0f1a] text-[1.6rem] sm:text-[2rem] lg:text-[2.3rem] leading-tight mb-3">
                                Your Next AMC Expiry Should{" "}
                                <span className="relative inline-block">
                                    Never Catch You
                                    <svg aria-hidden className="absolute -bottom-1 left-0 w-full" viewBox="0 0 260 6" fill="none" preserveAspectRatio="none" style={{ height: "4px" }}>
                                        <path d="M2 4 Q65 1 130 4 Q195 7 258 2" stroke="#2ABFB0" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                                    </svg>
                                </span>{" "}
                                Off Guard.
                            </h2>
                            <p className="text-[#5a5a78] text-[0.92rem] max-w-[480px] leading-relaxed">
                                Stop relying on reminders that get missed. FusionEdge keeps every contract,
                                every renewal, and every vendor obligation tracked and under control.
                            </p>
                        </div>

                        {/* Right CTAs */}
                        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 flex-shrink-0">
                            <Link
                                href="#demo"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-[0.9rem] font-semibold text-white
                                    bg-gradient-to-r from-[#5D1F73] to-[#2ABFB0]
                                    shadow-[0_4px_20px_rgba(93,31,115,0.35)]
                                    hover:shadow-[0_6px_28px_rgba(93,31,115,0.5)]
                                    hover:brightness-105 active:scale-[0.97]
                                    transition-all duration-200"
                            >
                                Get a Free Demo
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                                    <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-[0.9rem] font-semibold text-[#5D1F73]
                                    bg-white border-2 border-[#5D1F73]/25
                                    shadow-[0_2px_10px_rgba(0,0,0,0.06)]
                                    hover:border-[#5D1F73]/60 hover:bg-[#f5f0fa]
                                    active:scale-[0.97] transition-all duration-200"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>

                <div aria-hidden className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#2ABFB0]/20 to-transparent" />
            </section>

            {/* ══════════════════════════════════
                SECTION 3 — Blog / Insights
            ══════════════════════════════════ */}
            <section className="relative w-full bg-white">
                <div aria-hidden className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#5D1F73]/15 to-transparent" />

                <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10 py-14 sm:py-16">

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                        <div>
                            <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[#5D1F73] mb-2">
                                Read Our Blogs
                            </p>
                            <h2 className="font-extrabold tracking-tight text-[#0f0f1a] text-[1.5rem] sm:text-[1.8rem] leading-tight">
                                Insights for{" "}
                                <span className="relative inline-block">
                                    Facility Managers
                                    <svg aria-hidden className="absolute -bottom-1 left-0 w-full" viewBox="0 0 220 6" fill="none" preserveAspectRatio="none" style={{ height: "4px" }}>
                                        <path d="M2 4 Q55 1 110 4 Q165 7 218 2" stroke="#2ABFB0" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                                    </svg>
                                </span>
                            </h2>
                        </div>
                        <Link
                            href="#blogs"
                            className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-[#5D1F73] hover:text-[#4B3080] transition-colors duration-150 group flex-shrink-0"
                        >
                            View all posts
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="group-hover:translate-x-1 transition-transform duration-150">
                                <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>

                    {/* Blog cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {BLOGS.map((blog) => (
                            <Link
                                key={blog.tag}
                                href={blog.href}
                                className="group flex flex-col rounded-2xl border border-slate-100 overflow-hidden
                                    shadow-[0_2px_12px_rgba(0,0,0,0.05)]
                                    hover:shadow-[0_8px_28px_rgba(93,31,115,0.12)]
                                    hover:border-[#5D1F73]/20
                                    transition-all duration-250"
                            >
                                {/* Coloured top strip */}
                                <div
                                    className="w-full flex items-center justify-center"
                                    style={{ height: "80px", background: blog.accentBg }}
                                >
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                                        style={{ background: `${blog.accent}18`, color: blog.accent }}
                                    >
                                        {blog.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-1 p-5">
                                    {/* Tag + read time */}
                                    <div className="flex items-center justify-between mb-2">
                                        <span
                                            className="text-[0.65rem] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full"
                                            style={{ color: blog.accent, background: blog.accentBg }}
                                        >
                                            {blog.tag}
                                        </span>
                                        <span className="text-[0.68rem] text-[#9090b0]">{blog.readTime}</span>
                                    </div>

                                    <p className="text-[0.88rem] text-[#3a3a5a] leading-relaxed flex-1 mb-4">
                                        {blog.desc}
                                    </p>

                                    {/* Read more */}
                                    <div
                                        className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold transition-colors duration-150"
                                        style={{ color: blog.accent }}
                                    >
                                        Read more
                                        <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden
                                            className="group-hover:translate-x-1 transition-transform duration-150">
                                            <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}