import { Roboto } from "next/font/google";

import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: "Sunsab",
  description: "Solving problems, building products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body className={`${roboto.className} min-h-screen flex flex-col`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
