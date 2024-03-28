import type { Metadata } from 'next';

import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import 'boundless-commerce-components/dist/styles.css';
import 'boundless-checkout-react/dist/index.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import WrapperForCartContext from '@/components/wrapperForCartContext';
import {ReactNode} from 'react';
import Header from '@/components/header';
import CategoriesMenu from '@/components/categoriesMenu';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Book Mania',
  description: 'For all your book needs',
};

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
      <body>
        <WrapperForCartContext>
          <>
            <Header />
            <CategoriesMenu />
            {children}
            <Footer />
          </>
        </WrapperForCartContext>
      </body>
    </html>
  );
}
