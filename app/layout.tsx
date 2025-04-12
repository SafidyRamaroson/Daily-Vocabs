import type { Metadata } from "next";
import { LayoutProps } from "@/types/layout.type";
import "@/styles/globals.css";
import {  Roboto } from "next/font/google";
import QueryProvider from "@/providers/QueryProvider";
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap"
})

export const metadata: Metadata = {
  title: "Daily Vocabs",
};


export default function RootLayout({
  children,
}: Readonly<LayoutProps>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        <QueryProvider>{children}</QueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
