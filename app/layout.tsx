import type { Metadata, Viewport } from "next";
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

// 1. Modern Viewport Export
export const viewport: Viewport = {
  themeColor: "#EFE9E3",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fusionedge.io"),

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
    "FusionEdge",
  ],

  authors: [{ name: "FusionEdge", url: "https://fusionedge.io" }],
  creator: "FusionEdge",
  publisher: "FusionEdge",

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
        url: "/FusionEdge_logo.png", // Recommended: Use a specific 'AMC-Tracker-Preview.png' if available
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

  // 2. Metadata-driven Icons (Replaces manual head links)
  icons: {
    icon: [
      { url: "/fe_logo.png" }, // Using your specified fe_logo.png
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
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
  // 3. Aligned Schema.org Data (Specifically for AMC Tracker)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "FusionEdge AMC Tracker",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "Automated tracking for Annual Maintenance Contracts (AMC). Manage renewals, vendor obligations, and preventive maintenance alerts.",
        "url": "https://fusionedge.io/amc-tracker",
        "offers": {
          "@type": "Offer",
          "url": "https://fusionedge.io/amc-tracker",
          "priceCurrency": "USD",
        },
        "provider": {
          "@type": "Organization",
          "name": "FusionEdge",
          "url": "https://fusionedge.io",
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {/* Added consistent background color and min-h-screen for better layout stability */}
      <body className="min-h-screen bg-[#EFE9E3] text-[#1e2a38] flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}