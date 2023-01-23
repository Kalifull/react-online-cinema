import Navigation from './Navigation/Navigation';
import Sidebar from './Sidebar/Sidebar';

import { TypeLayoutProps } from './layout.types';

import styles from './Layout.module.scss';

const Layout: React.FC<TypeLayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navigation />
      <div className={styles.center}>{children}</div>
      <Sidebar />
    </div>
  );
};

export default Layout;
