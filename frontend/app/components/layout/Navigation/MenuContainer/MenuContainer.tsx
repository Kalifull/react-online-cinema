import Menu from './Menu';
import { mainMenu, userMenu } from './menu.data';

const MenuContainer: React.FC = () => {
  return (
    <div>
      <Menu menu={mainMenu} />
      <Menu menu={userMenu} />
    </div>
  );
};

export default MenuContainer;
