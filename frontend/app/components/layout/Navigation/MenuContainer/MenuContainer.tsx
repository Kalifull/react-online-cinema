import Menu from './Menu/Menu';
import { mainMenu, userMenu } from './Menu/menu.data';
import GenreMenu from './genres/GenreMenu';

const MenuContainer: React.FC = () => {
  return (
    <>
      <Menu menu={mainMenu} />
      <GenreMenu />
      <Menu menu={userMenu} />
    </>
  );
};

export default MenuContainer;
