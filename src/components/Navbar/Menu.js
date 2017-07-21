import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import PropTypes from 'prop-types';

import profile from './../../assets/profile.svg';

const Menu = props => {
  return (
    <MenuContainer>
      <MenuList>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/competitions">Competitions</MenuLink>
        <MenuLink to="/sign-up">Shop</MenuLink>
        <MenuLink to="/profile">Makers</MenuLink>
      </MenuList>
      <MenuList>
        <MenuLink to="/sign-up">
          <ProfileIcon path={ profile } />
          Login
        </MenuLink>
        <SignUpLink to="/profile">Sign Up</SignUpLink>
      </MenuList>
    </MenuContainer>
  )
}

Menu.propTypes = {
  toggleDisplay: PropTypes.func
}

const MenuList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`
const MenuContainer = MenuList.extend`
  width: 100%;
  display: none;
  ${props => props.theme.media.tablet} {
    display: flex;
  }
`
const MenuLink = styled(NavLink).attrs({
  activeClassName: 'navLinkActive',
  exact: true
})`
  text-align: center;
  padding: 0 15px;
  ${({theme}) => theme.mainFont({color:'white'})}
  font-size: 18px;
  text-transform: uppercase;
  height: 100%;
  display: flex;
  align-items: center;
  &.navLinkActive {
    background: ${({theme}) => theme.secondary}
  }
`
const SignUpLink = MenuLink.extend`
  background: white;
  color: ${({theme}) => theme.main}
`
const ProfileIcon = styled(ReactSVG)`
  border: solid white;
  border-radius: 20px;
  margin: 5px;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  background: white;
  & > path, circle {
    stroke: ${({theme}) => theme.main};
    fill: ${({theme}) => theme.main};
  }
`


export default Menu
