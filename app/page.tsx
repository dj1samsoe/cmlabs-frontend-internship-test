import Hero from "@/modules/home";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Home | Meal Apps",
  description: "The best meal apps in the world",
};

export default function Home() {
  return <Hero />;
}
