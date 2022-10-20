import { combineReducers, configureStore } from "@reduxjs/toolkit";

import postsReducer from "./posts";
import rootApi from "../services";

// Also can be used
const reducer = combineReducers({
  posts: postsReducer,
});

const state = configureStore({
  reducer: {
    [rootApi.reducerPath]: rootApi.reducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(rootApi.middleware);
  },
});

export type RootState = ReturnType<typeof state.getState>;
export type AppDispatch = typeof state.dispatch;

export default state;