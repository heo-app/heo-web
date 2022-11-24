import { forwardRef } from 'react';

import { APP_NAME, HEADER_HEIGHT, OPEN_DRAWER_WIDTH, CLOSE_DRAWER_WIDTH } from 'src/chore/constants';
import { useStyles } from './AppLayoutStyles';
import { Drawer } from '../drawer';
import { Header } from '../header';

import type { FC } from 'react';
import type { AppLayoutViewProps } from './AppLayoutTypes';

const AppLayoutView: FC<AppLayoutViewProps> = forwardRef((props, forwardedRef) => {
  const { children, onHamburgerButtonClick } = props;

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header title={APP_NAME} height={HEADER_HEIGHT} onHamburgerButtonClick={onHamburgerButtonClick} />

      <div className={classes.headerAndContentContainer}>
        <Drawer
          ref={forwardedRef}
          openDrawerWidth={OPEN_DRAWER_WIDTH}
          closeDrawerWidth={CLOSE_DRAWER_WIDTH}
        />
        <div className={classes.contentContainer}>{children}</div>
      </div>
    </div>
  );
});

export default AppLayoutView;
