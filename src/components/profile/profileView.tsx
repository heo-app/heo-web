import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { Avatar, IconButton, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';

import { useStyles } from './profileStyles';
import profileImage from '../../images/Profile.png';

import type { FC } from 'react';
import type { ProfileViewProps } from './profileTypes';

const ProfileView: FC<ProfileViewProps> = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      width: '15px',
      height: '15px',
      bottom: '20px',
      right: '20px',
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        <div className={classes.header}>
          <div>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar
                sx={{ width: 160, height: 160, marginTop: 12, marginLeft: 4, border: '3px white solid' }}
                alt="profile_image"
                src={profileImage}
              />
            </StyledBadge>
          </div>
        </div>

        <div className={classes.editButtonContainer}>
          <IconButton>
            <p className={classes.editText}>{t('profile.editProfile')}</p>
            <EditIcon className={classes.editIcon} />
          </IconButton>
        </div>

        <Box sx={{ width: '100%' }}>
          <form>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
                <TextField
                  className={classes.textFields}
                  id="outlined-basic"
                  label={t('profile.firstName')}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  className={classes.textFields}
                  id="outlined-basic"
                  label={t('profile.lastName')}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  className={classes.textFields}
                  id="outlined-basic"
                  label={t('profile.mobile')}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  className={classes.textFields}
                  id="outlined-basic"
                  label={t('profile.email')}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.textFields}
                  id="outlined-basic"
                  label={t('profile.bio')}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </form>
        </Box>
      </div>
    </div>
  );
};

export default ProfileView;
