import * as React from 'react';
import Footer from './Footer';
import Header from './Header';

export interface ILayoutProps {
}

export default function Layout ({children}:any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-2">
      <Header/>
    <main className="flex flex-col items-center justify-center w-full flex-1 px-0 text-center">{children}</main>
    <Footer/>
    </div>
  );
}
