import { useGetPostQuery } from '@belajar-nx/shared/data-access/post';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { StyledDashboardPostsFeatureDetailPost } from './dashboard-posts-feature-detail-post.style';

export function DashboardPostsFeatureDetailPost() {
  const { id } = useRouter().query;

  const { data: post } = useGetPostQuery(id as string);

  return (
    <StyledDashboardPostsFeatureDetailPost>
      <div className="container">
        <h1>Detail Posts</h1>
        <form>
          <label>
            <span>ID</span>
            <input type="text" name="id" value={post?.id} disabled />
          </label>
          <label>
            <span>Title</span>
            <input type="text" name="title" value={post?.title} disabled />
          </label>
          <label>
            <span>Author</span>
            <input
              type="text"
              name="author"
              value={post?.user?.email}
              disabled
            />
          </label>
          <label>
            <span>Content</span>
            <input type="text" name="content" value={post?.content} disabled />
          </label>
          <Link href={'/dashboard/posts'}>
            <button type="button">Back</button>
          </Link>
        </form>
      </div>
    </StyledDashboardPostsFeatureDetailPost>
  );
}

export default DashboardPostsFeatureDetailPost;
