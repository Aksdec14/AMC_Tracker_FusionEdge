"use client";

const STEPS = [
    {
        number: "01",
        label: "Step 1",
        title: "Add Your Contracts",
        body: "Enter your AMC and warranty information into FusionEdge. Scope, dates, vendor, and SLA — all in one profile.",
        accent: "#4B3080",
        bg: "#f5f2fc",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
        icon: (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
                <rect x="4" y="2" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
                <line x1="7" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="7" y1="10.5" x2="13" y2="10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="7" y1="14" x2="10" y2="14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        ),
        side: "left" as const,
    },
    {
        number: "02",
        label: "Step 2",
        title: "Set Your Alert Timeline",
        body: "Select how far in advance you want to be notified before a contract expires. FusionEdge does the rest.",
        accent: "#1A9E92",
        bg: "#f0faf9",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
        icon: (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
                <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.6" />
                <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
        ),
        side: "right" as const,
    },
    {
        number: "03",
        label: "Step 3",
        title: "Track Every Service Visit",
        body: "All vendor visits are recorded against the contract. Full service history — always documented, always accessible.",
        accent: "#3A5FAF",
        bg: "#f0f4fc",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
        icon: (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M4 10h12M4 6h8M4 14h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="15" cy="14" r="3" stroke="currentColor" strokeWidth="1.4" />
                <path d="M17.5 16.5l1.5 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        ),
        side: "left" as const,
    },
    {
        number: "04",
        label: "Step 4",
        title: "Review and Renew with Confidence",
        body: "When renewal time comes, you have complete vendor performance data to make the right decision — every time.",
        accent: "#B06A08",
        bg: "#fdf7ed",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        icon: (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M3 13l4-4 3 3 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 6h3v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        side: "right" as const,
    },
];

/* ── Step Card ── */
function StepCard({ step }: { step: typeof STEPS[0] }) {
    return (
        <div
            className="flex items-stretch rounded-2xl overflow-hidden shadow-[0_4px_28px_rgba(0,0,0,0.09)] border"
            style={{ borderColor: `${step.accent}1a`, background: "#fff" }}
        >
            {/* Dark vertical pill */}
            <div
                className="flex-shrink-0 w-10 flex items-center justify-center"
                style={{ background: "#0f0f1a", borderRadius: "16px 0 0 16px" }}
            >
                <span
                    className="text-white text-[0.58rem] font-bold tracking-[0.2em] uppercase whitespace-nowrap"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                    {step.label}
                </span>
            </div>

            {/* Card body */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Image strip */}
                <div
                    className="w-full flex items-center justify-center overflow-hidden flex-shrink-0 bg-gray-100"
                    style={{ height: "120px" }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Text content */}
                <div className="px-5 py-4" style={{ background: step.bg }}>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span
                            className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                            style={{ background: `${step.accent}18`, color: step.accent }}
                        >
                            {step.icon}
                        </span>
                        <span
                            className="text-[0.62rem] font-extrabold tracking-wider flex-shrink-0"
                            style={{ color: `${step.accent}80` }}
                        >
                            {step.number}
                        </span>
                        <h3 className="text-[0.9rem] font-bold text-[#0f0f1a] leading-snug">
                            {step.title}
                        </h3>
                    </div>
                    <p className="text-[0.82rem] text-[#5a5a78] leading-relaxed">{step.body}</p>
                </div>
            </div>
        </div>
    );
}

/* ── Desktop Zigzag ── */
function DesktopZigzag() {
    const R_OFFSET = 80;
    return (
        <div className="relative">
            {/* Cards — z-10 so they sit above the connector SVG */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-7 relative z-10">
                {STEPS.map((step) => (
                    <div
                        key={step.number}
                        style={{ marginTop: step.side === "right" ? `${R_OFFSET}px` : "0px" }}
                    >
                        <StepCard step={step} />
                    </div>
                ))}
            </div>


        </div>
    );
}

/* ── Main export ── */
export default function HowItWorksSection() {
    return (
        <section className="relative w-full bg-[#f0eefa] py-12 overflow-hidden">
            <div className="mx-auto w-full max-w-[1100px] px-6 lg:px-1">
                {/* Header */}
                <div className="mb-10">
                    <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[#4B3080] mb-2">
                        How It Works
                    </p>
                    <h2 className="font-extrabold tracking-tight text-[#5D1F73] text-[1.8rem] sm:text-[2.2rem] leading-[1.1] max-w-[780px]">
                        From Setup to{" "}
                        <span className="relative inline-block">
                            Full Control
                            <svg
                                aria-hidden
                                className="absolute -bottom-1 left-0 w-full"
                                viewBox="0 0 200 6"
                                fill="none"
                                preserveAspectRatio="none"
                                style={{ height: "4px" }}
                            >
                                <path d="M2 4 Q50 1 100 4 Q150 7 198 2" stroke="#2ABFB0" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                            </svg>
                        </span>{" "}
                        in Four Steps.
                    </h2>
                </div>

                {/* Desktop */}
                <div className="hidden md:block">
                    <DesktopZigzag />
                </div>

                {/* Mobile */}
                <div className="flex flex-col md:hidden">
                    {STEPS.map((step, i) => (
                        <div key={step.number}>
                            <StepCard step={step} />

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}