import { configureStore } from "@reduxjs/toolkit";
import { bioSlice } from "./slices/bioInfo/bioSlice";
import { filterSlice } from "./slices/filter/filterSlice";
import { DataSlice } from './slices/data/DataSlice';

export const store = configureStore({
    reducer: {
        bio: bioSlice.reducer,
        filter: filterSlice.reducer,
        data: DataSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;