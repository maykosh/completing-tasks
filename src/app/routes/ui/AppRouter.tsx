import { AppRoutesProps } from "@/shared";
import { Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { RequierAuth } from "./RequierAuth";
import { routeConfig } from "../routeConfig/routeConfig";

export const AppRouter = () => {
   const renderWithWrapper = useCallback((route: AppRoutesProps) => {
      const element = <Suspense fallback="">{route.element}</Suspense>;
      return (
         <Route
            key={route.path}
            path={route.path}
            element={
               route.authOnly ? <RequierAuth>{element}</RequierAuth> : element
            }
         />
      );
   }, []);
   return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};
