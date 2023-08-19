import "./globals.css";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import SubLayout from "./SubLayout";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slow Living With Dave",
  description: "Personal Website created with NextJS 13",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${nunito.className}`}>
        <SubLayout>{children}</SubLayout>
      </body>
    </html>
  );
}
