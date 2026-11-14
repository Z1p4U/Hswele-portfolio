import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hswele Ehin Tse — UI/UX & Product Designer",
  description:
    "Hswele Ehin Tse is a UI/UX and product designer creating clear, production-ready digital experiences across SaaS, travel, hospitality, and enterprise.",
  applicationName: "Hswele Ehin Tse Portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
