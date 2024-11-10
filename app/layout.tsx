import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";

const segoe = localFont({
  src: [
    { path: "./fonts/Segoe UI.ttf", style: 'normal', weight: "400" },
    { path: "./fonts/Segoe UI Bold.ttf", style: 'normal', weight: "700" },
  ],
  variable: "--font-segoe"
});

export const metadata: Metadata = {
  title: "Well Built",
  description: "made by high-haseeb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${segoe.variable} font-segoe`}>{children}</body>
    </html>
  );
}
