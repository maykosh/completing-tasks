import { JSX, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RoutePath } from "../routeConfig/routeConfig";
import { authActions } from "@/entities";
import { useAppDispatch } from "@/shared";

export const RequierAuth = ({ children }: { children: JSX.Element }) => {
   const [token, setToken] = useState(localStorage.getItem("token"));
   const authAction = authActions;
   const dispatch = useAppDispatch();

   const location = useLocation();
   const navigate = useNavigate();
   useEffect(() => {
      const handleStorageChange = () => {
         setToken(localStorage.getItem("token"));
      };

      window.addEventListener("storage", handleStorageChange);
      
      if (!token) {
         dispatch(authAction.setAuth(false));
      }
      return () => {
         window.removeEventListener("storage", handleStorageChange);
      };
   }, [authAction, dispatch, token]);
   useEffect(() => {
      if (!token) {
         navigate(RoutePath.login, {
            state: { from: location },
            replace: true,
         });
      }
   }, [location, navigate, token]);
   if (!token) return null;
   return children;
};
