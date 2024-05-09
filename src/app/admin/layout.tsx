'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import {ReactElement} from "react";
import Header from "../../components/admin/header/Header";
const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({  children }: { children: ReactElement }) {

  return (
    <html>
    <body className={`${inter.className}`}>
      <Header />
      <main className="pt-10 container-center">
        {children}
      </main>

    </body>
    </html>
  );
}
