import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Header } from "./components/Header";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gym Manager",
  description: "Management of sports facilities"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
