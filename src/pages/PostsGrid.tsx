import { useQuery } from '@tanstack/react-query';
import { fetchPosts, fetchUsers } from '../api/fetchers';
import PostCard from '../components/PostCard';

function PostsWrapper() {
  return (
    <div>
      <section className="hero-section">
        <h1 className="hero-title">The RavenPack Blog</h1>
        <p className="hero-description">A technical test disguised as a blog</p>
      </section>
      <section>
        <PostsGrid />
      </section>
    </div>
  );
}

function PostsGrid() {
  const {
    data: posts = [],
    error: postsError,
    isLoading: postsLoading,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  const {
    data: users = [],
    error: usersError,
    isLoading: usersLoading,
  } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (postsLoading || usersLoading) {
    return <div>Loading posts...</div>;
  }

  if (postsError || usersError) {
    console.error('Error loading data:', { postsError, usersError });
    return <div>Error loading posts. Please try again later.</div>;
  }

  return (
    <>
      <h2 className="section-title">Latest Posts</h2>
      <div className="posts-grid">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            user={users.find((user) => user.id === post.userId)}
          />
        ))}
      </div>
    </>
  );
}

export default PostsWrapper;
