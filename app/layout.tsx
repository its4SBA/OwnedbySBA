import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";
import { SITE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Salma Alaleeli | Software Engineer",
  description:
    "Portfolio of Salma Alaleeli, a Dubai-based Software Engineer building clean, responsive digital experiences.",
  openGraph: {
    title: "Salma Alaleeli | Software Engineer",
    description:
      "Portfolio of Salma Alaleeli, a Dubai-based Software Engineer building clean, responsive digital experiences.",
    url: SITE_URL,
    siteName: "ownedbysba.dev",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Salma Alaleeli | Software Engineer",
    description:
      "Portfolio of Salma Alaleeli, a Dubai-based Software Engineer building clean, responsive digital experiences."
  },
  alternates: {
    canonical: SITE_URL
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.variable, playfair.variable, "min-h-screen bg-[#050506] font-sans antialiased")}>
        {children}
      </body>
    </html>
  );
}
