'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import {ReactElement} from "react";
import {I18nProviderClient} from "../../../locales/client";
const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ params: { locale }, children }: { params: { locale: string }, children: ReactElement }) {

  return (
    <html lang="en">
    <body className={`bg-bg-f2 dark:bg-gray-24 dark:bg-opacity-90 ${inter.className}`}>
    <I18nProviderClient locale={locale}>
        {children}
    </I18nProviderClient>
    </body>
    </html>
  );
}
