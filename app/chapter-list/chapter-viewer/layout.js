
import { Inter } from "next/font/google";
import SetChapterTitle from '@/components/manga-components/SetChapterTitle'
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <SetChapterTitle/>
          {children}
        </Suspense>
          </body>
    </html>
  );
}
