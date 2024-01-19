import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layouts from "@/common/components/layouts";
import NextTopLoader from "nextjs-toploader";
import { nunitoSans } from "@/common/styles/font";

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
      <body className={nunitoSans.className}>
        <NextTopLoader
          color="#2B2B2B"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #423F3E,0 0 5px #171010"
        />
        <Layouts>{children}</Layouts>
      </body>
    </html>
  );
}
