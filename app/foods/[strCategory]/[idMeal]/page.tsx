import { IDescription } from "@/common/types/category";
import axios from "axios";
import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import KitchenIcon from "@mui/icons-material/Kitchen";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { idMeal: string };
}): Promise<Metadata> {
  const data = await getDescriptionData(params.idMeal);
  return {
    title: data.meals[0].strMeal + "" + " | Meal Apps",
    description: "The best meal apps in the world",
  };
}

async function getDescriptionData(idMeal: string) {
  const res = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + idMeal
  );
  if (res.status !== 200) {
    throw new Error("Failed to fetch data");
  }

  return res.data;
}

export default async function DescriptionPage({
  params,
}: {
  params: { idMeal: string };
}) {
  const data = await getDescriptionData(params.idMeal);
  // console.log(data);

  const trimmedURL = data.meals[0].strYoutube?.replace(
    "https://www.youtube.com/watch?v=",
    "https://www.youtube.com/embed/"
  );

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center pt-24 px-10">
      <div className="w-full flex justify-start py-5">
        <Breadcrumbs aria-label="breadcrumb" className="w-full">
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
            href={`/foods/${data.meals[0].strCategory}`}
          >
            <FastfoodIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            {data.meals[0].strCategory}
          </Link>
          <Link
            className="flex gap-0 items-center text-primary hover:underline transition-all duration-200"
            href={`/foods/${data.meals[0].strCategory}/${data.meals[0].idMeal}`}
          >
            <KitchenIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            {data.meals[0].strMeal}
          </Link>
        </Breadcrumbs>
      </div>
      <div className="flex flex-col space-y-3 items-center bg-highlight px-10 py-5 rounded-md w-full">
        <h1 className="text-3xl font-bold text-center">
          {data.meals[0].strMeal}
        </h1>

        <div className="flex flex-col space-y-0">
          <p className="text-md text-secondary">
            Category : {data.meals[0].strCategory || "-"}
          </p>
          <p className="text-md text-secondary">
            Tags : {data.meals[0].strTags ? data.meals[0].strTags : "-"}
          </p>
        </div>
      </div>

      {data.meals.map((items: IDescription, index: number) => (
        <div key={index}>
          <div className="py-10 flex md:flex-row flex-col gap-5">
            <div className="flex flex-col w-3/4">
              <Image
                src={items.strMealThumb}
                width={400}
                height={400}
                alt={items.strMeal}
                className="rounded-xl object-cover pb-5 w-full"
              />
              <div className="flex flex-col space-y-5">
                <h1 className="text-3xl font-semibold">Recipes : </h1>
                <div className="text-md">
                  <p>
                    {items.strMeasure1} {items.strIngredient1}
                  </p>
                  <p>
                    {items.strMeasure2} {items.strIngredient2}
                  </p>
                  <p>
                    {items.strMeasure3} {items.strIngredient3}
                  </p>
                  <p>
                    {items.strMeasure4} {items.strIngredient4}
                  </p>
                  <p>
                    {items.strMeasure5} {items.strIngredient5}
                  </p>
                  <p>
                    {items.strMeasure6} {items.strIngredient6}
                  </p>
                  <p>
                    {items.strMeasure6} {items.strIngredient7}
                  </p>
                  <p>
                    {items.strMeasure7} {items.strIngredient7}
                  </p>
                  <p>
                    {items.strMeasure8} {items.strIngredient9}
                  </p>
                  <p>
                    {items.strMeasure10} {items.strIngredient10}
                  </p>
                  <p>
                    {items.strMeasure11} {items.strIngredient11}
                  </p>
                  <p>
                    {items.strMeasure12} {items.strIngredient12}
                  </p>
                  <p>
                    {items.strMeasure13} {items.strIngredient13}
                  </p>
                  <p>
                    {items.strMeasure14} {items.strIngredient14}
                  </p>
                  <p>
                    {items.strMeasure15} {items.strIngredient15}
                  </p>
                  <p>
                    {items.strMeasure16} {items.strIngredient16}
                  </p>
                  <p>
                    {items.strMeasure17} {items.strIngredient17}
                  </p>
                  <p>
                    {items.strMeasure18} {items.strIngredient18}
                  </p>
                  <p>
                    {items.strMeasure19} {items.strIngredient19}
                  </p>
                  <p>
                    {items.strMeasure20} {items.strIngredient20}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <h1 className="text-3xl font-semibold pb-5">Instructions :</h1>
              {items.strInstructions.length > 0 &&
                items.strInstructions.split("\n").map((instruction, index) => (
                  <li key={index} className="text-md list-disc">
                    {instruction}
                  </li>
                ))}
            </div>
          </div>
          <div className="w-full py-10 flex flex-col space-y-5">
            <div className="flex flex-col space-y-5 col-span-3">
              <h1 className="text-3xl font-semibold text-center">
                Youtube Tutorials
              </h1>
              {items.strYoutube && items.strYoutube.length > 0 ? (
                <iframe
                  width="100%"
                  src={trimmedURL}
                  className="rounded-xl object-fit h-[400px]"
                  title={items.strMeal + " Youtube Video"}
                />
              ) : (
                <div className="flex flex-col space-y-3 w-full bg-highlight rounded-md">
                  <div className="text-red-500 flex gap-2 items-center justify-center">
                    <DoNotDisturbAltIcon />
                    <h1 className="text-3xl font-medium">Upss, Sorry.</h1>
                  </div>
                  <p className="text-md text-center">No Video Available</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
