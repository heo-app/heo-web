import makeStyles from '@mui/styles/makeStyles';

import type { Theme } from '@mui/material';

export const useStyles = makeStyles<Theme>((theme) => ({
  appNameText: {
    background: theme.palette.secondary.contrastText,
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  },
}));
