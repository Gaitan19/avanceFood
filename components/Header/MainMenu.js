import Link from 'next/link';
import { CNavItem, CNavbarNav } from '@coreui/react';
import { FaSearch, FaShoppingBag } from 'react-icons/fa';
import { v4 } from 'uuid';
import Navbar from '../Navbar';
import routes from '@/constants/routes';
import Dropdown from '../Dropdown';
import { mainMenuOptions } from '@/constants/menuOptions';
import Button from '../Button';

const MainMenu = () => {
  const renderMainMenu = () => {
    return mainMenuOptions.map((mainMenuOption) => {
      if (mainMenuOption.hasOwnProperty('menuOptions')) {
        return (
          <CNavItem key={v4()}>
            <Dropdown
              isMenu
              menuOptions={mainMenuOption.menuOptions}
              text={mainMenuOption.text}
              modifiedClass="Menu-dropdown"
            />
          </CNavItem>
        );
      }

      return (
        <CNavItem key={v4()}>
          <Link className="Menu-item" href={mainMenuOption.route}>
            {mainMenuOption.text}
          </Link>
        </CNavItem>
      );
    });
  };

  return (
    <Navbar>
      <nav className="navbar navbar-expand-md">
        <Link href={routes.home}>
          <div className="Menu-image" />
        </Link>
        <div className="collapse navbar-collapse Menu">
          <CNavbarNav className="Menu-options">{renderMainMenu()}</CNavbarNav>
          <div className="Menu-tools">
            <Button customClass="Button-tools">
              <FaShoppingBag />
            </Button>
            <Button customClass="Button-tools">
              <FaSearch className="Menu-icon" />
            </Button>
            <Button buttonText="Reservation" customClass="Button-reservation" />
          </div>
        </div>
      </nav>
    </Navbar>
  );
};

export default MainMenu;
