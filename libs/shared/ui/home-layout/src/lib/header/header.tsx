import { useAuthUserQuery } from '@belajar-nx/shared-data-access-auth';
import Link from 'next/link';
import { useEffect } from 'react';
import { StyledHeader } from './header.style';

export function Header() {
  const { data } = useAuthUserQuery();

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  return (
    <StyledHeader>
      <div className="container">
        <Link href={'/'}>
          <h1>Belajar Monorepo</h1>
        </Link>
        <ul>
          <Link href={'/login'}>
            <li>Login</li>
          </Link>
          <Link href={'/register'}>
            <li>Register</li>
          </Link>
        </ul>
      </div>
    </StyledHeader>
  );
}

export default Header;
