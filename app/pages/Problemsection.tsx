"use client";

const STATS = [
    {
        value: "1",
        suffix: " missed renewal",
        detail: "can void warranty coverage on a critical asset entirely",
        accent: "#4B3080",
        bg: "#f0ecfa",
    },
    {
        value: "2x–3x",
        suffix: " higher repair costs",
        detail: "when emergency work is done outside AMC coverage",
        accent: "#2ABFB0",
        bg: "#e8faf8",
    },
    {
        value: "72+",
        suffix: " hrs delay",
        detail: "average delay in getting vendor response without an active contract",
        accent: "#e8900a",
        bg: "#fff6e6",
    },
];

const PAIN_POINTS = [
    {
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <circle cx="9" cy="9" r="7.5" stroke="#4B3080" strokeWidth="1.5" />
                <path d="M9 5.5V9.5M9 12h.01" stroke="#4B3080" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
        ),
        text: "Emergency repairs with no coverage.",
    },
    {
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <rect x="3" y="3" width="12" height="12" rx="2" stroke="#4B3080" strokeWidth="1.5" />
                <path d="M6 9l2 2 4-4" stroke="#4B3080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        text: "Warranty claims that cannot be raised.",
    },
    {
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <circle cx="9" cy="9" r="7.5" stroke="#4B3080" strokeWidth="1.5" />
                <path d="M9 6v3.5l2 2" stroke="#4B3080" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        text: "Vendors with no obligation to respond.",
    },
];

/* ─── Inline SVG Illustration ─── */
function ContractAlertIllustration() {
    return (
        <svg
            viewBox="0 0 420 460"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            aria-hidden
        >
            {/* Background card */}
            <rect x="20" y="20" width="380" height="420" rx="20" fill="#f5f4fc" />

            {/* ── Top: Header bar ── */}
            <rect x="20" y="20" width="380" height="58" rx="20" fill="#4B3080" />
            <rect x="20" y="58" width="380" height="20" fill="#4B3080" />
            <text x="44" y="55" fontSize="13" fontWeight="700" fill="white" fontFamily="system-ui">
                AMC Contract Repository
            </text>
            <circle cx="358" cy="44" r="10" fill="white" fillOpacity="0.15" />
            <circle cx="358" cy="44" r="5" fill="#ff6b6b" />

            {/* ── Row 1: Active contract ── */}
            <rect x="40" y="96" width="340" height="64" rx="12" fill="white" />
            <rect x="40" y="96" width="4" height="64" rx="2" fill="#2ABFB0" />
            <text x="56" y="116" fontSize="10" fill="#9090b0" fontFamily="system-ui">HVAC Unit · Block A</text>
            <text x="56" y="134" fontSize="12" fontWeight="600" fill="#0f0f1a" fontFamily="system-ui">Full Maintenance AMC</text>
            <text x="56" y="150" fontSize="10" fill="#9090b0" fontFamily="system-ui">Vendor: CoolTech Services</text>
            <rect x="300" y="108" width="64" height="22" rx="11" fill="#e8faf8" />
            <text x="332" y="123" fontSize="10" fontWeight="700" fill="#2ABFB0" fontFamily="system-ui" textAnchor="middle">Active</text>

            {/* ── Row 2: Expiring soon — AMBER warning ── */}
            <rect x="40" y="172" width="340" height="64" rx="12" fill="white" />
            <rect x="40" y="172" width="4" height="64" rx="2" fill="#e8900a" />
            <text x="56" y="192" fontSize="10" fill="#9090b0" fontFamily="system-ui">Elevator · Tower B</text>
            <text x="56" y="210" fontSize="12" fontWeight="600" fill="#0f0f1a" fontFamily="system-ui">Lift Maintenance Contract</text>
            <text x="56" y="226" fontSize="10" fill="#e8900a" fontWeight="600" fontFamily="system-ui">⚠ Expires in 18 days</text>
            <rect x="292" y="184" width="72" height="22" rx="11" fill="#fff3dc" />
            <text x="328" y="199" fontSize="10" fontWeight="700" fill="#e8900a" fontFamily="system-ui" textAnchor="middle">Renew Soon</text>

            {/* ── Row 3: EXPIRED — RED ── */}
            <rect x="40" y="248" width="340" height="64" rx="12" fill="#fff5f5" />
            <rect x="40" y="248" width="4" height="64" rx="2" fill="#e05050" />
            <text x="56" y="268" fontSize="10" fill="#9090b0" fontFamily="system-ui">Generator · Block C</text>
            <text x="56" y="286" fontSize="12" fontWeight="600" fill="#0f0f1a" fontFamily="system-ui">Annual Generator Service</text>
            <text x="56" y="302" fontSize="10" fill="#e05050" fontWeight="600" fontFamily="system-ui">✕ Expired 12 days ago — No coverage</text>

            {/* ── Alert notification card ── */}
            <rect x="40" y="332" width="340" height="72" rx="14" fill="white" stroke="#e8e6f4" strokeWidth="1" />
            {/* Bell icon */}
            <circle cx="68" cy="368" r="18" fill="#f0ecfa" />
            <path d="M68 354c-4.4 0-8 3.6-8 8v5l-2 2v1h20v-1l-2-2v-5c0-4.4-3.6-8-8-8z" fill="#4B3080" fillOpacity="0.8" />
            <circle cx="68" cy="379" r="2" fill="#4B3080" />
            {/* Alert text */}
            <text x="94" y="360" fontSize="11" fontWeight="700" fill="#0f0f1a" fontFamily="system-ui">Renewal Alert Triggered</text>
            <text x="94" y="376" fontSize="10" fill="#5a5a78" fontFamily="system-ui">Generator AMC has no active coverage.</text>
            <text x="94" y="390" fontSize="10" fill="#5a5a78" fontFamily="system-ui">Vendor notified. Action required.</text>
            {/* Red dot */}
            <circle cx="362" cy="344" r="6" fill="#e05050" />

            {/* ── Bottom: Stat bar ── */}
            <rect x="40" y="420" width="340" height="4" rx="2" fill="#e8e6f4" />
            <rect x="40" y="420" width="220" height="4" rx="2" fill="url(#statBar)" />
            <defs>
                <linearGradient id="statBar" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#4B3080" />
                    <stop offset="100%" stopColor="#2ABFB0" />
                </linearGradient>
            </defs>
            <text x="40" y="442" fontSize="9" fill="#9090b0" fontFamily="system-ui">2 of 3 contracts need attention</text>
        </svg>
    );
}

export default function ProblemSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white py-20">

            {/* ── Subtle top border accent ── */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#4B3080]/20 to-transparent" />

            <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">

                {/* ══ TWO-COLUMN: Content + Illustration ══ */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16 mb-16">

                    {/* ── LEFT: Text content ── */}
                    <div className="flex-1 min-w-0">

                        {/* Eyebrow */}
                        <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[#4B3080] mb-4">
                            The Real Problem
                        </p>

                        {/* Headline */}
                        <h2 className="font-extrabold tracking-tight text-[#0f0f1a] leading-[1.15] text-[1.9rem] sm:text-[2.3rem] lg:text-[2.6rem] mb-6">
                            AMC Lapses Do Not{" "}
                            <br className="hidden sm:block" />
                            Announce{" "}
                            <span className="relative inline-block">
                                Themselves.
                                <svg
                                    aria-hidden
                                    className="absolute -bottom-1 left-0 w-full"
                                    viewBox="0 0 260 8"
                                    fill="none"
                                    preserveAspectRatio="none"
                                    style={{ height: "5px" }}
                                >
                                    <path
                                        d="M2 5 Q65 2 130 5 Q195 8 258 3"
                                        stroke="#2ABFB0"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        fill="none"
                                    />
                                </svg>
                            </span>
                            <span className="text-[#6060a0] font-medium text-[1.3rem] sm:text-[1.6rem] lg:text-[1.8rem] block mt-2">
                                (Until It Is Too Late.)
                            </span>
                        </h2>

                        {/* Body */}
                        <p className="text-[#5a5a78] text-[0.96rem] leading-relaxed mb-6">
                            For most facility managers, AMC and warranty tracking lives in a
                            spreadsheet, a calendar reminder, or someone's memory. And when
                            that reminder gets missed — and it{" "}
                            <span className="text-[#0f0f1a] font-semibold italic">does</span>{" "}
                            get missed — the consequences are expensive.
                        </p>

                        {/* Pain points */}
                        <ul className="space-y-3 mb-7">
                            {PAIN_POINTS.map(({ icon, text }) => (
                                <li key={text} className="flex items-center gap-3">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#f0ecfa] flex items-center justify-center">
                                        {icon}
                                    </span>
                                    <span className="text-[0.93rem] text-[#3a3a5a] font-medium">{text}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Closing line */}
                        <p className="text-[0.96rem] text-[#5a5a78] leading-relaxed border-l-[3px] border-[#4B3080]/30 pl-4">
                            The problem is never the contract itself. It is the{" "}
                            <span className="text-[#0f0f1a] font-semibold">
                                lack of a system to track it.
                            </span>
                        </p>
                    </div>

                    {/* ── RIGHT: Illustration ── */}
                    <div className="w-full lg:w-[420px] flex-shrink-0 flex items-center justify-center">
                        <div className="w-full max-w-[400px] lg:max-w-none drop-shadow-xl">
                            <ContractAlertIllustration />
                        </div>
                    </div>

                </div>

                {/* ══ STATS ROW ══ */}
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4B3080]">
                            The Numbers That Matter
                        </span>
                        <div className="flex-1 h-px bg-gradient-to-r from-[#4B3080]/20 to-transparent" />
                    </div>
                    <p className="text-[1.1rem] sm:text-[1.25rem] font-bold text-[#0f0f1a] mb-8">
                        What an Expired AMC Really Costs You
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {STATS.map(({ value, suffix, detail, accent, bg }) => (
                            <div
                                key={value}
                                className="rounded-2xl border border-slate-100 p-5 shadow-[0_2px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_24px_rgba(75,48,128,0.10)] transition-shadow duration-200"
                                style={{ backgroundColor: bg }}
                            >
                                <p className="font-extrabold leading-none mb-1" style={{ color: accent, fontSize: "2rem" }}>
                                    {value}
                                    <span className="text-[1rem] font-semibold ml-1">{suffix}</span>
                                </p>
                                <p className="text-[0.82rem] text-[#5a5a78] leading-snug mt-2">{detail}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* ── Subtle bottom border accent ── */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#2ABFB0]/20 to-transparent" />
        </section>
    );
}