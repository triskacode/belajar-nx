import Link from "next/link";
import { StyledDashboardPostsFeatureDetailPost } from "./dashboard-posts-feature-detail-post.style";

export function DashboardPostsFeatureDetailPost() {
  return (
    <StyledDashboardPostsFeatureDetailPost>
      <div className="container">
        <h1>Detail Posts</h1>
        <form>
          {/* <label>
            <span>ID</span>
            <input type="text" name="id" value={user?.id} disabled />
          </label>
          <label>
            <span>Email</span>
            <input type="text" name="email" value={user?.email} disabled />
          </label> */}
          <Link href={'/dashboard/posts'}>
            <button type="button">Back</button>
          </Link>
        </form>
      </div>
    </StyledDashboardPostsFeatureDetailPost>
  );
}

export default DashboardPostsFeatureDetailPost;
