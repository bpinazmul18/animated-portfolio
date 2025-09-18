import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "boxicons/css/boxicons.min.css"; // Adjust path if installed locally

import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nazmul's Portfolio",
  description: "Portfolio site built with Next.js",
  // themeColor: "#a789d4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="msapplication-TileColor" content="#da532c" />

        {/* External CSS */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/*=============== SCROLLREVEAL ===============*/}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/scrollReveal.js/4.0.9/scrollreveal.min.js"
          strategy="afterInteractive"
        />

        {/*=============== SWIPER JS ===============*/}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js"
          strategy="afterInteractive"
        />

        {/*=============== MAIN JS ===============*/}
        <Script src="./js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
