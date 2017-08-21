import React from 'react';
import styled from 'styled-components';

import SVG from 'kt-components/SVG';

// import exit from './../../../assets/exit.svg';

const Header = ({ entry, close }) => {
  return (
    <TileHeader>
      <ProfileImg src={ entry.design.user.avatar } />
      <StoreName>{ entry.design.user.storeName }</StoreName>
  
    </TileHeader>
  )
}

export default Header;

const TileHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 10px;
  background: white;
  ${props => props.theme.media.desktop} {
    margin-bottom: 10px;
  }
`
const ProfileImg = styled.img`
  border-radius: 50%;
  width: 35px;
  height: auto;
`
const StoreName = styled.h2`
  font-weight: 700;
  text-transform: uppercase;
  margin: 10px;
  color: #606060;
  cursor: pointer;
`
const Exit = styled(SVG)`
  position: absolute;
  top: 11px;
  right: 11px;
  stroke: #606060;
  width: 28px;
  height: 28px;
`