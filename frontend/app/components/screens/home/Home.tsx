import Layout from '@/components/layout/Layout';
import Heading from '@/components/ui/heading/Heading';

import Meta from '@/utils/meta/Meta';

import { IHome } from './home.interface';

const Home: React.FC<IHome> = () => {
  return (
    <Meta
      title="Watch movies online"
      description="Watch MovieApp movies and TV shows online or stream right to our browser"
    >
      <Layout>
        <Heading title="Watch movies online" className="text-gray-300 mb-8 text-xl" />
      </Layout>
    </Meta>
  );
};

export default Home;
