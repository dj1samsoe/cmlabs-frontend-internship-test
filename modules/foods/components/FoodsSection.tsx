import React from "react";
import { ICategory } from "@/common/types/category";
import CategoryCard from "@/modules/foods/components/CategoryCard";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Link from "next/link";

async function getData() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function FoodsSection() {
  const data = await getData();
  // console.log(data);

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center pt-24 px-10">
      <div className="w-full flex text-start py-5">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            className="flex gap-0 items-center text-primary hover:underline transition-all duration-200"
            href="/"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Link
            className="flex gap-0 items-center text-primary hover:underline transition-all duration-200"
            href="/foods"
          >
            <MenuBookIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Foods
          </Link>
        </Breadcrumbs>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 bg-highlight px-10 py-5 rounded-md">
        <div className="max-w-[16rem]">
          <h1 className="text-3xl font-bold">Explore Culinary Delights</h1>
        </div>
        <div className="w-full">
          <p className="text-md text-secondary">
            Dive into a world of exquisite flavors with our mouthwatering menu,
            showcasing culinary excellence through the use of premium,
            thoughtfully selected ingredients.
          </p>
        </div>
      </div>
      <div className="w-full py-10 lg:gap-5 gap-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
        {data.categories.map((items: ICategory, index: number) => (
          <CategoryCard key={index} {...items} />
        ))}
      </div>
    </section>
  );
}
