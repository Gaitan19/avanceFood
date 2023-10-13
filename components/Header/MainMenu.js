import Link from 'next/link';
import { CNavItem, CNavbarNav } from '@coreui/react';
import { FaSearch, FaShoppingBag } from 'react-icons/fa';
import Navbar from '../Navbar';
import routes from '@/constants/routes';
import Dropdown from '../Dropdown';
import { menuOptions } from '@/constants/menuOptions';
import Button from '../Button';

const MainMenu = () => {
  return (
    <Navbar>
      <nav className="navbar navbar-expand-md">
        <Link href={routes.home}>
          <div className="Menu-image" />
        </Link>
        <div className="collapse navbar-collapse Menu">
          <CNavbarNav className="Menu-options">
            <CNavItem>
              <Link className="Menu-item" href={routes.home}>
                Home
              </Link>
            </CNavItem>
            <CNavItem>
              <Link className="Menu-item" href={routes.aboutUs}>
                About us
              </Link>
            </CNavItem>
            <CNavItem>
              <Dropdown
                isMenu
                menuOptions={menuOptions.foodMenu}
                text="Food Menu"
                modifiedClass="Menu-dropdown"
              />
            </CNavItem>
            <CNavItem>
              <Dropdown
                isMenu
                menuOptions={menuOptions.blogMenu}
                text="Blog"
                modifiedClass="Menu-dropdown"
              />
            </CNavItem>
            <CNavItem>
              <Dropdown
                isMenu
                menuOptions={menuOptions.pagesMenu}
                text="Pages"
                modifiedClass="Menu-dropdown"
              />
            </CNavItem>
            <CNavItem>
              <Link className="Menu-item" href={routes.contact}>
                Contact
              </Link>
            </CNavItem>
          </CNavbarNav>
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
