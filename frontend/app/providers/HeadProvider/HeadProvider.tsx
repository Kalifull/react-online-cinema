import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

import { accentColor } from '@/config/constants';

import FavIcons from './FavIcons/FavIcons';

const HeadProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <NextNProgress
        color={accentColor}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0" />
        <FavIcons />
        <meta name="theme-color" content="#181B1E" />
        <meta name="msapplication-navbutton-color" content="181B1E" />
        <meta name="apple-mobile-web-app-status-bar-style" content="181B1E" />
      </Head>
      {children}
    </>
  );
};

export default HeadProvider;
