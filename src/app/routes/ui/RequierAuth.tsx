import { useAppSelector } from "@/shared";
import { JSX, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RoutePath } from "../routeConfig/routeConfig";

export const RequierAuth = ({ children }: { children: JSX.Element }) => {
   const { isAuth } = useAppSelector((state) => state.auth);
   const token = localStorage.getItem("token");
   const location = useLocation();
   const navigate = useNavigate();
   useEffect(() => {
      if (!token && !isAuth) {
         navigate(RoutePath.login, {
            state: { from: location },
            replace: true,
         });
      }
   }, [isAuth, location, navigate, token]);
   if (!token && !isAuth) return null;
   return children;
};
