"use client";
import Link from "next/link";
import React from "react";
import ResponsiveDrawer from "./Drawer";
import useIsMobile from "@/common/hooks/useIsMobile";

export default function Navbar() {
  const isMobile = useIsMobile();
  return (
    <nav className="w-full fixed top-0 z-50 flex justify-between items-center px-7 py-5 bg-highlight/90 backdrop-blur-sm">
      <div className="flex items-center">
        <Link href="/" aria-label="Home">
          <h1 className="text-3xl font-bold">
            Meal <span className="text-primary">Apps</span>
          </h1>
        </Link>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-5">
          <li className="text-black hover:text-primary transition-all duration-200">
            <Link href="/" aria-label="Home">
              Home
            </Link>
          </li>
          <li className="text-black hover:text-primary transition-all duration-200">
            <Link href="/foods" aria-label="Foods">
              Foods
            </Link>
          </li>
          <li className="text-black hover:text-primary transition-all duration-200">
            <Link href="/ingredients" aria-label="Ingredients">
              Ingredients
            </Link>
          </li>
          <li className="text-black hover:text-primary transition-all duration-200">
            <Link href="/culinary" aria-label="Culinary">
              Local Culinary
            </Link>
          </li>
        </ul>
      </div>
      {isMobile && <ResponsiveDrawer />}
    </nav>
  );
}
