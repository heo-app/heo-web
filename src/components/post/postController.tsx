import PostView from './postView';

import type { FC } from 'react';
import type { PostControllerProps } from './postTypes';

const PostController: FC<PostControllerProps> = (props) => {
  const { title, description, type, images } = props;

  return <PostView title={title} description={description} type={type} images={images} />;
};

export default PostController;
