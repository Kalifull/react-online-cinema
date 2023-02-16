import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import Layout from '@/components/layout/Layout';

import { store } from '@/store/store';

import HeadProvider from './HeadProvider/HeadProvider';
import ToastrProvider from './ToastrProvider/ToastrProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const MainProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <HeadProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ToastrProvider />
          <Layout>{children}</Layout>
        </QueryClientProvider>
      </Provider>
    </HeadProvider>
  );
};

export default MainProvider;
