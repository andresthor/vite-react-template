import { Comment } from '../types';

interface CommentListProps {
  comments: Comment[];
}

export function CommentList({ comments }: CommentListProps) {
  if (comments.length === 0) {
    return <p>No comments yet. Be the first to comment!</p>;
  }

  return (
    <div className="comments-list">
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <div className="avatar">
            <img src={'/user.png'} alt={comment.name} className="avatar-image" />
          </div>
          <div className="comment-content">
            <div className="comment-header">
              <span className="comment-author">{comment.name}</span>
            </div>
            <p className="comment-text">{comment.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
