import { FC } from 'react';

import { Posts } from '../posts';

import type { DashboardViewProps } from './DashboardTypes';

const DashboardView: FC<DashboardViewProps> = () => {
  return (
    <div style={{ display: 'flex', flex: 1 }}>
      <Posts />
    </div>
  );
};

export default DashboardView;
