import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer, ToDoReducer } from "@/entities";

const rootReducer = combineReducers({
   auth: authReducer,
   todo: ToDoReducer,
});

const persistConfig: PersistConfig<RootState> = {
   key: "root",
   storage: storage,
   whitelist: ["todo"] as (keyof RootState)[],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDM) => getDM({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
