"use client";
import Link from "next/link";
import React from "react";
import ResponsiveDrawer from "./Drawer";
import useIsMobile from "@/common/hooks/useIsMobile";
import RestaurantIcon from "@mui/icons-material/Restaurant";

export default function Navbar() {
  const isMobile = useIsMobile();
  return (
    <nav className="w-full fixed top-0 z-50 flex justify-between items-center px-10 py-5 bg-white">
      <div className="flex items-center gap-2">
        <RestaurantIcon className="text-secondary" />
        <Link href="/" aria-label="Home">
          <h1 className="text-3xl font-bold">
            Meal <span className="text-primary">Apps</span>
          </h1>
        </Link>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-5">
          <li className="text-black hover:text-tertiary transition-all duration-200">
            <Link href="/" aria-label="Home">
              Home
            </Link>
          </li>
          <li className="text-black hover:text-tertiary transition-all duration-200">
            <Link href="/foods" aria-label="Foods">
              Foods
            </Link>
          </li>
          <li className="text-black hover:text-tertiary transition-all duration-200">
            <Link href="/" aria-label="Ingredients">
              Ingredients
            </Link>
          </li>
          <li className="text-black hover:text-tertiary transition-all duration-200">
            <Link href="/" aria-label="Culinary">
              Culinary
            </Link>
          </li>
        </ul>
      </div>
      {isMobile && <ResponsiveDrawer />}
    </nav>
  );
}
