import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layouts from "@/common/components/layouts";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meal Apps",
  description: "The best meal apps in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader
          color="#6B240C"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #E48F45,0 0 5px #F5CCA0"
        />
        <Layouts>{children}</Layouts>
      </body>
    </html>
  );
}
