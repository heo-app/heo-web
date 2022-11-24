import { useState, forwardRef, useImperativeHandle } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { useTranslation } from 'react-i18next';

import DrawerView from './DrawerView';

import type { FC } from 'react';
import type { DrawerControllerProps, MenuItemInterface, ToggleDrawer } from './DrawerTypes';

const DrawerController: FC<DrawerControllerProps> = forwardRef((props, forwarderRef) => {
  const { openDrawerWidth, closeDrawerWidth } = props;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { t } = useTranslation();

  // this hook will fill forwarded ref with custom local functions
  useImperativeHandle(forwarderRef, () => ({
    toggleDrawer,
  }));

  /**
   * open or close drawer
   * @function toggleDrawer
   * @returns {void}
   */
  const toggleDrawer: ToggleDrawer = (): void => {
    setIsDrawerOpen((prevDrawerState) => !prevDrawerState);
  };

  const menuItems: Array<MenuItemInterface> = [
    {
      title: t('menu.home'),
      icon: <HomeIcon />,
      link: '/',
    },
    {
      title: t('menu.profile'),
      icon: <PersonIcon />,
      link: '/profile',
    },
  ];

  return (
    <DrawerView
      isDrawerOpen={isDrawerOpen}
      openDrawerWidth={openDrawerWidth}
      closeDrawerWidth={closeDrawerWidth}
      menuItems={menuItems}
    />
  );
});

export default DrawerController;
