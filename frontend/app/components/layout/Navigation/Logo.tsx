import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

import logoImage from '@/assets/images/logo.svg';

const Logo: React.FC = memo(() => {
  return (
    <div className="px-layout mb-10 block">
      <Link href="/">
        <Image src={logoImage} width={247} height={34} alt="Online cinema" draggable={false} />
      </Link>
    </div>
  );
});

export default Logo;
