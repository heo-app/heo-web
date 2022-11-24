import ProfileView from './profileView';

import type { FC } from 'react';
import type { ProfileControllerProps } from './profileTypes';

const ProfileController: FC<ProfileControllerProps> = () => {
  return <ProfileView />;
};

export default ProfileController;
