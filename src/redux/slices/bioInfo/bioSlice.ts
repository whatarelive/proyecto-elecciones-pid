import { createSlice } from '@reduxjs/toolkit';

export const bioSlice = createSlice({
    name: 'bio',
    initialState: {
        view: false,
        idKey: -1,
    },
    reducers: {
        enableView: (state, action: { payload: { idKey: number }, type: string }) => {
            if ( state.idKey !== action.payload.idKey ) {
                state.view = false;
            }
            state.view = !state.view;
            state.idKey = action.payload.idKey;
        },
        disbleView: (state) => {
            state.view = false;
            state.idKey = -1;
        }
    }
})

export const { enableView, disbleView } = bioSlice.actions;