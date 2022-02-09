import { DashboardPostsFeatureDetailPost } from "@belajar-nx/dashboard/posts/feature-detail-post";
import { SharedUiHomeLayout } from "@belajar-nx/shared-ui-home-layout";

export function Detail() {
  return (
    <SharedUiHomeLayout title="Detail post">
      <DashboardPostsFeatureDetailPost />
    </SharedUiHomeLayout>
  );
}

export default Detail;
