import { configureStore } from "@reduxjs/toolkit";
import { bioSlice } from "./slices/bioInfo/bioSlice";

export const store = configureStore({
    reducer: {
        bio: bioSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;