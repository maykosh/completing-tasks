import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login } from "../api/authThunk";
import { Payload, Status } from "@/shared";

type TState = {
   login: string | null;
   phone: string | null;
   status: Status;
   isAuth: boolean;
};

const initialState: TState = {
   login: null,
   phone: null,
   status: Status.Loading,
   isAuth: true,
};

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      setAuth: (state, action: PayloadAction<boolean>) => {
         state.isAuth = action.payload;
      },
   },
   extraReducers(builder) {
      builder
         .addCase(login.pending, (state) => {
            state.status = Status.Loading;
         })
         .addCase(login.fulfilled, (state, action: PayloadAction<Payload>) => {
            state.login = action.payload.name;
            state.phone = action.payload.phone;
            state.isAuth = true;
            state.status = Status.Success;
         })
         .addCase(login.rejected, (state) => {
            state.status = Status.Error;
            state.isAuth = false;
         })
   },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
