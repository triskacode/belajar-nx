import { Layout } from '@belajar-nx/shared/ui/layout';
import { ChattingAppHomeFeature } from '@belajar-nx/chatting-app/home-feature';

export function Index() {
  return (
    <Layout title="Home">
      <ChattingAppHomeFeature />
    </Layout>
  );
}

export default Index;
