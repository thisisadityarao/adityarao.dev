import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ChevronDown } from 'styled-icons/fa-solid/ChevronDown';

// Create the keyframes
const scroll = keyframes`
  0% {
    transform: translateY(-10px);
  }

  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
`;

const ChevronDownScroll = styled(ChevronDown)`
  width: 3rem;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 50px;
  margin: 0 auto;
  animation-name: ${scroll};
  animation-duration: 1.7s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`;

const ChevronScroll = () => <ChevronDownScroll />;

export default ChevronScroll;
