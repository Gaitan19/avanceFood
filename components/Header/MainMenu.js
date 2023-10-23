import Link from 'next/link';
import {
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavItem,
  CNavLink,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
} from '@coreui/react';
import { FaSearch, FaShoppingBag } from 'react-icons/fa';
import { v4 } from 'uuid';
import { useState } from 'react';
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

  // return (
  //   <Navbar>
  //     <nav className="navbar navbar-expand-md">
  //       <Link href={routes.home}>
  //         <div className="Menu-image" />
  //       </Link>
  //       <div className="Navbar-menu">
  //         <CNavbarNav className="Menu-options">{renderMainMenu()}</CNavbarNav>
  //         <div className="Menu-tools">
  //           <Button customClass="Button-tools">
  //             <FaShoppingBag />
  //           </Button>
  //           <Button customClass="Button-tools">
  //             <FaSearch className="Menu-icon" />
  //           </Button>
  //           <Button buttonText="Reservation" customClass="Button-reservation" />
  //         </div>
  //       </div>
  //     </nav>
  //   </Navbar>
  // );

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
                aria-label="Toggle navigation"
                aria-expanded={visible}
                onClick={() => setVisible(!visible)}
              />
              <CCollapse className="navbar-collapse" visible={visible}>
                <CNavbarNav className="Navbar-nav">
                  {renderMainMenu()}
                  {/* <CNavItem>
                  <CNavLink href="#" active>
                    Home
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Features</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Pricing</CNavLink>
                </CNavItem>
                <CDropdown variant="nav-item" popper={false}>
                  <CDropdownToggle>Dropdown link</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown> */}
                </CNavbarNav>
              </CCollapse>
            </CContainer>

            <CContainer fluid className="Navbar-container-tools">
              {/* <CNavbarBrand href={routes.home}>
            <div className="Menu-image" />
          </CNavbarBrand> */}
              <CNavbarToggler
                aria-label="Toggle navigation"
                aria-expanded={visible}
                onClick={() => setVisibleOp(!visibleOp)}
              />

              <CCollapse className="navbar-collapse" visible={visibleOp}>
                <CNavbarNav>
                  <CNavItem>
                    <Button customClass="Button-tools">
                      <FaShoppingBag />
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
