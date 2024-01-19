import FoodsPage from "@/modules/foods";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Foods | Meal Apps",
  description: "The best meal apps in the world",
};

export default function Foods() {
  return <FoodsPage />;
}
