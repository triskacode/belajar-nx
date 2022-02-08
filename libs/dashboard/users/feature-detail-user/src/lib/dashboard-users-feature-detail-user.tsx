import { useGetUserQuery } from '@belajar-nx/shared-data-access-user';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { StyledDashboardUsersFeatureDetailUser } from './dashboard-users-feature-detail-user.style';

export function DashboardUsersFeatureDetailUser() {
  const { id } = useRouter().query;

  const { data: user } = useGetUserQuery(id as string);

  return (
    <StyledDashboardUsersFeatureDetailUser>
      <div className="container">
        <h1>Detail User</h1>
        <form>
          <label>
            <span>ID</span>
            <input type="text" name="id" value={user?.id} disabled />
          </label>
          <label>
            <span>Email</span>
            <input type="text" name="email" value={user?.email} disabled />
          </label>
          <Link href={'/dashboard/users'}>
            <button type="button">Back</button>
          </Link>
        </form>
      </div>
    </StyledDashboardUsersFeatureDetailUser>
  );
}

export default DashboardUsersFeatureDetailUser;
