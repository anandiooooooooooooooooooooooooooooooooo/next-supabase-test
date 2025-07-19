import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jalur Mimpi",
  description: "Temukan dan wujudkan impianmu melalui peta karir interaktif",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className={inter.className + " bg-gray-50 text-gray-900"}>
        <Navbar />
        <main className="max-w-7xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
