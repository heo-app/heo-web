import makeStyles from '@mui/styles/makeStyles';

import type { Theme } from '@mui/material';
import type { DrawerStylesProps } from './DrawerTypes';
import { ThemeContext } from '@emotion/react';

export const useStyles = makeStyles<Theme, DrawerStylesProps>((theme) => ({
  openDrawerContainer: {
    // width: ({ openDrawerWidth }): number => openDrawerWidth, // FIXME: use dynamic width
    width: 240,
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.primary.dark,
    boxShadow: '1px 4px 12px 1px orange',
    zIndex: 1,
    color: 'white',
    transition: 'width 0.5s',
  },

  closeDrawerContainer: {
    // width: ({ closeDrawerWidth }): number => closeDrawerWidth,// FIXME: use dynamic width
    width: 40,
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.primary.dark,
    boxShadow: '1px 4px 12px 1px orange',
    zIndex: 1,
    color: 'white',
    transition: 'width 0.5s',
  },
}));
