"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
    { label: "Platform", href: "#platform" },
    { label: "Solutions", href: "#solutions" },
    { label: "Integrations", href: "#integrations" },
    { label: "Resources", href: "#resources" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/95 backdrop-blur-md shadow-[0_1px_24px_0_rgba(80,40,160,0.08)]"
                : "bg-white"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-[68px]">

                    {/* ── Logo ── */}
                    <Link
                        href="/"
                        className="flex items-center gap-2.5 flex-shrink-0 group"
                        aria-label="FusionEdge Home"
                    >
                        {/* Logo Image — place your logo file at /public/logo.png */}
                        <Image
                            src="/FusionEdge_logo.png"
                            alt="FusionEdge Logo"
                            width={200}
                            height={200}
                            className="object-contain"
                            priority
                        />
                    </Link>

                    {/* ── Desktop Nav Links ── */}
                    <ul className="hidden lg:flex items-center gap-1">
                        {NAV_LINKS.map(({ label, href }) => (
                            <li key={label}>
                                <Link
                                    href={href}
                                    className="relative px-3.5 py-2 text-[0.9rem] font-medium text-gray-600 rounded-lg
                    hover:text-gray-900 hover:bg-gray-50
                    transition-all duration-150
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B3FD4]/50
                    group"
                                >
                                    {label}
                                    <span className="absolute bottom-1 left-3.5 right-3.5 h-[1.5px] bg-gradient-to-r from-[#4B3080] to-[#2ABFB0] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* ── Desktop CTA ── */}
                    <div className="hidden lg:flex items-center">
                        <Link
                            href="#demo"
                            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[0.875rem] font-semibold text-white
                bg-gradient-to-r from-[#4B3080] to-[#2ABFB0]
                shadow-[0_2px_16px_0_rgba(75,48,128,0.35)]
                hover:shadow-[0_4px_24px_0_rgba(75,48,128,0.5)]
                hover:brightness-105
                active:scale-[0.97]
                transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B3080]/60 focus-visible:ring-offset-2"
                        >
                            Get a Free Demo
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                                <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>

                    {/* ── Mobile Hamburger ── */}
                    <button
                        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B3FD4]/50"
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                    >
                        <span
                            className={`block w-5 h-[1.75px] bg-gray-700 rounded-full transition-all duration-300 ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""
                                }`}
                        />
                        <span
                            className={`block w-5 h-[1.75px] bg-gray-700 rounded-full mt-[4px] transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""
                                }`}
                        />
                        <span
                            className={`block w-5 h-[1.75px] bg-gray-700 rounded-full mt-[4px] transition-all duration-300 ${menuOpen ? "-translate-y-[5.75px] -rotate-45" : ""
                                }`}
                        />
                    </button>
                </div>
            </nav>

            {/* ── Mobile Menu Panel ── */}
            <div
                className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="border-t border-gray-100 bg-white px-4 py-4 space-y-1">
                    {NAV_LINKS.map(({ label, href }) => (
                        <Link
                            key={label}
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-between px-3 py-3 rounded-xl text-[0.95rem] font-medium text-gray-700
                hover:text-gray-900 hover:bg-gray-50 active:bg-gray-100
                transition-colors duration-150"
                        >
                            {label}
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-gray-400" aria-hidden="true">
                                <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    ))}

                    {/* Mobile CTA */}
                    <div className="pt-3 pb-1">
                        <Link
                            href="#demo"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full text-[0.9rem] font-semibold text-white
                bg-gradient-to-r from-[#4B3080] to-[#2ABFB0]
                shadow-[0_2px_16px_0_rgba(75,48,128,0.3)]
                active:scale-[0.98] transition-all duration-150"
                        >
                            Get a Free Demo
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                                <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}