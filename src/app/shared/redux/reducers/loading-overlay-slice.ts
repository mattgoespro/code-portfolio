import { createSlice } from '@reduxjs/toolkit';

export const loadingOverlaySlice = createSlice({
  name: 'loadingOverlay',
  initialState: {
    visible: false
  },
  reducers: {
    showLoadingOverlay: (state) => {
      state.visible = true;
    },
    hideLoadingOverlay: (state) => {
      state.visible = false;
    }
  }
});

export const { showLoadingOverlay, hideLoadingOverlay } = loadingOverlaySlice.actions;

export default loadingOverlaySlice.reducer;
