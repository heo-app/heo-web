import makeStyles from '@mui/styles/makeStyles';

import type { Theme } from '@mui/material';

export const useStyles = makeStyles<Theme>(() => ({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },

  headerAndContentContainer: {
    display: 'flex',
    flexDirection: 'row',
  },

  contentContainer: {
    display: 'flex',
    flex: 1,
  },
}));
