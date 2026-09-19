import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Youth for Change | Armenia",
    template: "%s | Youth for Change",
  },
  description:
    "Youth for Change is a youth-led civil society organization in Armenia working for youth participation, human rights and social justice since 2017.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
