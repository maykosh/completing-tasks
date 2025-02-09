import { useAppDispatch } from "@/shared";
import React from "react";
import { authActions } from "../../model/auth-slice";
import { useNavigate } from "react-router-dom";

export const Logout: React.FC = () => {
   const dispatch = useAppDispatch();
   const authAction = authActions;
   const navigate = useNavigate()
   const logout = () => {
      dispatch(authAction.setAuth(false));
      localStorage.removeItem("token");
      navigate("/login")
   };
   return <span onClick={logout} className=" align-bottom ">выход</span>;
};
