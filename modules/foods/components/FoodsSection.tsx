import { ICategory } from "@/common/types/category";
import CategoryCard from "@/modules/foods/components/CategoryCard";

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
      <h1 className="lg:text-3xl text-2xl font-bold">
        See <span className="text-primary">All Foods</span> Categories
      </h1>
      <div className="w-full py-10 lg:gap-5 gap-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
        {data.categories.map((items: ICategory, index: number) => (
          <CategoryCard key={index} {...items} />
        ))}
      </div>
    </section>
  );
}
