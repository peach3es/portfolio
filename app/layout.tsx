import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "@/styles/globals.css";

import { Providers } from "./providers";
import NavBar from "@/components/navbar";

const oswald = Oswald({
  weight: ["200", "300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Peizhe Tian",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={oswald.className}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
