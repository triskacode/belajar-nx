import { DashboardPostsFeatureEditPost } from '@belajar-nx/dashboard/posts/feature-edit-post';
import { SharedUiHomeLayout } from '@belajar-nx/shared-ui-home-layout';

export function Edit() {
  return (
    <SharedUiHomeLayout title="Edit post">
      <DashboardPostsFeatureEditPost />
    </SharedUiHomeLayout>
  );
}

export default Edit;
