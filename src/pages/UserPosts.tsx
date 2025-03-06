import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { fetchPostsByUser } from '../api/fetchers';
import { useUserContext } from '../context/UserContext';
import PostCard from '../components/PostCard';

export default function UserPosts() {
  const { users = [], isLoading: usersLoading, error: usersError } = useUserContext();
  const { userId } = useParams<{ userId: string }>();
  const numericUserId = Number(userId);

  const user = users.find((u) => u.id === numericUserId);

  const {
    data: posts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['userPosts', numericUserId],
    queryFn: () => fetchPostsByUser(numericUserId),
    enabled: !isNaN(numericUserId),
  });

  if (isNaN(numericUserId)) {
    return <div className="user-posts">Invalid user ID</div>;
  }

  if (isLoading || usersLoading) {
    return <div className="user-posts">Loading posts...</div>;
  }

  if (error || usersError || !user) {
    console.error('Error loading data:', { error, usersError });
    return <div className="user-posts">Error loading posts. Please try again later.</div>;
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="user-posts">
        <Link to="/" className="back-link">
          ← Back to Posts
        </Link>
        <p>No posts found for this user.</p>
      </div>
    );
  }
  return (
    <div>
      <section className="user-posts">
        <h2 className="section-title">Posts by {user.name}</h2>
        {posts.length > 0 ? (
          <div className="posts-grid">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} user={user} />
            ))}
          </div>
        ) : (
          <p>This user hasn't published any posts yet.</p>
        )}
      </section>
    </div>
  );
}
