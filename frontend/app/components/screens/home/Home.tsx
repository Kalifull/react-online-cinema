import Heading from '@/components/ui/heading/Heading';

import Meta from '@/utils/meta/Meta';

import { IHome } from './home.interface';

const Home: React.FC<IHome> = () => {
  return (
    <Meta
      title="Watch movies online"
      description="Watch MovieApp movies and TV shows online or stream right to our browser"
    >
      <Heading title="Watch movies online" className="text-gray-300 mb-8 text-xl" />
    </Meta>
  );
};

export default Home;
