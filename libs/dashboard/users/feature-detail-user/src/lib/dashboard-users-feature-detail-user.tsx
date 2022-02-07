import { useGetUserQuery } from '@belajar-nx/shared-data-access-user';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { StyledDashboardUsersFeatureDetailUser } from './dashboard-users-feature-detail-user.style';

export function DashboardUsersFeatureDetailUser() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useGetUserQuery(id as string);

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  return (
    <StyledDashboardUsersFeatureDetailUser>
      <h1>Welcome to DashboardUsersFeatureDetailUser!</h1>
    </StyledDashboardUsersFeatureDetailUser>
  );
}

export default DashboardUsersFeatureDetailUser;
