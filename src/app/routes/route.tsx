import { ProtectedCategoryPage, ProtectedTaskPage } from "@/pages";
import { AppLayout } from "@/shared";
import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
const LoginPageLazy = React.lazy(() => import("../../pages/Login/LoginPage"));

export const router = createBrowserRouter([
   {
      path: "/",
      element: <AppLayout />,
      children: [
         {
            path: "/tasks",
            element: <ProtectedTaskPage />,
         },
         {
            path: "/categories",
            element: <ProtectedCategoryPage />,
         },
         {
            path: "/login",
            element: (
               <>
                  <Suspense fallback={<>loading...</>}>
                     <LoginPageLazy />
                  </Suspense>
               </>
            ),
         },
      ],
   },
]);
