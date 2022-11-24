import type { PostControllerProps } from '../post/postTypes';

export interface PostsControllerProps {
  [key: string]: unknown;
}

export interface PostsViewProps {
  posts: Array<PostControllerProps>;
}
