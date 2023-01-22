import Image from 'next/image';
import Link from 'next/link';

import LogoImage from '@/assets/images/logo.svg';

const Logo: React.FC = () => {
  return (
    <div className="px-layout mb-10 block">
      <Link href="/">
        <Image src={LogoImage} width={247} height={34} alt="Online cinema" draggable={false} />
      </Link>
    </div>
  );
};

export default Logo;
