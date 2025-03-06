import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../api/fetchers';

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
  )
}

function PostsGrid() {
  const {
    data: posts = [],
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

  return (
    <>
      <h2 className="section-title">Latest Posts</h2>
      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-excerpt">{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default PostsWrapper;
