import clsxm from "@/common/libs/clsxm";
import { IDescription } from "@/common/types/category";
import axios from "axios";
import React from "react";
import Card from "@/common/components/elements/Card";
import Image from "next/image";
import { Metadata } from "next";
import BackButton from "@/common/components/elements/BackButton";

export async function generateMetadata({
  params,
}: {
  params: { idMeal: string };
}): Promise<Metadata> {
  const name = params.idMeal;
  return {
    title: "Meals ID: " + name + " | Meal Apps",
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

  // const trimmedSource = data.meals[0].strSource?.replace("http://www.", "");

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center pt-24 px-10">
      <BackButton />
      <div className="flex flex-col space-y-3 items-center">
        <h1 className="lg:text-3xl text-2xl font-bold text-center">
          {data.meals[0].strMeal}
        </h1>
        <p className="text-sm italic lg:text-start text-center">
          Sumber :{" "}
          <span className="text-primary">{data.meals[0].strSource}</span>
        </p>
      </div>

      {data.meals.map((items: IDescription, index: number) => (
        <>
          <div className="py-10 flex flex-col items-center space-y-5">
            <Image
              src={items.strMealThumb}
              width={300}
              height={300}
              alt={items.strMeal}
              className={clsxm("rounded-xl object-cover w-96 h-96")}
            />

            <div className="flex flex-col space-y-5">
              <h1 className="text-3xl font-medium">Instructions</h1>
              {items.strInstructions.split("\n").map((instruction, index) => (
                <p key={index} className="text-md">
                  {index + 1}. {instruction}
                </p>
              ))}
            </div>
          </div>
          <div className="w-full py-10 grid lg:grid-cols-4 grid-cols-1 gap-10">
            <div className="flex flex-col space-y-5">
              <h1 className="text-3xl font-medium">Recipes</h1>
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
            <div className="flex flex-col space-y-5 col-span-3">
              <h1 className="text-3xl font-medium">Tutorials</h1>
              <iframe src={trimmedURL} className="w-full h-96" />
            </div>
          </div>
        </>
      ))}
    </section>
  );
}
