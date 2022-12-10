import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { writeToLocalStorage } from '../../chore/helpers';
import { CASHED_USER } from '../../chore/constants';

interface GetProfileProps {
  successCallback?: EmptyArrowFunction;
}

export const getProfile = createAsyncThunk('profile/getProfile', async (props: GetProfileProps) => {
  const { successCallback } = props;
  axios
    .get('http://localhost:4000/getUser')
    .then((response) => {
      const user = response.data ?? null;

      if (user) {
        writeToLocalStorage(CASHED_USER, user);
        successCallback?.();
      }

      return user;
    })
    .catch((error) => {
      console.error('error: ', error);
      return null;
    });
});
