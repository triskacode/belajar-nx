import { Layout } from '@belajar-nx/shared/ui/layout';
import { ChattingAppRegisterFeature } from '@belajar-nx/chatting-app/register-feature';

export function Register() {
  return (
    <Layout title="Register">
      <ChattingAppRegisterFeature />
    </Layout>
  );
}

export default Register;
