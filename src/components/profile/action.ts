import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { writeToLocalStorage } from '../../chore/helpers';
import { CASHED_USER } from '../../chore/constants';

interface GetProfileProps {
  successCallback?: EmptyArrowFunction;
}

export const getProfile = createAsyncThunk('profile/getProfile', async (props: GetProfileProps) => {
  const { successCallback } = props;
  const response = await axios.get('http://localhost:4000/getUser').catch(() => {
    return null;
  });

  const user = response?.data ?? null;

  if (user) {
    writeToLocalStorage(CASHED_USER, user);
    successCallback?.();
  }

  return user;
});
