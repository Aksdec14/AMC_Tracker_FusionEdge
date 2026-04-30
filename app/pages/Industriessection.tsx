"use client";

const INDUSTRIES = [
    { emoji: "🏢", label: "Corporate Offices" },
    { emoji: "🏥", label: "Hospitals and Healthcare" },
    { emoji: "🏭", label: "Manufacturing Plants" },
    { emoji: "🏨", label: "Hotels and Hospitality" },
    { emoji: "🏬", label: "Retail and Malls" },
    { emoji: "🏗️", label: "Construction and Real Estate" },
    { emoji: "🎓", label: "Educational Institutions" },
    { emoji: "✈️", label: "Airports and Transport Hubs" },
];

function IndustryMarquee() {
    const items = [...INDUSTRIES, ...INDUSTRIES];
    return (
        <div className="relative w-full overflow-hidden bg-[#5D1F73] py-3">
            <div
                className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10"
                style={{ background: "linear-gradient(to right, #5D1F73, transparent)" }}
            />
            <div
                className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10"
                style={{ background: "linear-gradient(to left, #5D1F73, transparent)" }}
            />
            <div className="flex items-center marquee-track">
                {items.map((ind, i) => (
                    <span
                        key={i}
                        className="inline-flex items-center gap-2 px-5 whitespace-nowrap text-white/85 text-[0.8rem] font-medium flex-shrink-0"
                    >
                        <span className="text-sm">{ind.emoji}</span>
                        {ind.label}
                        <span className="ml-3 w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                    </span>
                ))}
            </div>
            <style>{`
                .marquee-track { animation: marquee-scroll 28s linear infinite; width: max-content; }
                .marquee-track:hover { animation-play-state: paused; }
                @keyframes marquee-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            `}</style>
        </div>
    );
}

export default function IndustriesSection() {
    return (
        <div className="bg-white">
            <div className="py-12 mx-auto max-w-[1200px] px-6 lg:px-10">
                <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[#4B3080] mb-3">
                    Industries We Serve
                </p>
                <h2 className="font-extrabold tracking-tight text-[#5D1F73] text-[1.8rem] sm:text-[2.2rem] leading-tight mb-3">
                    Built for Every{" "}
                    <span className="relative inline-block">
                        Asset-Based Industry
                        <svg
                            aria-hidden
                            className="absolute -bottom-1 left-0 w-full"
                            viewBox="0 0 340 6"
                            fill="none"
                            preserveAspectRatio="none"
                            style={{ height: "4px" }}
                        >
                            <path
                                d="M2 4 Q85 1 170 4 Q255 7 338 2"
                                stroke="#2ABFB0"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                fill="none"
                            />
                        </svg>
                    </span>
                </h2>
                <p className="text-[#5a5a78] text-[0.95rem] max-w-[520px] leading-relaxed">
                    FusionEdge Asset AMC Tracker is built for facility managers in industries where
                    asset contracts, warranties, and vendor obligations are critical to daily operations.
                </p>
            </div>
            <IndustryMarquee />
        </div>
    );
}