
import { Inter } from "next/font/google";
import SetChapterTitle from '@/components/manga-components/SetChapterTitle'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SetChapterTitle/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
