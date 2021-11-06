import React from 'react';
import styled from 'styled-components';
import {colors} from '../../styles/colors';
import { Link } from 'react-scroll';

const NavContainer = styled.nav`
  width: 100vw;
  height: 50px;
  box-sizing: border-box;
  background-color: ${colors.navbarBackground};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50;
  z-index: 10;
`;

const LeftPanel = styled.div`
  width: 100px;
  color: ${colors.logo};
  font-size: 1.5em;
  font-weight: bold;
  margin-left: 55px;
`;

const RightPanel = styled.div`
  flex-grow: 1
  background-color: blue;
`;

const MenuItems = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const MenuItem = styled.li`
  margin-right: 16px;
  box-sizing: border-box;
  cursor: pointer;
  & :hover {
    font-weight: bold;
    color: #fbff4c;
    font-size: 1.1em;
  }
  & .active {
    font-weight: bold;
    color: #fbff4c;
    font-size: 1.1em;
  }
  & > a {
    text-decoration: none;
    color: ${colors.menuLink};
  }
  
`;


const NavBar = () => {
  return (
    <NavContainer>
      <LeftPanel><nobr>Pafcol <small><small>studio</small></small></nobr></LeftPanel>
      <RightPanel>
        <MenuItems>
          <MenuItem><Link activeClass="active" to="section-main" spy={true} smooth={true} duration={1000}>Main</Link></MenuItem>
          <MenuItem><Link activeClass="active" to="section-about" spy={true} smooth={true} duration={1000}>About</Link></MenuItem>
          <MenuItem><Link activeClass="active" to="section-contactus" spy={true} smooth={true} duration={1000}>Contact Us</Link></MenuItem>
        </MenuItems>
      </RightPanel>
    </NavContainer>
  )
}

export default NavBar;