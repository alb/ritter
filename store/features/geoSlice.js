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
        clearGeoJson: (state) => {
            state.geoJson = [];
        },
    },
});

export const { setGeoJson, clearGeoJson } = geoSlice.actions;

export default geoSlice.reducer;