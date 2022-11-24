import { createSlice } from '@reduxjs/toolkit';

import { readFromLocalStorage } from 'src/chore/helpers';
import { CASHED_USER } from 'src/chore/constants';
import { getProfile } from './action';

const initialState = {
  error: false,
  loading: false,
  value: readFromLocalStorage(CASHED_USER),
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {
    // here can add sync actions
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfile.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.error = true;
        state.value = action.payload;
      });
  },
});

export default profileSlice.reducer;
