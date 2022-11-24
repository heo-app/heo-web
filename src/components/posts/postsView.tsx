import type { FC } from 'react';

import { Post } from '../post';
import { useStyles } from './postsStyles';

import type { PostsViewProps } from './postsTypes';

const PostsView: FC<PostsViewProps> = (props) => {
  const { posts } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {posts.map((postProps) => (
        <Post {...postProps} />
      ))}
    </div>
  );
};

export default PostsView;
