import { DashboardUsersFeatureDetailUser } from "@belajar-nx/dashboard/users/feature-detail-user";
import { SharedUiHomeLayout } from "@belajar-nx/shared-ui-home-layout";

export function Detail() {
  return (
    <SharedUiHomeLayout title="Detail user">
      <DashboardUsersFeatureDetailUser />
    </SharedUiHomeLayout>
  );
}

export default Detail;
