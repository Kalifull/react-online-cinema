import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo } from 'react';

import MaterialIcon from '@/components/ui/MaterialIcon';

import { IMenuItem } from './menu.interface';

import styles from './Menu.module.scss';

const MenuItem: React.FC<{ item: IMenuItem }> = memo(({ item }) => {
  const { asPath } = useRouter();
  return (
    <li
      className={cn({
        [styles.active]: asPath === item.link,
      })}
    >
      <Link href={item.link} legacyBehavior>
        <a>
          <MaterialIcon name={item.icon} />
          <span>{item.title}</span>
        </a>
      </Link>
    </li>
  );
});

export default MenuItem;
