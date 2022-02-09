import { DashboardPostsFeatureCreatePost } from '@belajar-nx/dashboard/posts/feature-create-post';
import { SharedUiHomeLayout } from '@belajar-nx/shared-ui-home-layout';

export function Create() {
  return (
    <SharedUiHomeLayout title="Create post">
      <DashboardPostsFeatureCreatePost />
    </SharedUiHomeLayout>
  );
}

export default Create;
