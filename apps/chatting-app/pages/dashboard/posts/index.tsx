import { SharedUiHomeLayout } from '@belajar-nx/shared-ui-home-layout';
import { DashboardPostsFeatureShell } from '@belajar-nx/dashboard/posts/feature-shell';

export function Posts() {
  return (
    <SharedUiHomeLayout title="Dashboard">
      <DashboardPostsFeatureShell />
    </SharedUiHomeLayout>
  );
}

export default Posts;
