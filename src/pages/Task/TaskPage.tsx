import { fetchCategories, fetchTasks } from "@/entities";
import { useAppDispatch, useAppSelector, withLoginRedirect } from "@/shared";
import { TaskLayout } from "@/widgets";
import React from "react";

const TaskPage: React.FC = () => {
   const dispatch = useAppDispatch();
   const { task } = useAppSelector((state) => state.todo);
   React.useEffect(() => {
      if (!task || task.length === 0) {
         dispatch(fetchTasks());
         dispatch(fetchCategories());
      }
   }, [dispatch, task]);
   return (
      <div>
         <TaskLayout />
      </div>
   );
};

export const ProtectedTaskPage = withLoginRedirect(TaskPage);
