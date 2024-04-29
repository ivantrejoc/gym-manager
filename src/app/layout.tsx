import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { StoreProvider } from '../redux';

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
      <body className=
      {montserrat.className}>
        <AppRouterCacheProvider>
          <StoreProvider>
          {children}
          </StoreProvider>
        
        </AppRouterCacheProvider>
       </body>
    </html>
  );
}
