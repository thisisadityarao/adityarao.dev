/* eslint-disable */

import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

const Menu = styled.div`
  div {
    cursor: pointer;
    width: 35px;
    height: 4px;
    margin: 4px;
    border-radius: 50px;
    background-color: #29384d;
  }

  ${media.greaterThan('medium')`
    display: none
  `}
`;

export default props => (
  <Menu onClick={props.click}>
    <div className="line1" />
    <div className="line2" />
    <div className="line3" />
  </Menu>
);
