import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbare } from "./components/Navbare";
import { NavPro } from "./components/NavPro";

const Krylon = localFont({
  src: "./fonts/Krylon-Regular.woff",
  weight: "400",
});
const Nohemi = localFont({
  src: "./fonts/Nohemi-Regular.woff",
  weight: "400",
});

export const metadata: Metadata = {
  title: "tobias horra. portfolio",
  description: "tobias horra. portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={Krylon.className}>
        <NavPro/>
        {children}
      </body>
    </html>
  );
}
