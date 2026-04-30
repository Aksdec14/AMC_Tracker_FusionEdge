"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden bg-[#eceef8] pt-20 sm:pt-24 pb-10">

            {/* ── World map background ── */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage: "url('/image.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center 75%",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.75,
                }}
            />

            {/* ── Gradient overlay ── */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 90% 55% at 50% 0%, rgba(236,238,248,0.98) 0%, rgba(236,238,248,0.72) 50%, transparent 100%)",
                }}
            />

            <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row lg:items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-16">

                {/* ══ LEFT: Content ══ */}
                <div className="flex flex-col items-start flex-1 min-w-0 w-full">

                    {/* Pill badge */}
                    <div className="mb-4 sm:mb-5">
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#c8cae8] bg-white/70 backdrop-blur-sm px-3.5 py-1.5 text-[0.74rem] sm:text-[0.78rem] font-medium text-[#4B3080] shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4B3080] opacity-60" />
                            Asset AMC Tracker
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-left font-extrabold tracking-tight text-purple-900 leading-[1.1]
                        text-[2rem] sm:text-[2.6rem] md:text-[3rem] lg:text-[2.8rem] xl:text-[3.2rem]
                        mb-4 sm:mb-5">
                        Never Miss a Contract.
                        <br />
                        <span className="relative inline-block">
                            <span className="relative z-10">Never Lose</span>
                            <svg
                                aria-hidden
                                className="absolute -bottom-1 left-0 w-full"
                                viewBox="0 0 300 8"
                                fill="none"
                                preserveAspectRatio="none"
                                style={{ height: "5px" }}
                            >
                                <path
                                    d="M2 5 Q75 2 150 5 Q225 8 298 3"
                                    stroke="#2ABFB0"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    fill="none"
                                />
                            </svg>
                        </span>{" "}
                        a Warranty.
                    </h1>

                    {/* Body copy */}
                    <p className="text-left text-[#5a5a78] text-[0.9rem] sm:text-[0.95rem] lg:text-[1rem]
                        max-w-full sm:max-w-[540px] lg:max-w-[480px] xl:max-w-[520px]
                        leading-relaxed mb-2">
                        Your AMC just expired. Your vendor never reminded you. And now that
                        critical asset has no service coverage, right when it needs attention
                        the most.
                    </p>
                    <p className="text-left text-[#5a5a78] text-[0.9rem] sm:text-[0.95rem] lg:text-[1rem]
                        max-w-full sm:max-w-[520px] lg:max-w-[460px] xl:max-w-[500px]
                        leading-relaxed mb-7 sm:mb-8">
                        FusionEdge Asset AMC Tracker makes sure that never happens again.{" "}
                        <span className="text-[#0f0f1a] font-medium">
                            Every contract. Every renewal. Every obligation.
                        </span>{" "}
                        Always on your radar.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex items-center justify-start gap-3 flex-wrap">
                        <Link
                            href="#demo"
                            className="inline-flex items-center gap-2
                                px-5 sm:px-6 py-2.5 sm:py-3
                                rounded-full text-[0.84rem] sm:text-[0.88rem] font-semibold text-white
                                bg-gradient-to-r from-[#4B3080] to-[#2ABFB0]
                                shadow-[0_4px_20px_rgba(75,48,128,0.35)]
                                hover:shadow-[0_6px_28px_rgba(75,48,128,0.5)]
                                hover:brightness-105 active:scale-[0.97]
                                transition-all duration-200"
                        >
                            Get a Free Demo
                            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
                                <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>

                        <Link
                            href="#contact"
                            className="inline-flex items-center
                                px-5 sm:px-6 py-2.5 sm:py-3
                                rounded-full text-[0.84rem] sm:text-[0.88rem] font-semibold text-[#0f0f1a]
                                bg-white border border-[#d0d2e8]
                                shadow-[0_2px_10px_rgba(0,0,0,0.06)]
                                hover:border-[#4B3080]/40 hover:shadow-[0_4px_16px_rgba(75,48,128,0.12)]
                                active:scale-[0.97] transition-all duration-200"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* ══ RIGHT: Image ══ */}
                <div className="flex-shrink-0 w-full lg:w-[44%] xl:w-[480px] flex items-start justify-center lg:justify-end">
                    <div
                        className="relative w-full rounded-2xl overflow-hidden shadow-[0_8px_48px_rgba(75,48,128,0.20)]"
                        style={{
                            height: "clamp(240px, 45vw, 480px)",
                            maxWidth: "clamp(300px, 100%, 520px)",
                        }}
                    >
                        <Image
                            src="/hero-dashboard.png"
                            alt="FusionEdge AMC Tracker Dashboard"
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 520px"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}