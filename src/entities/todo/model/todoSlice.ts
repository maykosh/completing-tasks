import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
   createTask,
   deleteTaskAndCategories,
   fetchCategories,
   fetchTasks,
} from "../api/fetchToDo";
import { CategoryData, Status, TaskPayload } from "@/shared";

type TToDoState = {
   task: TaskPayload[];
   categories: CategoryData[];
   status: Status;
};

const initialState: TToDoState = {
   task: [],
   categories: [],

   status: Status.Loading,
};

const todoSlice = createSlice({
   name: "todo",
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder
         .addCase(fetchTasks.pending, (state) => {
            state.status = Status.Loading;
         })
         .addCase(
            fetchTasks.fulfilled,
            (state, action: PayloadAction<TaskPayload[]>) => {
               state.task = action.payload;
               state.status = Status.Success;
            }
         )
         .addCase(fetchTasks.rejected, (state) => {
            state.status = Status.Error;
            state.task = [];
         })
         .addCase(fetchCategories.pending, (state) => {
            state.status = Status.Loading;
         })
         .addCase(
            fetchCategories.fulfilled,
            (state, action: PayloadAction<CategoryData[]>) => {
               state.categories = action.payload;
               state.status = Status.Success;
            }
         )
         .addCase(fetchCategories.rejected, (state) => {
            state.categories = [];
            state.status = Status.Error;
         })
         .addCase(deleteTaskAndCategories.pending, (state) => {
            state.status = Status.Loading;
         })
         .addCase(deleteTaskAndCategories.fulfilled, (state, action) => {
            const { type, params } = action.meta.arg;
            if (type === "tasks") {
               state.task = state.task.filter((el) => el.id !== params);
            } else if (type === "categories") {
               state.categories = state.categories.filter(
                  (el) => el.id !== params
               );
            }
            state.status = Status.Success;
         })
         .addCase(deleteTaskAndCategories.rejected, (state) => {
            state.status = Status.Error;
         })
         .addCase(createTask.pending, (state) => {
            state.status = Status.Loading;
         })
         .addCase(
            createTask.fulfilled,
            (state, action: PayloadAction<TaskPayload>) => {
               state.task.push(action.payload);
               state.status = Status.Success;
            }
         )
         .addCase(createTask.rejected, (state) => {
            state.status = Status.Error;
         });
   },
});

export const ToDoAction = todoSlice.actions;
export const ToDoReducer = todoSlice.reducer;
