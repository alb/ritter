import { createSlice } from '@reduxjs/toolkit';

export const geoSlice = createSlice({
    name: 'geoJson',
    initialState: {
        geoJson: [],
    },
    reducers: {
        setGeoJson: (state, action) => {
            state.geoJson = action.payload;
        },
        setIndex: (state, action) => {
            state.geoJson[action.payload.index] = action.payload.value
        },
        clearGeoJson: (state) => {
            state.geoJson = [];
        },
    },
});

export const { setGeoJson, setIndex, clearGeoJson } = geoSlice.actions;

export default geoSlice.reducer;