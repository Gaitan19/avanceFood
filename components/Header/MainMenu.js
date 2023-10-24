import Link from 'next/link';
import {
  CCollapse,
  CContainer,
  // CDropdown,
  // CDropdownDivider,
  // CDropdownItem,
  // CDropdownMenu,
  // CDropdownToggle,
  CNavItem,
  // CNavLink,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
} from '@coreui/react';
import { FaSearch, FaShoppingBag } from 'react-icons/fa';
import { v4 } from 'uuid';
import { useState, useContext } from 'react';
// import Navbar from '../Navbar';
import { Badge } from '@mui/material';
import routes from '@/constants/routes';
import Dropdown from '../Dropdown';
import { mainMenuOptions } from '@/constants/menuOptions';
import Button from '../Button';
// import ShopCart from '../ShopCart.js';
import { foodinglyContext } from '../FoodinglyContext';

const MainMenu = () => {
  const { setVisibleCart, productsCart } = useContext(foodinglyContext);

  const renderMainMenu = () => {
    return mainMenuOptions.map((mainMenuOption) => {
      console.log('productsCart :>> ', productsCart.lenght);
      if (mainMenuOption.hasOwnProperty('menuOptions')) {
        return (
          <CNavItem key={v4()} className="Navbar-item">
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
        <CNavItem key={v4()} className="Navbar-item">
          <Link className="Menu-item" href={mainMenuOption.route}>
            {mainMenuOption.text}
          </Link>
        </CNavItem>
      );
    });
  };

  const [visible, setVisible] = useState(false);
  const [visibleOp, setVisibleOp] = useState(false);

  return (
    <>
      <CNavbar expand="xl" colorScheme="light" className="bg-light Navbar">
        <div className="Navbar-content">
          <CNavbarBrand href={routes.home} className="Navbar-brand">
            <div className="Menu-image" />
          </CNavbarBrand>

          <div className="Navbar-menu">
            <CContainer fluid className="Navbar-container-options">
              <CNavbarToggler
                className="Navbar-toogle-options"
                aria-label="Toggle navigation"
                aria-expanded={visible}
                onClick={() => setVisible(!visible)}
              />
              <CCollapse className="navbar-collapse" visible={visible}>
                <CNavbarNav className="Navbar-nav">
                  {renderMainMenu()}
                </CNavbarNav>
              </CCollapse>
            </CContainer>

            <CContainer fluid className="Navbar-container-tools">
              <CNavbarToggler
                className="Navbar-toogle"
                aria-label="Toggle navigation"
                aria-expanded={visibleOp}
                onClick={() => setVisibleOp(!visibleOp)}
              />

              <CCollapse className="navbar-collapse" visible={visibleOp}>
                <CNavbarNav className="Navbar-nav-tools">
                  <CNavItem>
                    <Button
                      customClass="Button-tools"
                      onClick={() => setVisibleCart(true)}
                    >
                      <Badge badgeContent={productsCart.lenght} color="success">
                        <FaShoppingBag />
                      </Badge>
                    </Button>
                  </CNavItem>
                  <CNavItem>
                    <Button customClass="Button-tools">
                      <FaSearch className="Menu-icon" />
                    </Button>
                  </CNavItem>
                  <CNavItem>
                    <Button
                      buttonText="Reservation"
                      customClass="Button-reservation"
                    />
                  </CNavItem>
                </CNavbarNav>
              </CCollapse>
            </CContainer>
          </div>
        </div>
      </CNavbar>
    </>
  );
};

export default MainMenu;
