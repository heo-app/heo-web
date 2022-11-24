import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: 'white',
      light: '#fff',
    },
    secondary: {
      main: '#ec6602',
      contrastText: `linear-gradient(
        90deg,
        hsla(94, 100%, 70%, 1) 0%,
        hsla(28, 65%, 70%, 1) 37%,
        hsla(0, 0%, 100%, 1) 74%,
        hsla(65, 100%, 93%, 1) 97%
      )`,
    },
  },
});
