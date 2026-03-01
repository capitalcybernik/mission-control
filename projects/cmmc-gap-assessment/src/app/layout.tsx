import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CMMC Ready Now - Gap Assessment",
  description: "Get your free CMMC gap assessment in 10 minutes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50">
        {children}
      </body>
    </html>
  );
}
