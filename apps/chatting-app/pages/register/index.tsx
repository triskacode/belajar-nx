import { RegisterFeatureShell } from '@belajar-nx/register-feature-shell';
import { SharedUiHomeLayout } from '@belajar-nx/shared-ui-home-layout';

export function Register() {
  return (
    <SharedUiHomeLayout title="Register">
      <RegisterFeatureShell />
    </SharedUiHomeLayout>
  );
}

export default Register;
