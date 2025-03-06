import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { fetchCommentsByPostId, fetchPostById } from "../api/fetchers";
import { useUserContext } from "../context/UserContext";
import { CommentList } from "../components/CommentList";

export default function PostDetail() {
  const { users = [], isLoading: usersLoading, error: usersError } = useUserContext();
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);

  const {
    data: post,
    error: postError,
    isLoading: postLoading,
  } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => fetchPostById(postId),
    enabled: !isNaN(postId),
  });

  const user = users.find((u) => u.id === post?.userId);

  const {
    data: comments = [],
    error: commentsError,
    isLoading: commentsLoading,
  } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchCommentsByPostId(postId),
    enabled: !isNaN(postId),
  });

  if (isNaN(postId)) {
    return <div>Invalid post ID</div>;
  }

  if (postLoading || commentsLoading || usersLoading) {
    return <div>Loading...</div>;
  }

  if (postError || !post) {
    console.error("Error loading post:", postError);
    return <div>Error loading post details. Please try again later.</div>;
  }

  if (usersError) {
    console.error("Error loading users:", usersError);
  }

  if (commentsError) {
    console.error("Error loading comments:", commentsError);
  }

  return (
    <article>
      <div className="post-header">
        <h1>{post.title}</h1>
        <div className="post-meta">
          <Link to={`/user/${post.userId}`} className="post-author">
            <div className="post-author-info">
              <div className="post-author-name">{user?.name || "Unknown Author"}</div>
              <div className="post-author-role">Author</div>
            </div>
          </Link>
        </div>
      </div>

      <div className="post-content">
        {post.body}
      </div>

      <section className="comments-section">
        <h2>Comments ({comments.length})</h2>
        <CommentList comments={comments} />
      </section>
    </article>
  )
}
