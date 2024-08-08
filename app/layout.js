import { Inter } from "next/font/google";
import "./globals.css";
import SetHeadDescription from "@/components/layout-components/SetHeadDescription";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home | Zamir Reborn",
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
