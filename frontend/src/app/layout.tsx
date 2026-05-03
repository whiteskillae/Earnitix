import type { Metadata, Viewport } from "next";
import { Sora, Outfit } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://earnetix.com"),
  title: {
    default: "Earnetix – Earn Through Content. Grow with Skills.",
    template: "%s | Earnetix",
  },
  description:
    "Earnetix is a creator-driven earning platform where you make money by creating reels, writing blogs, and completing digital tasks. Structured tasks, fair payouts, and a dedicated creator space.",
  keywords: [
    "earn money online",
    "creator earning platform",
    "earn by creating reels",
    "blog writing income",
    "affiliate tasks",
    "content creation earnings",
    "earnetix",
    "skill-based earning",
    "digital creator platform",
    "task-based income",
  ],
  authors: [{ name: "Earnetix" }],
  creator: "Earnetix",
  openGraph: {
    type: "website",
    locale: "en",
    url: "https://earnetix.com",
    siteName: "Earnetix",
    title: "Earnetix – Earn Through Content. Grow with Skills.",
    description:
      "A creator-driven earning platform. Create reels, write blogs, complete tasks — and get paid. Structured work, fair payouts.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Earnetix – Creator Earning Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Earnetix – Creator Earning Platform",
    description: "Earn by creating content. Structured tasks, fair payouts, personal blog pages.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${outfit.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* FAQPage + SoftwareApplication schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Earnetix",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "description": "A creator-driven earning platform where users generate income by completing digital tasks such as creating reels, writing blogs, and affiliate promotions.",
              "url": "https://earnetix.com",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
            }),
          }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col bg-mesh text-white font-sans"
        style={{ fontFamily: "var(--font-outfit), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
