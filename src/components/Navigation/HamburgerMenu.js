import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  cursor: pointer;
  div {
    width: 35px;
    height: 3px;
    margin: 5px;
    border-radius: 50px;
    background-color: #5a5a5a;
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
