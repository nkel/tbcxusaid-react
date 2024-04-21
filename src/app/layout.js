'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import {useEffect} from "react";
const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {

  const getMediaQueryPreference = () => {
    const mediaQuery = "(prefers-color-scheme: dark)";
    const mql = window.matchMedia(mediaQuery);
    const hasPreference = typeof mql.matches === "boolean";
    if (hasPreference) {
      return mql.matches ? "dark" : "light";
    }
  };

  useEffect(() => {
    const userSetPreference = localStorage.getItem("theme");
    if (userSetPreference === null) {
      const mediaQueryPreference = getMediaQueryPreference();
      localStorage.setItem("theme", mediaQueryPreference);
    }else{
      document.documentElement.setAttribute('class', userSetPreference);
    }
  }, []);


  return (
    <html lang="en">
    <body className={`bg-bg-f2 dark:bg-gray-24 dark:bg-opacity-90 ${inter.className}`}>
        {children}
    </body>
    </html>
  );
}
