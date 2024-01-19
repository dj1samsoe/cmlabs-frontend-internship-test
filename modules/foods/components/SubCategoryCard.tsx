"use client";
import { ICategory, ISubCategory } from "@/common/types/category";
import Card from "@/common/components/elements/Card";
import Image from "next/image";
import Link from "next/link";
import clsxm from "@/common/libs/clsxm";
import { useCategoryViewStore } from "@/common/hooks/useCategoryViewStore";
import useIsMobile from "@/common/hooks/useIsMobile";

interface SubCategoryProps extends ISubCategory {
  isCarousel?: boolean;
  isExcerpt?: boolean;
  view?: string;
}

export default function SubCategoryCard({
  isCarousel = false,
  isExcerpt = true,
  view = "list",
  strMeal,
  strMealThumb,
  idMeal,
}: SubCategoryProps) {
  const { viewOption } = useCategoryViewStore();
  const isMobile = useIsMobile();

  const strCategory = strMeal;

  return (
    <Link href={`/foods`}>
      <Card
        className={clsxm(
          "group relative flex items-center sm:flex-row gap-6 cursor-pointer lg:hover:scale-[102%] w-full",
          viewOption === "grid"
            ? "!flex-col h-full w-full"
            : "!flex-row sm:p-5 sm:px-6",
          isCarousel && "min-w-[350px]",
          !isExcerpt && "sm:h-[320px]"
        )}
      >
        <div className="w-fit relative">
          <Image
            src={strMealThumb}
            width={isMobile || viewOption === "grid" ? 400 : 240}
            height={200}
            alt={strMeal}
            className={clsxm(
              "rounded-xl sm:h-[8.5rem] object-cover",
              viewOption === "grid" ? "!rounded-xl !h-48" : ""
            )}
          />
          {viewOption === "grid" && (
            <div className="flex gap-1 absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 justify-center items-center text-white group-hover:opacity-80 rounded-xl text-sm font-medium">
              <span className="text-2xl font-bold text-center">{strMeal}</span>
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
}
