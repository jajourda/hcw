import * as React from 'react';
import Footer from './Footer';
import Header from './navigation/Header';

export interface ILayoutProps {
}

export default function Layout({ children }: any) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-0 text-center">{children}</main>
      <Footer />
    </div>
  );
}
