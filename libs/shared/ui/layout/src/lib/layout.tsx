import Head from 'next/head';
import React from 'react';
import Header from './header/header';
import Main from './main/main';

export interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export function Layout({ children, title }: LayoutProps) {
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

export default Layout;
