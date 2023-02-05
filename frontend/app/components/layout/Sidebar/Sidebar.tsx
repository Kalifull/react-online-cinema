import Search from './Search/Search';

import styles from './Sidebar.module.scss';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <Search />
    </div>
  );
};

export default Sidebar;
