import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { profile } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jesserabbassi.github.io"),
  title: {
    default: "Jesser Abbassi | Full-Stack Engineer",
    template: "%s | Jesser Abbassi"
  },
  description:
    "Senior-level portfolio for Jesser Abbassi, a full-stack engineer focused on secure platforms, AI-assisted products, and interactive systems.",
  authors: [{ name: profile.name }],
  keywords: [
    "Jesser Abbassi",
    "Full-stack engineer",
    "Next.js",
    "ASP.NET Core",
    "React",
    "PostgreSQL",
    "Docker",
    "AI",
    "Unity"
  ],
  openGraph: {
    title: "Jesser Abbassi | Full-Stack Engineer",
    description: "Secure web platforms, AI-assisted products, and interactive systems.",
    type: "website",
    images: [{ url: "/images/kawi-niveau.png", width: 1200, height: 760, alt: "Jesser Abbassi portfolio preview" }]
  },
  icons: {
    icon: "/images/jesser-abbassi.jpg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">
        <Navbar />
        {children}
        <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-mist md:px-8">
          © 2026 Jesser Abbassi. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
        </footer>
      </body>
    </html>
  );
}
