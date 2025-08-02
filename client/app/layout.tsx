import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico, Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import Providers from "@/redux/Provider";
import { Toaster } from "react-hot-toast";

import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-playfair' });

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soiress & Teepees",
  description: "Creating memorable slumber party experiences you’ll treasure forever.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${pacifico.variable} ${inter.variable} antialiased`}
      >
        <Providers>
          <Header/>
          {children}
          <Footer/>
          <Toaster/>
        </Providers>
      </body>
    </html>
  );
}
