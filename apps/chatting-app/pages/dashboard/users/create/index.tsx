import { DashboardUsersFeatureCreateUser } from "@belajar-nx/dashboard/users/feature-create-user";
import { SharedUiHomeLayout } from "@belajar-nx/shared-ui-home-layout";

export function Create() {
  return (
    <SharedUiHomeLayout title="Create user">
      <DashboardUsersFeatureCreateUser />
    </SharedUiHomeLayout>
  );
}

export default Create;
