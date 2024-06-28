import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        isView: false,
        value: {
            province: 'La Habana',
            town: 'La Lisa'
        }
    },
    reducers: {
        enableViewFilter: (state) => {
            state.isView = !state.isView;
        }
    }
})

export const { enableViewFilter } = filterSlice.actions;