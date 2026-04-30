"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// ---------------------------------------------------------------------------
// Data — AMC Tracker specific
// ---------------------------------------------------------------------------
const COLUMNS = [
    {
        title: "Platform",
        links: [
            { label: "AMC & Warranty Tracker", href: "#features" },
            { label: "Contract Repository", href: "#features" },
            { label: "Automated Renewal Alerts", href: "#features" },
            { label: "Service History Logging", href: "#features" },
            { label: "Vendor Performance Tracking", href: "#features" },
        ],
    },
    {
        title: "More Modules",
        links: [
            { label: "Digital Asset Register", href: "#digital-asset-register" },
            { label: "Asset Register Breakdown", href: "#asset-register-breakdown" },
            { label: "Asset Health Monitoring", href: "#asset-health-monitoring" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About FusionEdge", href: "#about" },
            { label: "Blog & Insights", href: "#blogs" },
            { label: "Get a Free Demo", href: "#demo" },
            { label: "Contact Us", href: "#contact" },
        ],
    },
];

const SOCIALS = [
    { Icon: FaFacebookF, href: "#", label: "Facebook" },
    { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/fusionedgeservices/", label: "LinkedIn" },
    { Icon: FaXTwitter, href: "#", label: "X Twitter" },
];

const INDUSTRIES = [
    "Corporate Offices", "Hospitals", "Manufacturing",
    "Hotels", "Retail & Malls", "Education", "Airports",
];

// ---------------------------------------------------------------------------
// useReveal
// ---------------------------------------------------------------------------
function useReveal() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
            { threshold: 0.12 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return ref;
}

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------
export default function Footer() {
    const logoRef = useReveal();
    const col0Ref = useReveal();
    const col1Ref = useReveal();
    const col2Ref = useReveal();
    const contactRef = useReveal();
    const colRefs = [col0Ref, col1Ref, col2Ref];

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

        .footer-root {
          font-family: 'Outfit', sans-serif;
          position: relative;
          background: #ffffff;
          overflow: hidden;
        }

        /* ── ambient orbs ── */
        .footer-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(110px);
        }
        .footer-orb-1 {
          width: 400px; height: 400px;
          background: #5D1F73;
          top: -140px; left: -120px;
          opacity: 0.05;
        }
        .footer-orb-2 {
          width: 300px; height: 300px;
          background: #2ABFB0;
          bottom: -80px; right: -60px;
          opacity: 0.06;
        }
        .footer-orb-3 {
          width: 200px; height: 200px;
          background: #4B3080;
          top: 40%; right: 18%;
          opacity: 0.04;
        }

        /* ── watermark ── */
        .footer-watermark {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          font-size: clamp(52px, 11vw, 150px);
          font-weight: 800;
          white-space: nowrap;
          background: linear-gradient(135deg, rgba(93,31,115,0.07), rgba(42,191,176,0.07));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          pointer-events: none;
          letter-spacing: -2px;
          user-select: none;
        }

        /* ── staggered reveal ── */
        .footer-col {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.65s cubic-bezier(.22,1,.36,1), transform 0.65s cubic-bezier(.22,1,.36,1);
        }
        .footer-col.visible { opacity: 1; transform: translateY(0); }
        .footer-col:nth-child(1) { transition-delay: 0s; }
        .footer-col:nth-child(2) { transition-delay: 0.07s; }
        .footer-col:nth-child(3) { transition-delay: 0.14s; }
        .footer-col:nth-child(4) { transition-delay: 0.21s; }
        .footer-col:nth-child(5) { transition-delay: 0.28s; }

        /* ── column heading ── */
        .footer-col-title {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.8px;
          color: #2ABFB0;
          margin-bottom: 18px;
          position: relative;
          display: inline-block;
        }
        .footer-col-title::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 24px;
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, #5D1F73, #2ABFB0);
        }

        /* ── links ── */
        .footer-link {
          display: inline-block;
          color: #6B7280;
          font-size: 13.5px;
          text-decoration: none;
          position: relative;
          padding-bottom: 2px;
          transition: color 0.25s ease;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0%;
          height: 1.5px;
          border-radius: 2px;
          background: linear-gradient(90deg, #5D1F73, #2ABFB0);
          transition: width 0.3s cubic-bezier(.22,1,.36,1);
        }
        .footer-link:hover { color: #5D1F73; }
        .footer-link:hover::after { width: 100%; }

        /* ── social icons ── */
        .footer-social {
          width: 36px; height: 36px;
          border-radius: 10px;
          border: 1.5px solid #E5E7EB;
          background: #F9F8FC;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6B7280;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(.22,1,.36,1);
          position: relative;
          overflow: hidden;
        }
        .footer-social::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #5D1F73, #2ABFB0);
          opacity: 0;
          transition: opacity 0.3s;
          z-index: 0;
        }
        .footer-social:hover::before { opacity: 1; }
        .footer-social:hover {
          color: #fff;
          border-color: transparent;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(93,31,115,0.25);
        }
        .footer-social svg { position: relative; z-index: 1; }

        /* ── grid ── */
        .footer-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr 1fr 1fr;
          gap: 36px;
        }
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1.2fr 1fr 1fr 1fr; }
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr; }
        }

        /* ── bottom bar ── */
        .footer-bar {
          position: relative;
          z-index: 1;
          margin-top: 52px;
          padding-top: 22px;
          border-top: 1px solid #EDE9F8;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-bar-text { color: #9CA3AF; font-size: 12.5px; }
        .footer-bar-links { display: flex; gap: 20px; }
        .footer-bar-link {
          color: #9CA3AF;
          font-size: 12.5px;
          text-decoration: none;
          transition: color 0.25s;
        }
        .footer-bar-link:hover { color: #5D1F73; }

        /* ── industry pills ── */
        .footer-pill {
          display: inline-flex;
          align-items: center;
          font-size: 11.5px;
          color: #7a7a98;
          background: #f5f3fa;
          border: 1px solid #ede9f8;
          border-radius: 100px;
          padding: 3px 10px;
          white-space: nowrap;
        }
      `}</style>

            <footer className="footer-root" style={{ padding: "72px 24px 48px" }}>
                {/* Orbs */}
                <div className="footer-orb footer-orb-1" />
                <div className="footer-orb footer-orb-2" />
                <div className="footer-orb footer-orb-3" />

                {/* Watermark */}
                <div className="footer-watermark">FUSIONEDGE</div>

                <div className="max-w-7xl mx-auto">
                    <div className="footer-grid">

                        {/* ── Col 0: Brand ── */}
                        <div className="footer-col" ref={logoRef}>
                            {/* Logo — replace src with your actual logo */}
                            <Image
                                src="/FusionEdge_logo.png"
                                alt="FusionEdge"
                                width={300}
                                height={56}
                                className="mb-4 object-contain"
                                style={{ width: "auto", height: "46px" }}
                            />

                            <p style={{ color: "#6B7280", fontSize: "13.5px", lineHeight: "1.7", marginBottom: "16px", maxWidth: "220px" }}>
                                Never miss a contract. Never lose a warranty. Every AMC, every renewal — always on your radar.
                            </p>

                            {/* Industry pills */}
                            <div className="flex flex-wrap gap-1.5 mb-5" style={{ maxWidth: "240px" }}>
                                {INDUSTRIES.map((ind) => (
                                    <span key={ind} className="footer-pill">{ind}</span>
                                ))}
                            </div>

                            {/* Socials */}
                            <div className="flex gap-2.5">
                                {SOCIALS.map(({ Icon, href, label }) => (
                                    <a key={label} href={href} aria-label={label} className="footer-social">
                                        <Icon />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* ── Cols 1–3: Link columns ── */}
                        {COLUMNS.map((col, i) => (
                            <div key={col.title} className="footer-col" ref={colRefs[i]}>
                                <h6 className="footer-col-title">{col.title}</h6>
                                <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                    {col.links.map(({ label, href }) => (
                                        <li key={label}>
                                            <Link href={href} className="footer-link">{label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* ── Col 4: Contact + Legal ── */}
                        <div className="footer-col" ref={contactRef}>
                            <h6 className="footer-col-title">Contact Us</h6>
                            <ul style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                                <li>
                                    <a href="mailto:info@fusionedge.com" className="footer-link">info@fusionedge.com</a>
                                </li>
                                <li>
                                    <a href="tel:+919015122212" className="footer-link">+91-9015122212</a>
                                </li>
                                <li style={{ color: "#9CA3AF", fontSize: "12.5px" }}>
                                    India &amp; Singapore
                                </li>
                            </ul>

                            <h6 className="footer-col-title">Legal</h6>
                            <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                <li>
                                    <Link href="/privacy-policy" className="footer-link">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="#" className="footer-link">Cookie Policy</Link>
                                </li>
                                <li>
                                    <Link href="#" className="footer-link">Terms of Service</Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* ── Bottom bar ── */}
                    <div className="footer-bar">
                        <span className="footer-bar-text">
                            © {new Date().getFullYear()} FusionEdge. All rights reserved. Built for facility teams across India &amp; Singapore.
                        </span>
                        <div className="footer-bar-links">
                            <Link href="#" className="footer-bar-link">Terms</Link>
                            <Link href="/privacy-policy" className="footer-bar-link">Privacy</Link>
                            <Link href="#" className="footer-bar-link">Cookies</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}