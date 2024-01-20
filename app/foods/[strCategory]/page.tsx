import Card from "@/common/components/elements/Card";

import clsxm from "@/common/libs/clsxm";
import { ISubCategory } from "@/common/types/category";

import axios from "axios";

import { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Link from "next/link";

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

  if (data) {
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
            <Link
              className="flex gap-0 items-center text-primary hover:underline transition-all duration-200"
              href={`/foods/${params.strCategory}`}
            >
              <FastfoodIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              {name}
            </Link>
          </Breadcrumbs>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 bg-highlight px-10 py-5 rounded-md">
          <h1 className="text-3xl font-bold text-center">{name} Variants</h1>

          <div className="w-full">
            <p className="text-md text-secondary">
              Explore a Diverse Culinary Tapestry of Delectable Food Variants,
              Each Offering a Unique Symphony of Flavors to Satisfy Every Palate
            </p>
          </div>
        </div>
        <div className="w-full py-10 gap-7 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 ">
          {data.meals.map((items: ISubCategory, index: number) => (
            <Link
              href={`/foods/${params.strCategory}/${items.idMeal}`}
              key={index}
            >
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

                  <div className="flex gap-1 absolute top-0 left-0 w-full h-full bg-black opacity-70 justify-center items-center  rounded-xl">
                    <span className="text-xl font-extrabold text-center text-white">
                      {items.strMeal.toUpperCase()}
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
}
