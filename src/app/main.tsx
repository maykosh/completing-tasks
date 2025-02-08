import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { router } from "./routes/route";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
   <>
      <PersistGate persistor={persistor}>
         <Provider store={store}>
            <RouterProvider router={router} />
         </Provider>
      </PersistGate>
   </>
);
