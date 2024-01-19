import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type CategoryViewState = {
  viewOption: string;
  setViewOption: (option: string) => void;
};

export const useCategoryViewStore = create<CategoryViewState>()(
  devtools(
    persist(
      (set) => ({
        viewOption: "grid",
        setViewOption: (option) => set(() => ({ viewOption: option })),
      }),
      {
        name: "category-view",
      }
    )
  )
);
