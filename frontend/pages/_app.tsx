import type { AppProps } from 'next/app';
import MainProvider from 'providers/MainProvider';

import '@/assets/styles/globals.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  );
};

export default App;
