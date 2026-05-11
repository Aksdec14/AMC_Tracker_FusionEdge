import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Asset AMC Tracker | FusionEdge",
    template: "%s | FusionEdge AMC Tracker",
  },
  description:
    "Track every Asset AMC contract, renewal date, and vendor obligation in one place. FusionEdge AMC Tracker sends proactive alerts before coverage lapses — so critical assets are always protected.",
  keywords: [
    "AMC tracker",
    "asset AMC management",
    "annual maintenance contract tracking",
    "asset maintenance software",
    "AMC renewal alerts",
    "facility management software",
    "asset contract management",
    "FusionEdge",
    "preventive maintenance",
    "CMMS",
  ],
  authors: [{ name: "FusionEdge", url: "https://fusionedge.io" }],
  creator: "FusionEdge",
  publisher: "FusionEdge",
  metadataBase: new URL("https://fusionedge.io"),
  alternates: {
    canonical: "/amc-tracker",
  },
  openGraph: {
    type: "website",
    url: "https://fusionedge.io/amc-tracker",
    title: "Asset AMC Tracker | FusionEdge",
    description:
      "Never let an AMC expire unnoticed. Track contracts, get renewal alerts, and keep every asset under active coverage with FusionEdge.",
    siteName: "FusionEdge",
    images: [
      {
        url: "/FusionEdge_logo.png",
        width: 1200,
        height: 630,
        alt: "FusionEdge Asset AMC Tracker – Contract & Renewal Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asset AMC Tracker | FusionEdge",
    description:
      "Never let an AMC expire unnoticed. Track contracts, get renewal alerts, and keep every asset under active coverage with FusionEdge.",
    images: ["/FusionEdge_logo.png"],
    creator: "@fusionedge",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="/fe_logo.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "FusionEdge Digital Asset Register",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "A single, living record of every facility asset across every site. QR code tagging, document management, and multi-site portfolio management — built for facility managers.",
              offers: {
                "@type": "Offer",
                url: "https://fusionedge.io/digital-asset-register",
              },
              provider: {
                "@type": "Organization",
                name: "FusionEdge",
                url: "https://fusionedge.io",
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "sales",
                  areaServed: ["IN", "SG"],
                },
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}