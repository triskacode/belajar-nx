import { DashboardFeatureShell } from '@belajar-nx/dashboard/feature-shell';
import { SharedUiHomeLayout } from '@belajar-nx/shared-ui-home-layout';

export function Dashboard() {
  return (
    <SharedUiHomeLayout title="Dashboard">
      <DashboardFeatureShell />
    </SharedUiHomeLayout>
  );
}

export default Dashboard;
