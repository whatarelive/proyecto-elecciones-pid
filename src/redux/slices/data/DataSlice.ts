import diputados from "../../../diputados/data/prueba.json";
import { createSlice } from '@reduxjs/toolkit';

interface ActionData {
    type: string,
    payload: {
        lastFilterView?: 'Province' | 'Town' | 'none',
        province?: string,
        town?: string
    }
}

export const DataSlice = createSlice({
    name: 'data',
    initialState: {
        lastFilterView: 'none',
        isLoading: true,
        diputados: diputados,
        province: 'La Habana',
        town: ''
    },
    reducers: {
        enableViewFilter: (state, action: ActionData) => {
            state.lastFilterView = action.payload?.lastFilterView!;
        },
        setDiputados: (state) => {
            state.diputados = diputados.filter(dp => dp.provincia === state.province)
        },
        provincefilter: (state, action: ActionData) => {
            state.province = action.payload?.province!;
            state.diputados = diputados.filter(dp => dp.provincia === state.province);
        },
        townFilter: (state, action: ActionData) => {
            state.town = action.payload?.town!;
            state.diputados = diputados.filter(dp => dp.municipio === state.town);
        }
    }
})

export const { enableViewFilter, setDiputados, provincefilter, townFilter } = DataSlice.actions;