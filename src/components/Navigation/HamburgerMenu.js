import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  cursor: pointer;
  width: 85px;
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.div`
  cursor: pointer;
  width: 30px;
  margin-right: 10px;

  div {
    width: 100%;
    height: 3px;
    margin: 4px;
    border-radius: 20px;
    background-color: #f43059;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuTag = styled.span`
  width: 50px;
  color: #f43059;
  font-weight: bold;
  font-size: 18px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export default props => (
  <Menu onClick={props.click}>
    <MenuItem>
      <div className="line1" />
      <div className="line2" />
      <div className="line3" />
    </MenuItem>
    <MenuTag>Menu</MenuTag>
  </Menu>
);
