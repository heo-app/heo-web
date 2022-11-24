import PostsView from './postsView';

import type { FC } from 'react';
import type { PostsControllerProps } from './postsTypes';
import type { PostControllerProps } from '../post/postTypes';

const PostsController: FC<PostsControllerProps> = () => {
  const posts: PostControllerProps[] = [
    {
      title: 'type an article',
      description: 'I need someone to type my new article ',
      type: 'demand',
      images: [
        {
          url: 'https://www.hamyarit.com/wp-content/uploads/2018/07/Touch-Typing.jpg-hamyarit.com-Touch-Typing.jpg',
        },
        { url: 'https://iranich.com/wp-content/uploads/2022/07/type_m85-300x300.jpg' },
      ],
    },
    {
      title: 'mechanic',
      description: 'I can fix your car',
      type: 'proffer',
      images: [{ url: 'https://homeservize.com/blog1/wp-content/uploads/2020/03/car-maintenance.jpg' }],
    },
    {
      title: 'type an article',
      description: 'I need someone to type my new article ',
      type: 'demand',
      images: [
        {
          url: 'https://www.hamyarit.com/wp-content/uploads/2018/07/Touch-Typing.jpg-hamyarit.com-Touch-Typing.jpg',
        },
        { url: 'https://iranich.com/wp-content/uploads/2022/07/type_m85-300x300.jpg' },
      ],
    },
    {
      title: 'mechanic',
      description: 'I can fix your car',
      type: 'proffer',
      images: [{ url: 'https://homeservize.com/blog1/wp-content/uploads/2020/03/car-maintenance.jpg' }],
    },
    {
      title: 'type an article',
      description: 'I need someone to type my new article ',
      type: 'demand',
      images: [
        {
          url: 'https://www.hamyarit.com/wp-content/uploads/2018/07/Touch-Typing.jpg-hamyarit.com-Touch-Typing.jpg',
        },
        { url: 'https://iranich.com/wp-content/uploads/2022/07/type_m85-300x300.jpg' },
      ],
    },
    {
      title: 'mechanic',
      description: 'I can fix your car',
      type: 'proffer',
      images: [{ url: 'https://homeservize.com/blog1/wp-content/uploads/2020/03/car-maintenance.jpg' }],
    },
  ];

  return <PostsView posts={posts} />;
};

export default PostsController;
