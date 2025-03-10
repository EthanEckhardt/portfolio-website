import type { Metadata } from "next";
import { Fira_Code, Montserrat } from "next/font/google";
import "./globals.css";

const fontSans = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ethan Eckhardt",
  description: "Portfolio website for Ethan Eckhardt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
