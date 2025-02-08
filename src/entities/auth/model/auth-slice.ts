import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login } from "../api/authThunk";
import { Payload, Status } from "@/shared";

type TState = {
   login: string | null;
   // email: string | null;
   phone: string | null;
   status: Status;
};

const initialState: TState = {
   login: null,
   // email: null,
   phone: null,
   status: Status.Loading,
};

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder
         .addCase(login.pending, (state) => {
            state.status = Status.Loading;
         })
         .addCase(login.fulfilled, (state, action: PayloadAction<Payload>) => {
            // state.email = action.payload.name;
            state.login = action.payload.name;
            state.phone = action.payload.phone;
            state.status = Status.Success;
         })
         .addCase(login.rejected, (state) => {
            state.status = Status.Error;
         });
   },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
