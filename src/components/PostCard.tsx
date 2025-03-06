import { Post } from "../types"

interface PostCardProps {
  post: Post
}
export default function PostCard({ post }: PostCardProps) {
  return (
    <div key={post.id} className="post-card">
      <h3 className="post-title">{post.title}</h3>
      <p className="post-excerpt">{post.body}</p>
    </div>

  )
}
