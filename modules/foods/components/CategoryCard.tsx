"use client";
import { ICategory, ISubCategory } from "@/common/types/category";
import Card from "@/common/components/elements/Card";
import Image from "next/image";
import Link from "next/link";
import clsxm from "@/common/libs/clsxm";
import { HiOutlineArrowSmRight as ReadIcon } from "react-icons/hi";
import { useCategoryViewStore } from "@/common/hooks/useCategoryViewStore";
import useIsMobile from "@/common/hooks/useIsMobile";

interface CategoryProps extends ICategory {
  isCarousel?: boolean;
  isExcerpt?: boolean;
  view?: string;
}

export default function CategoryCard({
  isCarousel = false,
  isExcerpt = true,
  view = "list",
  strCategoryDescription,
  strCategory,
  strCategoryThumb,
}: CategoryProps) {
  const name = strCategory.toLowerCase();
  const trimmedContent =
    strCategoryDescription.slice(0, 75) +
    (strCategoryDescription.length > 75 ? "..." : "");
  const contentContainerClasses = clsxm(
    "flex flex-col self-center w-full flex-grow space-y-3 px-5 mb-5",
    view === "grid" ? "sm:w-full sm:!px-3" : ""
  );

  const { viewOption } = useCategoryViewStore();
  const isMobile = useIsMobile();

  return (
    <Link href={`/foods/${name}`}>
      <Card
        className={clsxm(
          "group relative flex items-center sm:flex-row gap-6 cursor-pointer border border-neutral-100 dark:border-neutral-900 lg:hover:scale-[102%] w-full",
          viewOption === "grid"
            ? "!flex-col sm:h-[400px] w-full"
            : "!flex-row sm:p-5 sm:px-6",
          isCarousel && "min-w-[350px]",
          !isExcerpt && "sm:h-[320px]"
        )}
      >
        <div className="w-fit relative">
          <Image
            src={strCategoryThumb}
            width={isMobile || viewOption === "grid" ? 500 : 240}
            height={200}
            alt={strCategory}
            className={clsxm(
              "sm:rounded-xl sm:h-[8.5rem] object-cover",
              viewOption === "grid" ? "!rounded-t-xl !rounded-b-none !h-60" : ""
            )}
          />
          {viewOption === "grid" && (
            <div className="flex gap-1 absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 justify-center items-center text-white group-hover:opacity-80 rounded-t-xl text-sm font-medium">
              <span className="text-2xl font-bold">{strCategory}</span>
              <ReadIcon size={20} />
            </div>
          )}
        </div>
        <article className={contentContainerClasses}>
          <h1 className="text-lg font-bold text-neutral-900 lg:group-hover:text-secondary transition-all duration-300">
            {strCategory}
          </h1>

          <p className="block leading-relaxed text-md text-neutral-900">
            {trimmedContent}
          </p>
        </article>
      </Card>
    </Link>
  );
}
