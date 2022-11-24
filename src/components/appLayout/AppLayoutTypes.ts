import type { ForwardedRef, ReactElement } from 'react';
import type { ToggleDrawer } from '../drawer/DrawerTypes';

export interface AppLayoutControllerProps {
  children: ReactElement;
}
export interface AppLayoutViewProps {
  onHamburgerButtonClick: ToggleDrawer;
  children: ReactElement;
  ref?: ForwardedRef<{ toggleDrawer: ToggleDrawer }>;
}
