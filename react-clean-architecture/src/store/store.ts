import { configureStore } from "@reduxjs/toolkit";
import { TodoSlice } from "./feature/todoSlice";

export const store = configureStore({
  reducer: {
    todo: TodoSlice.reducer,
  },
});

// allowing state to be accessed
export type RootState = ReturnType<typeof store.getState>;
// allowing state to be updated dispatch(action)
export type AppDispatch = typeof store.dispatch;
