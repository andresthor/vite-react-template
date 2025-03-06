# Technical Test - Frontend Technical Lead

## Task information

As laid out in the e-mail I received.

> **Description**
> With this task we would like you to create a simple blog post reading application using React Native and JSONPlaceholder. JSONPlaceholder is a publicly available API that provides various read-only endpoints, more information can be found on their website: https://jsonplaceholder.typicode.com/. .

> **Base Requirements**
> I should be able to browse a list of all existing posts.
> I should be able to view a single post as well as any comments for that post.
> I should be able to see all posts by a given user.

> **Tech To Use**
> The only mandatory library for this task is `React`, apart from that you are free to use any publicly available library you like. Some of the tech we like to use: `TypeScript`, `Tanstack query`, `react testing library`, `axios`, `vite`, `prettier`, `eslint`, `date-fns`.Please note that while this task is focused on the code, care should also be taken with the site design.
> Submissions can be sent via a link to a git repository or in a zip file.

## Process

### Set up boilerplate

I'm very familiar with the basic stack and I have a template with boilerplate for `vite + react + typescript`. This template also sets up some defaults for `eslint` and `prettier`.

```bash
$ git clone https://github.com/andresthor/vite-react-typescript ravenpack-frontend-test
```

Let's replace the README.md with this file and make our first commit.

### Rough sketch of solution

Looking at the first two requirements, it's clear that we will have to render content from the following `JSONPlaceholder` endpoints: `/posts`, `/posts/:id`, `/posts/:id/comments`. We might also need the information about the users themselves `/users`.

The final requirement, which is listing all posts from a user, is possible from `/users/:id/posts`. However, we can also avoid creating another route and simply call it as a nested resource `/posts?userId=1`.

This means we should fetch some remaining packages for routing and fetching. To keep things simple, we can use `axios`, `tanstack query` (as mentioned in the intro) and `react-router`.

```bash
$ npm install @tanstack/react-query axios react-router-dom
```

To finish this step, we'll create the routes and some boilerplate components before we commit

```react
// src/routes/index.ts
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <PostsGrid />,
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
```
### Basic styling

The template included very little styling, and instead of using a library (since this is a small project) we can just copy in some basic `css variables` and start minimally styling the classes we have already created.

We can then style as we go and do an overhaul when we are closer to finished.

### Fetch posts data

- Let's create the first fetcher, `fetchPosts`, using `axios` and place it in `api/fetchers.ts`.
- We'll call the fetcher in the body of the `<PostsGrid />` component, using `tanstack-query`.
- We confirm data is being fetched via `console.log`. Everything seems to be okay!

### Fill `PostsGrid` component with data

- Decided on grid layout so ~`PostsList`~ -> `PostsGrid`
- Created `PostCard` component for the tiled layout
- Added `fetchUsers` so that `User` information can be displayed on `PostCard`

### Repeat for other two routes

- The user data is needed on multiple routes -> lifting fetch/state to `UserContext`
- `fetchPostsById`, `fetchPostsByUser` are very similar, but as mentioned above, we'll use the query params to fetch posts by `userId`
