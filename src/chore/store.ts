import { configureStore } from '@reduxjs/toolkit';

import profileReducer from '../components/profile/profileSlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    // here can declare more reducers without use combineReducers
  },
});
