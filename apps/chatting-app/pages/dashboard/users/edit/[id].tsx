import { DashboardUsersFeatureEditUser } from '@belajar-nx/dashboard/users/feature-edit-user';
import { SharedUiHomeLayout } from '@belajar-nx/shared-ui-home-layout';

export function Edit() {
  return (
    <SharedUiHomeLayout title="Edit user">
      <DashboardUsersFeatureEditUser />
    </SharedUiHomeLayout>
  );
}

export default Edit;
