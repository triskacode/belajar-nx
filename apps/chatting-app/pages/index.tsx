import { HomeFeatureShell } from '@belajar-nx/home/feature-shell';
import { SharedUiHomeLayout } from '@belajar-nx/shared-ui-home-layout';

export function Index() {
  return (
    <SharedUiHomeLayout title="Home">
      <HomeFeatureShell />
    </SharedUiHomeLayout>
  );
}

export default Index;
