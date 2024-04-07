import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../reducers/home.slice';

const store = configureStore({
  reducer: homeReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
