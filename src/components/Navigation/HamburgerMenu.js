import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  cursor: pointer;
  width: 35px;
  div {
    width: 100%;
    height: 4px;
    margin: 4px;
    border-radius: 20px;
    background-color: #ff4b6e;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default props => (
  <Menu onClick={props.click}>
    <div className="line1" />
    <div className="line2" />
    <div className="line3" />
  </Menu>
);
