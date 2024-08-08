import SetHeadDescription from "@/components/layout-components/SetHeadDescription";
import { Inter } from "next/font/google";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chapters | Zamir Reborn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <SetHeadDescription/>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
