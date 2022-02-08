import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from '@belajar-nx/shared-data-access-user';
import Link from 'next/link';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { StyledDashboardUsersFeatureShell } from './dashboard-users-feature-shell.style';

export function DashboardUsersFeatureShell() {
  const { data: users, isLoading: isLoadingUsers } = useGetUsersQuery();
  const {
    mutate: deleteUser,
    isLoading: isLoadingDelete,
    error: errorDelete,
    isSuccess: isSuccessDelete,
  } = useDeleteUserMutation();

  useEffect(() => {
    if (isSuccessDelete) {
      toast('Delete Success', { type: 'success' });
    }
  }, [isSuccessDelete]);

  useEffect(() => {
    if (errorDelete && errorDelete.response?.status === 500) {
      toast('Whoops, something went wrong', { type: 'error' });
    }

    if (errorDelete && errorDelete.response?.status === 404) {
      toast('Invalid data, please try again later', { type: 'error' });
    }
  }, [errorDelete]);

  return (
    <StyledDashboardUsersFeatureShell>
      <div className="container">
        <div className="header-card">
          <h1>List User</h1>

          <Link href={`/dashboard/users/create`}>
            <button>create</button>
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th style={{ width: '100px' }}>ID</th>
              <th>Email</th>
              <th style={{ width: '250px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {!isLoadingUsers && users && users?.length > 0 ? (
              users.map((user, key) => (
                <tr key={key}>
                  <td style={{ textAlign: 'center' }}>{key + 1}</td>
                  <td>{user.email}</td>
                  <td style={{ textAlign: 'center' }}>
                    <Link href={`/dashboard/users/detail/${user.id}`}>
                      <button>detail</button>
                    </Link>
                    <Link href={`/dashboard/users/edit/${user.id}`}>
                      <button>edit</button>
                    </Link>
                    <button
                      onClick={() => deleteUser(user.id)}
                      disabled={isLoadingDelete}
                    >
                      {isLoadingDelete ? 'deleting' : 'delete'}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="empty-data">
                <td colSpan={3}>data kosong</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </StyledDashboardUsersFeatureShell>
  );
}

export default DashboardUsersFeatureShell;
