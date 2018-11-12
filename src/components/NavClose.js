import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

const Close = styled.div`
  margin-bottom: 6rem;
  div {
    cursor: pointer;
    z-index: 100;
    width: 35px;
    height: 4px;
    margin: 4px;
    border-radius: 50px;
    background-color: #fff;
  }

  & .line1 {
    transform: rotate(-45deg) translate(-5px, 6px);
  }
  & .line2 {
    opacity: 0;
  }
  & .line3 {
    transform: rotate(45deg) translate(-5px, -6px);
  }

  ${media.greaterThan('medium')`
    display: none
  `}
`;

export default props => (
  <Close onClick={props.click}>
    <div className="line1" />
    <div className="line2" />
    <div className="line3" />
  </Close>
);
