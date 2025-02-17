import { fetchCategories, fetchTasks } from "@/entities";
import { Task } from "@/features";
import { useAppDispatch } from "@/shared";
import React from "react";

export const TaskPage: React.FC = () => {
   const dispatch = useAppDispatch();

   React.useEffect(() => {
      dispatch(fetchTasks());
      dispatch(fetchCategories());
   }, [dispatch]);
   
   return (
      <div>
         <Task />
      </div>
   );
};
