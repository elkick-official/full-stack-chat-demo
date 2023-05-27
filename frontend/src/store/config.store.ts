import { configureStore } from "@reduxjs/toolkit";
import { config } from "../config";
import { createBrowserHistory } from "history";
import { routerMiddleware as createRouterMiddleware } from "connected-react-router";

import { rootReducer } from "../reducers";

export const history = createBrowserHistory();
export const routerMiddleware = createRouterMiddleware(history);

const middlewareList = [routerMiddleware];

export const store = configureStore({
  reducer: rootReducer(history),
  middleware: [...middlewareList],
  devTools: config.APP_MODE === "development",
});
export type RootState = ReturnType<typeof store.getState>;
