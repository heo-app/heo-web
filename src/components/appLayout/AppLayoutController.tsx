import { FC, ForwardedRef, memo, useRef } from 'react';

import AppLayoutView from './AppLayoutView';

import type { AppLayoutControllerProps } from './AppLayoutTypes';
import type { ToggleDrawer } from '../drawer/DrawerTypes';

const appLayoutController: FC<AppLayoutControllerProps> = (props) => {
  const { children } = props;

  const drawerRef = useRef<{ toggleDrawer: ToggleDrawer }>();

  /**
   * trigger drawer toggleDrawer local function trough its reference
   * @function onHamburgerButtonClick
   * @returns {void}
   */
  const onHamburgerButtonClick: ToggleDrawer = (): void => {
    // here has been used optional chaining because of first render delay and it doesn't effect in user experience
    drawerRef.current?.toggleDrawer();
  };

  return (
    <AppLayoutView
      children={children}
      onHamburgerButtonClick={onHamburgerButtonClick}
      ref={drawerRef as ForwardedRef<{ toggleDrawer: ToggleDrawer }>}
    />
  );
};

// true in the next line will cause to always memorize this component and render it only one time
// fixme: cannot navigate when change it to true
export default memo(appLayoutController, () => false);
