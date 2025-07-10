import "@/styles/globals.css"; // Ensure you have a globals.css for Tailwind
import React from "react";
import Header from "../components/Header"; // Assuming Header is in components
import Footer from "../components/Footer"; // Assuming Footer is in components

export const metadata = {
  title: "Peta Impian",
  description: "AI-Powered Learning for Tomorrow's Leaders",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen font-sans flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
