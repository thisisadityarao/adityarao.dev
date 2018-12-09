import React from 'react';
import styled from 'styled-components';

const Close = styled.div`
  cursor: pointer;
  position: absolute;
  top: 50px;
  right: 30px;

  div {
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

  :hover {
    opacity: 0.8;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default props => (
  <Close onClick={props.close}>
    <div className="line1" />
    <div className="line2" />
    <div className="line3" />
  </Close>
);
