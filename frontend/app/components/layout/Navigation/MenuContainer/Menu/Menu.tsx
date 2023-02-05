import MenuItem from './MenuItem';

import AuthItems from '../auth/AuthItems';

import { IMenu } from './menu.interface';

import styles from './Menu.module.scss';

const Menu: React.FC<{ menu: IMenu }> = ({ menu: { title, items } }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.heading}>{title}</div>
      <ul className={styles.ul}>
        {items.map((item) => (
          <MenuItem key={item.link} item={item} />
        ))}
        {title === 'General' ? <AuthItems /> : null}
      </ul>
    </div>
  );
};

export default Menu;
