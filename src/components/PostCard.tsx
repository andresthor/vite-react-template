import { Link } from 'react-router-dom';
import { Post, User } from '../types';

interface PostCardProps {
  post: Post;
  user: User | undefined;
}

export default function PostCard({ post, user }: PostCardProps) {
  const excerpt = `${post.body.substring(0, 100)}...`;
  return (
    <article className="post-card">
      <div className="post-card-image-container">
        <img src={'/placeholder.svg'} alt={post.title} className="post-card-image" />
      </div>
      <div className="post-card-content">
        <Link to={`/posts/${post.id}`}>
          <h3 className="post-card-title">{post.title}</h3>
        </Link>
        <p className="post-card-excerpt">{excerpt}</p>
      </div>
      <div className="post-card-footer">
        <Link to={`/user/${post.userId}`} className="post-author">
          <div className="avatar">
            <img
              src={'/placeholder.svg'}
              alt={user?.name || 'Unknown Author'}
              className="avatar-image"
            />
          </div>
          <span className="post-author-name">{user?.name || 'Unknown Author'}</span>
        </Link>
        {/* <time dateTime={post.date}>{formatDate(post.date)}</time> */}
      </div>
    </article>
  );
}
