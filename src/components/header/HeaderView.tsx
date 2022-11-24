import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';

import type { FC } from 'react';
import type { HeaderViewProps } from './HeaderTypes';

const HeaderView: FC<HeaderViewProps> = (props) => {
  const { title, height = 50, onHamburgerButtonClick, onProfileIconClick, onLogoutClick } = props;
  const theme = useTheme();

  const username = useSelector(
    (state: {
      profile: {
        value: {
          firstName: string;
          lastName: string;
        };
      };
    }) => `${state.profile?.value?.firstName} ${state.profile?.value?.lastName}`,
  );

  const HeaderContainer = styled.div`
    background: ${theme.palette.secondary.main};
    height: ${height}px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
  `;

  const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${theme.palette.primary.light};
  `;

  const SimpleText = styled.h3`
    padding-left: 10px;
  `;

  const DesignedText = styled.h2`
    font-family: 'dyna';
    background: ${theme.palette.secondary.contrastText};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `;

  return (
    <HeaderContainer>
      <IconContainer>
        <MenuIcon onClick={onHamburgerButtonClick} />
      </IconContainer>

      <DesignedText>{title}</DesignedText>

      <IconContainer>
        <AccountCircleIcon onClick={onProfileIconClick} />
        <SimpleText>{username}</SimpleText>
        <LogoutIcon style={{ marginLeft: 10 }} onClick={onLogoutClick} />
      </IconContainer>
    </HeaderContainer>
  );
};

export default HeaderView;
