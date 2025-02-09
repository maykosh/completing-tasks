import { AuthPage, CategoryPage, HomePage, LoginPage, TaskPage } from "@/pages";
import { AppLayout, AppRoutesProps } from "@/shared";

export enum AppRoutes {
   HOME = "home",
   LOGIN = "login",
   AUTH = "auth",
   TASKS = "tasks",
   CATEGORIES = "categories",
   // NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
   [AppRoutes.HOME]: "/",
   [AppRoutes.AUTH]: "/auth",
   [AppRoutes.LOGIN]: "/login",
   [AppRoutes.CATEGORIES]: "/categories",
   [AppRoutes.TASKS]: "/tasks",
   // [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
   [AppRoutes.HOME]: {
      path: "/",
      element: <AppLayout children={<HomePage />} />,
      authOnly: true,
   },
   [AppRoutes.AUTH]: {
      path: RoutePath.auth,
      element: <AppLayout children={<AuthPage />} />,
   },
   [AppRoutes.LOGIN]: {
      path: RoutePath.login,
      element: <AppLayout children={<LoginPage />} />,
   },
   [AppRoutes.CATEGORIES]: {
      path: RoutePath.categories,
      element: <AppLayout children={<CategoryPage />} />,
      authOnly: true,
   },
   [AppRoutes.TASKS]: {
      path: RoutePath.tasks,
      element: <AppLayout children={<TaskPage />} />,
      authOnly: true,
   },
};
