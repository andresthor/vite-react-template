import { RouteObject } from 'react-router-dom';

import PostsGrid from '../pages/PostsGrid';
import PostDetail from '../pages/PostDetail';
import UserPosts from '../pages/UserPosts';
import About from '../pages/About';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <PostsGrid />,
  },
  {
    path: '/posts/:id',
    element: <PostDetail />,
  },
  {
    path: '/user/:userId',
    element: <UserPosts />,
  },
  {
    path: '/about',
    element: <About />,
  },
];
