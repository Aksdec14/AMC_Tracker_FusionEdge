"use client";

import { useState } from "react";

const FAQS = [
    {
        q: "Is it possible to have individual alert schedules on various contracts?",
        a: "Yes. You can set up advance notification schedules on each contract separately: whether you want a 30, 60 or 90 day warning before expiry.",
    },
    {
        q: "Am I able to monitor various vendors and contracts in different locations?",
        a: "Absolutely. FusionEdge allows you to view all your AMC and warranty contracts in all sites in a single centralised view with the option to filter by vendor, site or asset type.",
    },
    {
        q: "What will occur in case a vendor fails to fulfill a service commitment?",
        a: "FusionEdge monitors all service visits to the contract SLA. In case of a missed or late visit, it is marked and you have a record when you are handling the vendor.",
    },
    {
        q: "Can this be customised to our existing contract structure?",
        a: "Yes. The platform can be configured to suit your contract types, service categories, and internal approval processes.",
    },
    {
        q: "Are we secure in our contract data?",
        a: "Completely. Your data is encrypted using 256 bit AES encryption and can only be accessed by your authorised team and is permanently deleted in case you decide to abandon the platform.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section className="relative w-full overflow-hidden bg-[#ffffff] py-12 sm:py-18 lg:py-24">

            {/* Blobs */}
            <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-[0.06] hidden sm:block" style={{ background: "#5D1F73" }} />
            <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-[0.05] hidden sm:block" style={{ background: "#2ABFB0" }} />

            {/* Inner */}
            <div className="relative w-full px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-14 lg:py-16">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-20 items-start">

                    {/* LEFT */}
                    <div className="w-full lg:w-[280px] xl:w-[300px] lg:sticky lg:top-10 flex-shrink-0">
                        <p className="text-[0.68rem] font-bold tracking-[0.22em] uppercase mb-4" style={{ color: "#2ABFB0" }}>
                            Support
                        </p>
                        <h2
                            className="font-extrabold leading-[1.12] tracking-tighter mb-6"
                            style={{
                                color: "#5D1F73",
                                fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
                            }}
                        >
                            Got Questions?
                            We Have Answers.
                        </h2>

                        <div className="w-10 h-[3px] rounded-full mb-6" style={{ background: "#2ABFB0" }} />

                        <p className="text-[0.85rem] leading-relaxed mb-6" style={{ color: "#6b6b85" }}>
                            Can't find what you're looking for? Reach out to our support team anytime.
                        </p>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[0.82rem] font-bold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                            style={{ background: "#5D1F73" }}
                        >
                            Contact Support
                            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                                <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>

                    {/* RIGHT */}
                    <div className="flex-1 flex flex-col gap-3 w-full min-w-0">
                        {FAQS.map((faq, i) => {
                            const isOpen = openIndex === i;
                            return (
                                <div
                                    key={i}
                                    className="rounded-2xl overflow-hidden border transition-all duration-300"
                                    style={{
                                        borderColor: isOpen ? "#5D1F73" : "#e5e0ee",
                                        background: isOpen ? "#fff" : "#faf8fc",
                                        boxShadow: isOpen ? "0 4px 24px rgba(93,31,115,0.10)" : "none",
                                    }}
                                >
                                    <button
                                        onClick={() => toggle(i)}
                                        className="w-full flex items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left"
                                        aria-expanded={isOpen}
                                    >
                                        <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                                            <span
                                                className="flex-shrink-0 w-7 h-7 rounded-full text-[0.7rem] font-bold flex items-center justify-center transition-colors duration-200"
                                                style={{
                                                    background: isOpen ? "#5D1F73" : "#ede8f4",
                                                    color: isOpen ? "#fff" : "#5D1F73",
                                                }}
                                            >
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <span
                                                className="text-[0.86rem] sm:text-[0.93rem] font-bold leading-snug transition-colors duration-150"
                                                style={{ color: isOpen ? "#5D1F73" : "#1a0825" }}
                                            >
                                                {faq.q}
                                            </span>
                                        </div>

                                        <span
                                            className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                                            style={{
                                                background: isOpen ? "#5D1F73" : "#ede8f4",
                                                transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                                            }}
                                        >
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path
                                                    d="M6 1v10M1 6h10"
                                                    stroke={isOpen ? "#fff" : "#5D1F73"}
                                                    strokeWidth="1.8"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </span>
                                    </button>

                                    <div
                                        className="overflow-hidden transition-all duration-300 ease-in-out"
                                        style={{ maxHeight: isOpen ? "300px" : "0px", opacity: isOpen ? 1 : 0 }}
                                    >
                                        <div className="px-4 sm:px-6 pb-5 pl-[3.5rem] sm:pl-[4.25rem]">
                                            <div
                                                className="border-l-2 pl-3 sm:pl-4 text-[0.82rem] sm:text-[0.85rem] leading-relaxed"
                                                style={{ borderColor: "#2ABFB0", color: "#5a5a78" }}
                                            >
                                                {faq.a}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}