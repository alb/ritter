import { configureStore } from '@reduxjs/toolkit';
import geoReducer from './features/geoSlice';

export default configureStore({
  reducer: {
    geoReducer: geoReducer,
  },
});
