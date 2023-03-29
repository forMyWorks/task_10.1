import { configureStore } from "@reduxjs/toolkit";

import reducer from "./popular/popular.slice";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
