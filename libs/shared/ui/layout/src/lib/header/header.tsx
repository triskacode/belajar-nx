import Link from 'next/link';
import { StyledHeader } from './header.style';

export function Header() {
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
