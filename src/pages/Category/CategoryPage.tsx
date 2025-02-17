import { fetchCategories } from "@/entities";
import { Category } from "@/features";
import { useAppDispatch } from "@/shared";
import React from "react";
export const CategoryPage: React.FC = () => {
   const dispatch = useAppDispatch();
   React.useEffect(() => {
      dispatch(fetchCategories());
   }, [dispatch]);
   return (
      <>
         <Category />
      </>
   );
};
