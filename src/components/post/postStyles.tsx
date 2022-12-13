import makeStyles from '@mui/styles/makeStyles';

import type { Theme } from '@mui/material';
import type { PostStylesProps } from './postTypes';

export const useStyles = makeStyles<Theme, PostStylesProps>((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    border: '1px solid black',
    marginTop: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  profferCard: {
    width: 'fit-content',
    height: 'fit-content',
    margin: '10px auto',
    boxShadow: '0.5px 0px 3px 0.5px green',
    borderRadius: '7px',
    '& div ': {
      backgroundPositionY: 'center',
      backgroundPositionX: 'center',
      backgroundSize: 'cover',
    },
  },
  demandCard: {
    width: 'fit-content',
    height: 'fit-content',
    margin: '10px auto',
    paddingBottom: 10,
    boxShadow: '0.5px 0px 3px 0.5px orange',
    borderRadius: '7px',
  },
  profferTextContainer: {
    top: 0,
    width: '25%',
    height: 30,
    background: 'green',
    border: '1px solid gray',
    borderRadius: '0px 15px 50px 0px',
    alignSelf: 'flex-start',
  },
  demandTextContainer: {
    top: 0,
    width: '25%',
    height: 30,
    background: 'orange',
    border: '1px solid gray',
    borderRadius: '0px 15px 50px 0px',
    alignSelf: 'flex-start',
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
