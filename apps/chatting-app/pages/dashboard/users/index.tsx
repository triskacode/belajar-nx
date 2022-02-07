import { DashboardUsersFeatureShell } from '@belajar-nx/dashboard/users/feature-shell';
import { SharedUiHomeLayout } from '@belajar-nx/shared-ui-home-layout';

export function Users() {
  return (
    <SharedUiHomeLayout title="Users">
      <DashboardUsersFeatureShell />
    </SharedUiHomeLayout>
  );
}

export default Users;
