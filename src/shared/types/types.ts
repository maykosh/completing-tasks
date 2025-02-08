// login
export interface ReturnData {
   success: boolean;
   code: number;
   message: string;
   payload: Payload;
}

export interface Payload {
   name: string;
   phone: string;
   token: string;
}

export enum Status {
   Success = "success",
   Loading = "loading",
   Error = "error",
}

export type DeleteCreateRes = {
   code: number;
   message: string;
   payload: [];
   success: boolean;
};

export type DeleteCreateAsyncThunkTypes = "tasks" | "categories";

export type CreateResponse = RootTask<
   Omit<Omit<TaskPayload, "category">, "category_id">
>;

//tasks
export interface RootTask<T = TaskPayload[]> {
   success: boolean;
   code: number;
   message: string;
   payload: T;
}

export interface TaskPayload {
   id: number;
   task: string;
   description: string;
   is_done: boolean;
   category_id: number;
   category: TaskCategory;
}

export interface TaskCategory {
   id: number;
   user_id: number;
   name: string;
   created_at: string;
   updated_at: string;
}
// categories
export interface CategoryRoot {
   data: CategoryData[];
}

export interface CategoryData {
   id: number;
   name: string;
   created_at: string;
}
