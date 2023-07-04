import styled from "styled-components";
import { FaJava } from "react-icons/fa";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";

const primaryColor = "#000";
const secondaryColor = "#fff";
const ternaryColor = "#ef2d56";

export const Nav = styled.nav`
  background: ${primaryColor};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: ${secondaryColor};
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;
export const NavIcon = styled(FaJava)`
  margin-right: 0.5rem;
`;
export const LogoImage = styled.img`
  width: 130px;
  height: 100px;
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ clicked }) => (clicked ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${primaryColor};
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 3px solid ${ternaryColor};
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: ${secondaryColor};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      background-color: ${ternaryColor};
      transition: all 0.3s ease;
    }
  }
`;
