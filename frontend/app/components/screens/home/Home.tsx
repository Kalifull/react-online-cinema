import Layout from '@/components/layout/Layout';

import { IHome } from './home.interface';

const Home: React.FC<IHome> = () => {
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
};

export default Home;
