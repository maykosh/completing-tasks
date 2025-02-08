import { Delete } from "@/entities";
import { CartLayout, CategoryCard, useAppSelector } from "@/shared";
import React from "react";

export const Category: React.FC = () => {
   const { categories, status } = useAppSelector((state) => state.todo);
   const getActions = (id: number) => [
      <Delete params={id} key="delete" path={"categories"} />,
   ];
   return (
      <CartLayout status={status}>
         {categories.map((item) => (
            <CategoryCard
               key={item.id}
               item={item}
               actions={getActions(item.id)}
            />
         ))}
      </CartLayout>
   );
};
