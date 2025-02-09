import React, { Suspense } from "react";
import { AppRouter } from "./routes";

export const App: React.FC = () => {
   return (
      <div>
         <Suspense fallback="">
            <AppRouter />
         </Suspense>
      </div>
   );
};
