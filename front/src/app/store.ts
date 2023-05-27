import { configureStore } from "@reduxjs/toolkit";
import recruiterSlice from "../features/recruiter/recruiterSlice";

export const store = configureStore({
  reducer: {
    recruiter: recruiterSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
