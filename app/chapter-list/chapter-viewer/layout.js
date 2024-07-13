
import { Inter } from "next/font/google";
import SetChapterTitle from '@/components/manga-components/SetChapterTitle'
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <html lang="en">
        <SetChapterTitle/>
        <body className={inter.className}>{children}</body>
      </html>
    </Suspense>
  );
}
