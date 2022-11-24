import makeStyles from '@mui/styles/makeStyles';

import type { Theme } from '@mui/material';
import type { PostStylesProps } from './postTypes';

export const useStyles = makeStyles<Theme, PostStylesProps>((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    // background: ({ type }): string => { // fixme
    //   return type === 'proffer' ? theme.palette.grey['200'] : theme.palette.grey['400'];
    // },
    border: '1px solid black',
    marginTop: 5,
    justifyContent: 'center',
    alignContent: 'center',
  },
  profferCard: {
    background: theme.palette.grey['200'],
  },
  demandCard: {
    background: theme.palette.grey['400'],
  },
  containerText: {
    top: 0,
    width: '25%',
    height: 30,
    background: 'orange',
    border: '1px solid gray',
    borderRadius: '0px 15px 50px 0px',
  },
  textStyle: {
    fontFamily: 'dyna',
    paddingLeft: 5,
  },
  titleStyle: {
    marginTop: 5,
    paddingLeft: 5,
    alignSelf: 'center',
  },
  descriptionStyle: {
    marginTop: 10,
    alignSelf: 'center',
    paddingBottom: 10,
  },
  buttonStyle: {
    marginTop: 10,
    alignSelf: 'center',
    paddingBottom: 10,
  },
}));
