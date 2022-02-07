import { LoginFeatureShell } from '@belajar-nx/login/feature-shell';
import { SharedUiHomeLayout } from '@belajar-nx/shared-ui-home-layout';

export function Login() {
  return (
    <SharedUiHomeLayout title="Login">
      <LoginFeatureShell />
    </SharedUiHomeLayout>
  );
}

export default Login;
