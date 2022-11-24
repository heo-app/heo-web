import { useNavigate } from 'react-router-dom';

import HeaderView from './HeaderView';
import { removeFromLocalStorage } from 'src/chore/helpers';
import { CASHED_USER } from 'src/chore/constants';

import type { FC } from 'react';
import type { HeaderControllerProps } from './HeaderTypes';

const HeaderController: FC<HeaderControllerProps> = (props) => {
  const navigate = useNavigate();

  const onProfileIconClick = (): void => {
    navigate('/profile', { replace: true });
  };

  const onLogoutClick = (): void => {
    removeFromLocalStorage(CASHED_USER)
    navigate('/login', { replace: true });
  };

  return <HeaderView {...props} onProfileIconClick={onProfileIconClick} onLogoutClick={onLogoutClick} />;
};

export default HeaderController;
