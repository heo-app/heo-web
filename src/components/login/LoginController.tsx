import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LoginView from './LoginView';
import { getProfile as getProfileAction } from '../profile/action';
import { writeToLocalStorage } from 'src/chore/helpers';
import { APP_LANGUAGE } from 'src/chore/constants';

import type { MouseEvent, ReactElement } from 'react';

const LoginController = (): ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { i18n } = useTranslation();

  const navigateToHomepage = (): void => {
    navigate('/');
  };

  const changeAppLanguage = (event: MouseEvent<HTMLButtonElement>): void => {
    const selectedLanguage = event.currentTarget.name;

    i18n.changeLanguage(selectedLanguage);
    writeToLocalStorage(APP_LANGUAGE, selectedLanguage);
  };

  const onLoginButtonClick = (): void => {
    // todo this is fake login , and just get fake profile
    dispatch(getProfileAction({ successCallback: navigateToHomepage }) as any); //fixme any types
  };

  return <LoginView onLoginButtonClick={onLoginButtonClick} changeAppLanguage={changeAppLanguage} />;
};

export default LoginController;
