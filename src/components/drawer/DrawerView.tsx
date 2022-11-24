import { useStyles } from './DrawerStyles';
import { MenuItem, Typography } from '@mui/material';

import type { FC, ReactElement } from 'react';
import type { DrawerViewProps, MenuItemInterface } from './DrawerTypes';

const DrawerView: FC<DrawerViewProps> = (props) => {
  const { isDrawerOpen, menuItems, openDrawerWidth = 240, closeDrawerWidth = 40 } = props;

  const classes = useStyles({ openDrawerWidth, closeDrawerWidth });

  const createMenuItem = (
    item: MenuItemInterface,
    minimalMode: boolean,
    isLastItem: boolean,
  ): ReactElement => {
    const { title, icon, link } = item;

    return (
      <MenuItem
        style={{
          display: 'flex',
          height: 40,
          borderBottom: isLastItem ? 'unset' : '1px solid black',
          padding: '0 9px',
        }}
      >
        <a
          href={link}
          style={{
            display: 'flex',
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {icon}
          {!minimalMode && <Typography>{title}</Typography>}
        </a>
      </MenuItem>
    );
  };

  return (
    <div className={isDrawerOpen ? classes.openDrawerContainer : classes.closeDrawerContainer}>
      {menuItems.map((item, index, array) => createMenuItem(item, !isDrawerOpen, array.length === index + 1))}
    </div>
  );
};

export default DrawerView;
