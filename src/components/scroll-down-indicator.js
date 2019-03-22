import React from 'react';
import styled, { keyframes } from 'styled-components';

const arrowDetail = keyframes`
  0% {
    opacity: 0;
    transform: translate(0px, -20px);
  }

  20% {
    opacity: 1;
    transform: translate(0px, 0px);
  }

  50% {
    opacity: 1;
    transform: translate(0px, 0px);
  }

  80% {
    opacity: 1;
    transform: translate(0px, 0px);
  }

  100% {
    opacity: 0;
    transform: translate(0px, 20px);
  }
`;

const ChevronDownScroll = styled.p`
  display: none;
  @media (min-width: 768px) {
    display: block;
    padding: 0;
    width: 100%;
    line-height: 1.7em;
    font-family: 'Inter', sans-serif;
    font-size: 16px !important;
    width: 100%;

    .detail {
      animation: ${arrowDetail} 4s infinite ease;
      color: #2a3a4a;
      cursor: pointer;
      display: inline-block;
      transition: 0.5s ease;
      opacity: 0;
      margin-right: 5px;
    }
  }
`;

const ChevronScroll = () => (
  <ChevronDownScroll>
    <span className="detail">↓</span>Scroll down
  </ChevronDownScroll>
);

export default ChevronScroll;
