import {
   api,
   CategoryData,
   CategoryRoot,
   DeleteCreateAsyncThunkTypes,
   DeleteCreateRes,
   RootTask,
   TaskPayload,
} from "@/shared";
import { createAsyncThunk } from "@reduxjs/toolkit";

type ThunkParams<T> = { type: DeleteCreateAsyncThunkTypes; params: T };

export const fetchTasks = createAsyncThunk<TaskPayload[], void>(
   "todo/fetchTasks",
   async (_, ThunkApi) => {
      try {
         const res = await api.get<RootTask>("/tasks");
         if (!res.data.success) {
            throw new Error("error");
         }
         return res.data.payload;
      } catch (error) {
         return ThunkApi.rejectWithValue(
            error instanceof Error ? error.message : "Unknown error"
         );
      }
   }
);

export const fetchCategories = createAsyncThunk<CategoryData[], void>(
   "todo/fetchCategories",
   async (_, ThunkApi) => {
      try {
         const res = await api.get<CategoryRoot>("/categories");
         if (!res.data.data) {
            throw new Error("error");
         }
         return res.data.data;
      } catch (error) {
         return ThunkApi.rejectWithValue(
            error instanceof Error ? error.message : "Unknown error"
         );
      }
   }
);

export const deleteTaskAndCategories = createAsyncThunk<
   number,
   ThunkParams<number>
>("todo/deleteTask", async (body, ThunkApi) => {
   try {
      const res = await api.delete<DeleteCreateRes>(
         `/${body.type}/${body.params}`
      );
      if (!res.data.success) {
         throw new Error("error");
      }
      return body.params;
   } catch (error) {
      return ThunkApi.rejectWithValue(error);
   }
});

export const createTask = createAsyncThunk<
   TaskPayload,
   ThunkParams<TaskPayload>
>("todo/createTask", async (body, ThunkApi) => {
   try {
      const res = await api.post<RootTask<TaskPayload>>(`/tasks`, body.params);
      if (!res.data.success) {
         throw new Error("не смогли создать новый task");
      }
      return res.data.payload;
   } catch (error) {
      return ThunkApi.rejectWithValue(error);
   }
});
