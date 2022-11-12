import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import loadingOverlayReducer from './Reducers/loading-overlay-slice';
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
  reducer: {
    loadingOverlay: loadingOverlayReducer
  },
  middleware: (defaultMiddleware) => {
    return [thunkMiddleware, ...defaultMiddleware()];
  },
  enhancers: [applyMiddleware()]
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
