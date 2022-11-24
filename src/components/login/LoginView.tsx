import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import { useTranslation } from 'react-i18next';

import logo from '../../images/heo-hands.gif';
import { useStyles } from './LoginStyles';

import type { LoginViewProps } from './LoginTypes';
import { IconButton } from '@mui/material';

const LoginView: FC<LoginViewProps> = (props) => {
  const { onLoginButtonClick, changeAppLanguage } = props;
  const theme = useTheme();
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div>
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 h-screen">
        <div style={{ background: theme.palette.secondary.main }}>
          <div className="flex flex-col items-center xl:justify-center font-Dyna h-full pt-10">
            <img src={logo} alt="" height={300} width={400} />
            <h1 className={`text-4xl pt-5 ${classes.appNameText}`}>{t('login.welcomeMessage')}</h1>
            <h1 className="text-3xl">{t('login.appSlogan')}</h1>
          </div>
        </div>

        <div>
          <div className="h-12 my-5 xl:my-12">
            <div className="flex items-center justify-end gap-x-5 mx-5">
              <h1 className="font-Dyna text-xs">{t('login.createAccount')}</h1>
              <button className="bg-blue-200 py-2 px-3 rounded-sm text-black">{t('login.register')}</button>
            </div>
          </div>

          <div className="h-32">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl font-Dyna">{t('login.welcomeBack')}</h1>
              <h1 className="text-xs mt-3">{t('login.mainJob')}</h1>
              <h1 className="text-xs">{t('login.repetition')}</h1>
            </div>
          </div>

          <form className="flex flex-col mx-6 gap-y-2">
            <label className="text-sm">{t('login.username')}</label>
            <input
              className="bg-white shadow-sm shadow-gray-400 text-xs p2"
              placeholder={t('login.enterUsername') as string}
            ></input>
            <label className="text-sm">{t('login.password')}</label>
            <input
              className="bg-white shadow-sm shadow-gray-400 text-xs p2"
              placeholder={t('login.enterPassword') as string}
            ></input>

            <h1 className="flex justify-end text-xs text-blue-300">{t('login.forgetPassword')}</h1>
          </form>

          <div className="pt-2 mx-6">
            <button className="bg-blue-200 text-black w-full p-3 rounded-sm" onClick={onLoginButtonClick}>
              {t('login.startNow')}
            </button>
          </div>

          <div className="h-32 mt-6 flex items-center justify-center">
            <a>
              <div className="bg-blue-700 text-white shadow-sm shadow-gray-400 px-5 py-2 mb-4 flex flex-row items-center justify-between full">
                {t('login.signInWithGoogle')}
                <GoogleIcon className="text-red-500	ml-3" />
              </div>
            </a>
          </div>
          <div className="flex items-center justify-center">
            <IconButton name="fa" onClick={changeAppLanguage}>
              🇮🇷
            </IconButton>
            <IconButton name="en" onClick={changeAppLanguage}>
              🇺🇸
            </IconButton>
            <IconButton name="ar" onClick={changeAppLanguage}>
              🇸🇦
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
