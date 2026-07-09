import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import ToastWrapper from "@/providers/ToastWrapper";

/* ── Display font: Space Grotesk (headings, titles, CTAs) ─────────────── */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

/* ── Body font: Inter (body text, nav, buttons, forms) ────────────────── */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yosef Dagne",
  description: "Fullstack developer building the future with code...",
  icons: { icon: "/profile.jpg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="font-sans antialiased bg-gray-950 text-gray-100 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <ToastWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}
