import React from "react";
import Navbar from "../elements/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layouts({ children }: LayoutProps) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex min-h-screen max-w-screen-2xl">{children}</main>
    </>
  );
}
