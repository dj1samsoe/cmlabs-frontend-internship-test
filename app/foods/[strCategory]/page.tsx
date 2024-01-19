// "use client";
import Card from "@/common/components/elements/Card";
import { useCategoryViewStore } from "@/common/hooks/useCategoryViewStore";
import useIsMobile from "@/common/hooks/useIsMobile";
import clsxm from "@/common/libs/clsxm";
import { ISubCategory } from "@/common/types/category";
import SubCategoryCard from "@/modules/foods/components/SubCategoryCard";
import axios from "axios";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import BackButton from "@/common/components/elements/BackButton";
// import React, { useEffect, useState } from "react";

const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: { strCategory: string };
}): Promise<Metadata> {
  const name =
    params.strCategory.slice(0, 1).toUpperCase() + params.strCategory.slice(1);
  return {
    title: name + " Categories | Meal Apps",
    description: "The best meal apps in the world",
  };
}

async function getDetailData(strCategory: string) {
  const res = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + strCategory
  );
  if (res.status !== 200) {
    throw new Error("Failed to fetch data");
  }

  return res.data;
}

export default async function SubCategorySection({
  params,
}: {
  params: { strCategory: string };
}) {
  const data = await getDetailData(params.strCategory);
  // console.log(data);

  const name =
    params.strCategory.slice(0, 1).toUpperCase() + params.strCategory.slice(1);

  // const { viewOption } = useCategoryViewStore();
  // const isMobile = useIsMobile();
  if (data) {
    return (
      <section className="flex min-h-screen w-full flex-col items-center justify-center pt-24 px-10">
        <BackButton />
        <h1 className="text-3xl font-bold">
          <span className="text-primary">{name}</span> Categories
        </h1>
        <div className="w-full py-10 gap-7 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
          {data.meals.map((items: ISubCategory, index: number) => (
            <Link href={`/foods/${params.strCategory}/${items.idMeal}`}>
              <Card
                className={clsxm(
                  "group relative flex items-center cursor-pointer lg:hover:scale-[102%] w-full"
                )}
              >
                <div className="w-full relative">
                  <Image
                    src={items.strMealThumb}
                    width={300}
                    height={300}
                    alt={items.strMeal}
                    className={clsxm("rounded-xl object-cover w-full h-full")}
                  />

                  <div className="flex gap-1 absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 justify-center items-center text-white group-hover:opacity-80 rounded-xl text-sm font-medium">
                    <span className="text-2xl font-bold text-center">
                      {items.strMeal}
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    );
  }

  // if (description) {
  //   return (
  //     <section className="flex min-h-screen w-full flex-col items-center justify-center pt-24 px-10">
  //       <h1 className="text-3xl font-bold">
  //         <span className="text-primary">{params.idMeal}</span> Categories
  //       </h1>
  //       <div className="w-full py-10 gap-7 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
  //         {description.meals.map((items: ISubCategory, index: number) => (
  //           <Link href={`/foods/${params.strCategory}/${items.idMeal}`}>
  //             <Card
  //               className={clsxm(
  //                 "group relative flex items-center cursor-pointer lg:hover:scale-[102%] w-full"
  //               )}
  //             >
  //               <div className="w-full relative">
  //                 <Image
  //                   src={items.strMealThumb}
  //                   width={300}
  //                   height={300}
  //                   alt={items.strMeal}
  //                   className={clsxm("rounded-xl object-cover w-full h-full")}
  //                 />

  //                 <div className="flex gap-1 absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 justify-center items-center text-white group-hover:opacity-80 rounded-xl text-sm font-medium">
  //                   <span className="text-2xl font-bold text-center">
  //                     {items.strMeal}
  //                   </span>
  //                 </div>
  //               </div>
  //             </Card>
  //           </Link>
  //         ))}
  //       </div>
  //     </section>
  //   );
  // }
}
