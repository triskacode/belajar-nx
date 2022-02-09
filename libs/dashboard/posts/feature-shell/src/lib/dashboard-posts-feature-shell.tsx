import { useGetPostsQuery } from '@belajar-nx/shared/data-access/post';
import Link from 'next/link';
import { StyledDashboardPostsFeatureShell } from './dashboard-posts-feature-shell.style';

export function DashboardPostsFeatureShell() {
  const { data: posts, isLoading: isLoadingPost } = useGetPostsQuery();

  return (
    <StyledDashboardPostsFeatureShell>
      <div className="container">
        <div className="header-card">
          <h1>List Post</h1>

          <Link href={`/dashboard/posts/create`}>
            <button>create</button>
          </Link>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th style={{ width: '100px' }}>ID</th>
                <th style={{ minWidth: '300px' }}>Title</th>
                <th style={{ width: '300px' }}>Author</th>
                <th style={{ width: '250px' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {!isLoadingPost && posts && posts?.length > 0 ? (
                posts.map((post, key) => (
                  <tr key={key}>
                    <td style={{ textAlign: 'center' }}>{key + 1}</td>
                    <td>{post.title}</td>
                    <td>{post.user.email}</td>
                    <td style={{ textAlign: 'center' }}>
                      <Link href={`/dashboard/posts/detail/${post.id}`}>
                        <button>detail</button>
                      </Link>
                      <Link href={`/dashboard/posts/edit/${post.id}`}>
                        <button>edit</button>
                      </Link>
                      {/* <button
                      onClick={() => deleteUser(post.id)}
                      disabled={isLoadingDelete}
                    >
                      {isLoadingDelete ? 'deleting' : 'delete'}
                    </button> */}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="empty-data">
                  <td colSpan={4}>data kosong</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </StyledDashboardPostsFeatureShell>
  );
}

export default DashboardPostsFeatureShell;
