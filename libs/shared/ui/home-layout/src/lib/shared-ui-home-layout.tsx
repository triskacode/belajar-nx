import Head from 'next/head';
import Header from './header/header';
import Main from './main/main';

/* eslint-disable-next-line */
export interface SharedUiHomeLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function SharedUiHomeLayout({
  children,
  title,
}: SharedUiHomeLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Main children={children} />
    </>
  );
}

export default SharedUiHomeLayout;
