import React from 'react';
import styled from 'styled-components';
import {colors} from '../../styles/colors';

const NavContainer = styled.nav`
  width: 100vw;
  height: 54px;
  box-sizing: border-box;
  background-color: ${colors.navbarBackground};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const LeftPanel = styled.div`
  width: 100px;
  color: ${colors.logo};
`;

const RightPanel = styled.div`
  flex-grow: 1
  background-color: blue;
`;

const MenuItems = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  width: 400px;
  & > li {
    margin-right: 16px;
    & > a {
      text-decoration: none;
      color: ${colors.menuLink};
    }
  }
`;

const NavBar = () => {
  return (
    <NavContainer>
      <LeftPanel>PafCol</LeftPanel>
      <RightPanel>
        <MenuItems>
          <li><a href="#">Games</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact us</a></li>
        </MenuItems>
      </RightPanel>
    </NavContainer>
  )
}

export default NavBar;