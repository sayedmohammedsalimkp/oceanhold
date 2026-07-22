import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oceanhold Exports | Connecting Oceans. Delivering Trust.",
  description:
    "Oceanhold Exports connects global markets with premium Indian agricultural products — sorghum, millets, moringa and more.",
  openGraph: {
    title: "Oceanhold Exports",
    description: "Connecting Oceans. Delivering Trust.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
