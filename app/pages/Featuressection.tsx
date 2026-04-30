"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const FEATURES = [
    {
        id: 0,
        tag: "Contract Management",
        title: "AMC & Warranty Contract Repository",
        body: "Keep all contracts in a single location — scope, important dates, vendor information, and SLA requirements. No longer searching through emails or filing cabinets.",
        image: "/images/dashboard_01.png",
        fallbackBg: "from-[#4B3080] to-[#6B4FA0]",
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                <rect x="4" y="2" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
                <line x1="7" y1="7" x2="15" y2="7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="7" y1="11" x2="15" y2="11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="7" y1="15" x2="11" y2="15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 1,
        tag: "Alerts & Notifications",
        title: "Automated Renewal Alerts",
        body: "Be alerted well in advance of a contract expiry. Set the number of days ahead you would like the alert — 30, 60, or 90 days. Your call.",
        image: "/images/dashboard_02.png",
        fallbackBg: "from-[#2ABFB0] to-[#1A9E92]",
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                <path d="M11 3C7.69 3 5 5.69 5 9v5l-2 2v1h16v-1l-2-2V9c0-3.31-2.69-6-6-6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M9 19a2 2 0 004 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="16" cy="5" r="3" fill="#e05050" />
            </svg>
        ),
    },
    {
        id: 2,
        tag: "Service Tracking",
        title: "Service History Logging",
        body: "Each service visit under an AMC is recorded and attached to the asset. Complete documentation of what was done, when, and by whom.",
        image: "/images/dashboard_03.png",
        fallbackBg: "from-[#5A7FD4] to-[#3A5FAF]",
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.6" />
                <path d="M11 7v4l2.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 3,
        tag: "Vendor Insights",
        title: "Vendor Performance Tracking",
        body: "Monitor how well your vendors are honouring their SLA commitments. Identify who delivers and who does not — before the next contract renewal.",
        image: "/images/dashboard_04.png",
        fallbackBg: "from-[#E8900A] to-[#C87008]",
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                <rect x="3" y="12" width="4" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
                <rect x="9" y="8" width="4" height="11" rx="1" stroke="currentColor" strokeWidth="1.5" />
                <rect x="15" y="4" width="4" height="15" rx="1" stroke="currentColor" strokeWidth="1.5" />
                <path d="M5 9l4-3 4 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

function FeaturePlaceholder({
    gradient,
    icon,
    title,
}: {
    gradient: string;
    icon: React.ReactNode;
    title: string;
}) {
    return (
        <div
            className={`w-full h-full bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-4 p-8`}
        >
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                {icon}
            </div>
            <p className="text-white/80 text-sm font-medium text-center max-w-[160px] leading-snug">
                {title}
            </p>
            <div className="w-full max-w-[200px] space-y-2 mt-2">
                {[80, 60, 90, 50].map((w, i) => (
                    <div
                        key={i}
                        className="h-2 rounded-full bg-white/20"
                        style={{ width: `${w}%` }}
                    />
                ))}
            </div>
        </div>
    );
}

export default function FeaturesSection() {
    const [active, setActive] = useState(0);
    const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

    const goTo = useCallback(
        (idx: number) => {
            if (idx === active) return;
            setActive(idx);
        },
        [active]
    );

    useEffect(() => {
        const t = setInterval(() => {
            setActive((prev) => (prev + 1) % FEATURES.length);
        }, 5000);
        return () => clearInterval(t);
    }, []);

    return (
        <section className="relative w-full bg-[#f8f8fc] py-16 sm:py-20 overflow-hidden">

            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#4B3080]/20 to-transparent" />

            <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10">

                {/* ── Section header ── */}
                <div className="mb-10 sm:mb-12">
                    <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[#4B3080] mb-3">
                        Platform Capabilities
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                        <div>
                            <h2 className="font-extrabold tracking-tight text-[#0f0f1a] text-[1.6rem] sm:text-[2rem] lg:text-[2.2rem] leading-tight mb-2">
                                Every Facility Is Unique.{" "}
                                <span className="relative inline-block">
                                    Your AMC Tracker
                                    <svg
                                        aria-hidden
                                        className="absolute -bottom-1 left-0 w-full"
                                        viewBox="0 0 280 6"
                                        fill="none"
                                        preserveAspectRatio="none"
                                        style={{ height: "4px" }}
                                    >
                                        <path
                                            d="M2 4 Q70 1 140 4 Q210 7 278 2"
                                            stroke="#2ABFB0"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            fill="none"
                                        />
                                    </svg>
                                </span>{" "}
                                Should Be Too.
                            </h2>
                            <p className="text-[#5a5a78] text-[0.9rem] sm:text-[0.95rem] max-w-[560px] leading-relaxed">
                                FusionEdge can be configured to fit your contract types, asset
                                categories, vendor setups, and approval workflows — built to work
                                exactly like your facility does.
                            </p>
                        </div>

                        {/* Progress dots */}
                        <div className="flex items-center gap-2 flex-shrink-0">
                            {FEATURES.map((f, i) => (
                                <button
                                    key={f.id}
                                    onClick={() => goTo(i)}
                                    aria-label={`Go to feature ${i + 1}`}
                                    className={`rounded-full transition-all duration-300 ${i === active
                                        ? "w-6 h-2.5 bg-[#4B3080]"
                                        : "w-2.5 h-2.5 bg-[#c8c6e0] hover:bg-[#4B3080]/40"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* ══ MOBILE: Stacked cards ══ */}
                <div className="flex flex-col gap-4 lg:hidden">
                    {FEATURES.map((f, i) => (
                        <div
                            key={f.id}
                            onClick={() => goTo(i)}
                            className="rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300"
                            style={{
                                borderColor: i === active ? "rgba(75,48,128,0.25)" : "rgba(0,0,0,0.06)",
                                boxShadow: i === active ? "0 6px 24px rgba(75,48,128,0.12)" : "0 2px 8px rgba(0,0,0,0.04)",
                            }}
                        >
                            {/* Image */}
                            <div className="relative w-full" style={{ height: "200px" }}>
                                {imgErrors[f.id] ? (
                                    <FeaturePlaceholder
                                        gradient={f.fallbackBg}
                                        icon={f.icon}
                                        title={f.title}
                                    />
                                ) : (
                                    <Image
                                        src={f.image}
                                        alt={f.title}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 60vw"
                                        className="object-contain"
                                        onError={() =>
                                            setImgErrors((prev) => ({ ...prev, [f.id]: true }))
                                        }
                                    />
                                )}
                            </div>

                            {/* Content */}
                            <div className="bg-white px-5 py-4">
                                <span className="inline-flex items-center gap-1.5 text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[#4B3080] bg-[#f0ecfa] px-2.5 py-1 rounded-full mb-2">
                                    {f.tag}
                                </span>
                                <h3 className="text-[0.95rem] font-bold text-[#0f0f1a] mb-1 leading-snug">
                                    {f.title}
                                </h3>
                                <p className="text-[0.82rem] text-[#5a5a78] leading-relaxed">
                                    {f.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ══ DESKTOP: Side-by-side carousel ══ */}
                <div className="hidden lg:flex gap-6 items-stretch" style={{ height: "520px" }}>

                    {/* LEFT: Active feature panel */}
                    <div className="flex-1 flex flex-col">
                        <div className="relative rounded-2xl overflow-hidden flex-1 flex flex-col">
                            {FEATURES.map((f, i) => (
                                <div
                                    key={f.id}
                                    className="absolute inset-0 flex flex-col"
                                    style={{
                                        opacity: i === active ? 1 : 0,
                                        transition: "opacity 0.5s ease-in-out",
                                        pointerEvents: i === active ? "auto" : "none",
                                    }}
                                >
                                    {/* Image area */}
                                    <div
                                        className="flex-1 min-h-0 relative bg-[#f4f2fb] flex items-center justify-center rounded-t-2xl"
                                        style={{ padding: "24px" }}
                                    >
                                        {imgErrors[f.id] ? (
                                            <FeaturePlaceholder gradient={f.fallbackBg} icon={f.icon} title={f.title} />
                                        ) : (
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={f.image}
                                                    alt={f.title}
                                                    fill
                                                    sizes="(max-width: 1024px) 100vw, 60vw"
                                                    className="object-contain drop-shadow-lg"
                                                    onError={() =>
                                                        setImgErrors((prev) => ({ ...prev, [f.id]: true }))
                                                    }
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Content at bottom */}
                                    <div
                                        className="bg-white px-6 py-5 border border-slate-100 border-t-0 rounded-b-2xl"
                                        style={{ minHeight: "148px" }}
                                    >
                                        <span className="inline-flex items-center gap-1.5 text-[0.68rem] font-bold tracking-[0.15em] uppercase text-[#4B3080] bg-[#f0ecfa] px-2.5 py-1 rounded-full mb-2">
                                            {f.tag}
                                        </span>
                                        <h3 className="text-[1.05rem] font-bold text-[#0f0f1a] mb-1.5 leading-snug">
                                            {f.title}
                                        </h3>
                                        <p className="text-[0.86rem] text-[#5a5a78] leading-relaxed line-clamp-2">
                                            {f.body}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Feature list */}
                    <div
                        className="w-[320px] flex-shrink-0 flex flex-col gap-3"
                        style={{ height: "520px" }}
                    >
                        {FEATURES.map((f, i) => (
                            <button
                                key={f.id}
                                onClick={() => goTo(i)}
                                className="group flex items-center gap-4 p-4 rounded-2xl text-left w-full border flex-1"
                                style={{
                                    background:
                                        i === active ? "white" : "rgba(255,255,255,0.6)",
                                    borderColor:
                                        i === active
                                            ? "rgba(75,48,128,0.2)"
                                            : "transparent",
                                    boxShadow:
                                        i === active
                                            ? "0 4px 20px rgba(75,48,128,0.10)"
                                            : "none",
                                    transition:
                                        "background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
                                }}
                            >
                                {/* Thumbnail */}
                                <div
                                    className={`flex-shrink-0 w-14 h-12 rounded-xl bg-gradient-to-br ${f.fallbackBg} flex items-center justify-center text-white/90`}
                                    style={{
                                        transition: "transform 0.2s ease",
                                        transform:
                                            i === active ? "scale(1.04)" : "scale(1)",
                                    }}
                                >
                                    {f.icon}
                                </div>

                                {/* Text */}
                                <div className="flex-1 min-w-0">
                                    <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-[#9090b0] mb-0.5 truncate">
                                        {f.tag}
                                    </p>
                                    <p
                                        className="text-[0.86rem] font-semibold leading-snug line-clamp-2"
                                        style={{
                                            color: i === active ? "#4B3080" : "#0f0f1a",
                                            transition: "color 0.3s ease",
                                        }}
                                    >
                                        {f.title}
                                    </p>
                                </div>

                                {/* Arrow */}
                                <div
                                    className="flex-shrink-0"
                                    style={{
                                        opacity: i === active ? 1 : 0,
                                        transition: "opacity 0.3s ease",
                                    }}
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        aria-hidden
                                    >
                                        <path
                                            d="M4 8h8M9 5l3 3-3 3"
                                            stroke="#4B3080"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#2ABFB0]/20 to-transparent" />
        </section>
    );
}