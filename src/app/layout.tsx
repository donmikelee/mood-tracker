import "@/styles/main.scss";

import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import PwaInstallListener from "@/components/PwaInstallListener/PwaInstallListener";

const redditSans = localFont({
  src: [
    { path: "../assets/fonts/RedditSans-Regular.ttf", weight: "400" },
    { path: "../assets/fonts/RedditSans-Medium.ttf", weight: "500" },
    { path: "../assets/fonts/RedditSans-SemiBold.ttf", weight: "600" },
    { path: "../assets/fonts/RedditSans-Bold.ttf", weight: "700" },
  ],
});

export const metadata: Metadata = {
  title: "Mood Tracker",
  description: "Track your daily mood, sleep and reflections.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Mood Tracker",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#4865db",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={redditSans.className}>
        <PwaInstallListener />
        <div className="main-wrapper">{children}</div>
      </body>
    </html>
  );
}
