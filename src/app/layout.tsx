import "@/styles/main.scss";

import localFont from "next/font/local";

const redditSans = localFont({
  src: [
    { path: "../assets/fonts/RedditSans-Regular.ttf", weight: "400" },
    { path: "../assets/fonts/RedditSans-Medium.ttf", weight: "500" },
    { path: "../assets/fonts/RedditSans-SemiBold.ttf", weight: "600" },
    { path: "../assets/fonts/RedditSans-Bold.ttf", weight: "700" },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={redditSans.className}>
        <div className="main-wrapper">{children}</div>
      </body>
    </html>
  );
}
