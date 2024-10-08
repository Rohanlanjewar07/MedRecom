import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header/header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HealthSage",
  description: "Developed by Group 13",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
