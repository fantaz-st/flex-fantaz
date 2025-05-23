import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Flexbox Playground – Interactive CSS Flex-box Tester",
  description: "Tweak flex-direction, wrapping, alignment, child count, and box sizes in real time. Preview the layout instantly and copy the generated CSS for your own project.",
  keywords: ["CSS", "Flexbox", "flex-direction", "justify-content", "align-items", "web design", "layout", "playground"],
  authors: [{ name: "fantaz", url: "https://www.rebelde.hr" }],
  creator: "fantaz",
  openGraph: {
    title: "Flexbox Playground – Interactive CSS Flex-box Tester",
    description: "Live, visual sandbox for all the core Flexbox properties with instant CSS output.",
    url: "https://flex-fantaz.vercel.app/",
    siteName: "Flexbox Playground",
    /*  images: [
      {
        url: "https://your-domain.com/og-flexbox-playground.png",
        width: 1200,
        height: 630,
        alt: "Screenshot of the Flexbox Playground interface",
      },
    ], */
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flexbox Playground – Interactive CSS Flex-box Tester",
    description: "Play with Flexbox visually, adjust children on the fly, and copy ready-to-paste CSS.",
    /*  images: [
      "https://your-domain.com/og-flexbox-playground.png",
    ], */
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
