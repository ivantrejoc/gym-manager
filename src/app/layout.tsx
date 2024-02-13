import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HorizontalNav from "./components/HorizontalNav/HorizontalNav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gym Manager",
  description: "Magement of sports facilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HorizontalNav />
        {children}</body>
    </html>
  );
}
