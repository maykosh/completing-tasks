import React from "react";
import { CartLayout, TaskCard, useAppSelector } from "@/shared";
import { Delete } from "@/entities";

// https://api.dicebear.com/7.x/miniavs/svg?seed=15
export const Task: React.FC = () => {
   const { status, task } = useAppSelector((state) => state.todo);

   const getActions = (id: number) => [
      <Delete params={id} key="delete" path={"tasks"} />,
   ];

   return (
      <CartLayout status={status}>
         {task.map((item) => (
            <TaskCard key={item.id} item={item} actions={getActions(item.id)} />
         ))}
      </CartLayout>
   );
};
