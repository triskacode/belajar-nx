import {
  AUTH_USER_QUERY_KEY,
  useAuthUserQuery,
} from '@belajar-nx/shared-data-access-auth';
import { deleteToken } from '@belajar-nx/shared-utils-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { StyledHeader } from './header.style';

export function Header() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { data: currentUser, isLoading, error } = useAuthUserQuery();

  const handleLogout = () => {
    deleteToken();
    router.push('/login');
    queryClient.invalidateQueries(AUTH_USER_QUERY_KEY);
  };

  useEffect(() => {
    if (error) queryClient.resetQueries(AUTH_USER_QUERY_KEY);
  }, [error, queryClient]);

  return (
    <StyledHeader>
      <div className="container">
        <Link href={'/'}>
          <h1>Belajar Monorepo</h1>
        </Link>
        <ul>
          {!isLoading &&
            (currentUser ? (
              <>
                <Link href={'/dashboard'}>
                  <li>Dashboard</li>
                </Link>
                <Link href={'/dashboard/users'}>
                  <li>Users</li>
                </Link>
                <Link href={'/dashboard/posts'}>
                  <li>Posts</li>
                </Link>
                <li onClick={handleLogout}>Logout</li>
              </>
            ) : (
              <>
                <Link href={'/login'}>
                  <li>Login</li>
                </Link>
                <Link href={'/register'}>
                  <li>Register</li>
                </Link>
              </>
            ))}
        </ul>
      </div>
    </StyledHeader>
  );
}

export default Header;
