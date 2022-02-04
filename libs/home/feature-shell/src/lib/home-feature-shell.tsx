import { StyledHomeFeatureShell } from './home-feature-shell.style';

/* eslint-disable-next-line */
export interface HomeFeatureShellProps {}

export function HomeFeatureShell(props: HomeFeatureShellProps) {
  return (
    <StyledHomeFeatureShell>
      <div className="container">
        <h1>Home</h1>
      </div>
    </StyledHomeFeatureShell>
  );
}

export default HomeFeatureShell;
