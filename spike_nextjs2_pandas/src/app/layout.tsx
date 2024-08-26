import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MyNavBar from "@/components/MyNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pandas Spike",
  description: "Introduction to Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <h3>This is gonna be displayed everywhere</h3> */}
        <MyNavBar />

        <main>{children}</main>
      </body>
    </html>
  );
}
