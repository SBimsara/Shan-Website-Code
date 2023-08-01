import React, { useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  LogoImage,
} from "./Navbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";

import { IconContext } from "react-icons/lib/esm";
import logoImage from "../../assets/images/Shanlogo.png";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              {/* <NavIcon />
              Shan */}
              <LogoImage src={logoImage} />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {clicked ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} clicked={clicked}>
              <NavItem>
                <NavLinks to="/shanproducts/home">Home</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/products">Products</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/contact">Contact</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/about">About Us</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
