import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imperium Hotel Surabaya — Luxury Redefined",
  description:
    "Experience unparalleled luxury at Imperium Hotel, Surabaya's finest 5-star destination. World-class rooms, dining, spa, and event facilities in the heart of the city.",
  keywords: "hotel surabaya, luxury hotel, imperium hotel, 5 star hotel surabaya",
  openGraph: {
    title: "Imperium Hotel Surabaya",
    description: "Luxury Redefined in the Heart of Surabaya",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
