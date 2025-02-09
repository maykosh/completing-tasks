import { fetchCategories } from "@/entities";
import { Category } from "@/features";
import { useAppDispatch, useAppSelector } from "@/shared";
import React from "react";
export const CategoryPage: React.FC = () => {
   const { categories } = useAppSelector((state) => state.todo);
   const dispatch = useAppDispatch();
   React.useEffect(() => {
      if (!categories || categories.length === 0) {
         dispatch(fetchCategories());
      }
   }, [categories, dispatch]);
   return (
      <>
         <Category />
      </>
   );
};

