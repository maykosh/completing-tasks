import { api, Payload, ReturnData } from "@/shared";
import { createAsyncThunk } from "@reduxjs/toolkit";

type TAsyncThunkArg = {
   phone: string;
   password: string;
};

export const login = createAsyncThunk<Payload, TAsyncThunkArg>(
   "auth/login",
   async (body, ThunkApi) => {
      try {
         const res = await api.post<ReturnData>("/login", body);
         if (!res.data.success) {
            throw new Error("error");
         }
         localStorage.setItem("token", res.data.payload.token as string);
         return res.data.payload;
      } catch (error) {
         return ThunkApi.rejectWithValue(
            error instanceof Error ? error.message : "Unknown error"
         );
      }
   }
);
