import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pastor Ministry Suite | Reclaim 13+ Hours Weekly",
  description: "Stop being a church administrator. Start being a pastor. 7 AI agents that handle the 70% of your week that's admin, so you can focus on the 30% that only you can do.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}