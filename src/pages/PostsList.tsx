import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../api/fetchers';

export default function PostsList() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    console.error('Error loading posts:', error);
    return <div>Error loading posts. Please try again later.</div>;
  }

  console.log('posts', posts);

  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
}
