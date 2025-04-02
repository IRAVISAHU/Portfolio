import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ravi Sahu — Full Stack Engineer",
  description:
    "Full Stack Developer With Over 2 Years Of Experience In Crafting Scalable And High-Performance Web Applications.",
  generator: "Next.js",
  applicationName: "Ravi Sahu",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "backend",
    "react",
    "node",
    "next",
    "express",
    "frontend developer",
    "backend developer",
    "fullstack developer",
    "frontend engineer",
    "backend engineer",
    "fullstack engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "india",
    "software",
    "software developer",
    "portfolio",
    "fullstack developer portfolio",
    "frontend developer portfolio",
    "backend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Ravi Sahu — Full Stack Engineer",
    description:
      "Full Stack Developer With Over 2 Years Of Experience In Crafting Scalable And High-Performance Web Applications. ",
    url: "https://arpit-dev-portfolio.vercel.app/",
    siteName: "arpit-dev-portfolio.vercel.app",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
