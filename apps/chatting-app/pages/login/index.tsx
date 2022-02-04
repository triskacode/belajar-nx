import { Layout } from '@belajar-nx/shared/ui/layout';
import { ChattingAppLoginFeature } from '@belajar-nx/chatting-app/login-feature';

export function Login() {
  return (
    <Layout title="Login">
      <ChattingAppLoginFeature />
    </Layout>
  );
}

export default Login;
