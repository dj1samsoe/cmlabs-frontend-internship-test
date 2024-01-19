import { ISubCategory } from "@/common/types/category";
import React from "react";
import DetailCard from "./SubCategoryCard";
import SubCategoryCard from "./SubCategoryCard";

async function getDetailData(slug: string) {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + slug
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function SubCategorySection({
  params,
}: {
  params: { slug: string };
}) {
  const detail = await getDetailData(params.slug);
  // console.log(detail);

  <section className="flex min-h-screen w-full flex-col items-center justify-center pt-24 px-10">
    <h1 className="text-3xl font-bold">
      See <span className="text-primary">{params.slug}</span> Categories
    </h1>
    <div className="w-full py-10 gap-5 lg:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
      {detail.categories.map((items: ISubCategory, index: number) => (
        <div key={index} className="">
          <SubCategoryCard {...items} />
        </div>
      ))}
    </div>
  </section>;
}
