import type { MouseEvent } from 'react';

export interface LoginViewProps {
  onLoginButtonClick: () => void;
  changeAppLanguage: (event: MouseEvent<HTMLButtonElement>) => void;
}
