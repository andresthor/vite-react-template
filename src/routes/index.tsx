import { RouteObject } from "react-router-dom";

import PostsList from "../pages/PostsList";
import PostDetail from "../pages/PostDetail";
import UserPosts from "../pages/UserPosts";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <PostsList />,
  },
  {
    path: "/posts/:id",
    element: <PostDetail />,
  },
  {
    path: "/user/:userId",
    element: <UserPosts />,
  },
];

