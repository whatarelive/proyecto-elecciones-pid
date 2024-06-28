import diputados from "../../../diputados/data/prueba.json";
import { createSlice } from '@reduxjs/toolkit';

interface ActionData {
    type: string,
    payload: {
        province?: string,
        town?: string
    }
}

export const DataSlice = createSlice({
    name: 'counter',
    initialState: {
        isLoading: true,
        diputados: diputados,
        province: 'La Habana',
        town: ''
    },
    reducers: {
        setDiputados: (state) => {
            state.diputados = diputados.filter(dp => dp.provincia === state.province)
        },
        provincefilter: (state, action: ActionData) => {
            state.province = action.payload.province!;
            state.diputados = diputados.filter(dp => dp.provincia === state.province);
        },
        townFilter: (state, action: ActionData) => {
            state.town = action.payload.town!;
            state.diputados = state.diputados.filter(dp => dp.municipio === state.town);
        }
    }
})

export const { setDiputados, provincefilter, townFilter } = DataSlice.actions;