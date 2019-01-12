import React from 'react';
import styled from 'styled-components';
import { KeyboardArrowUp } from 'styled-icons/material/KeyboardArrowUp';

const Container = styled.button`
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 16px;
  right: 16px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 8px;
  opacity: 0.2;
  background-color: #f43059;
  transform: translateY(0px);
  cursor: pointer;
  z-index: 9999;
  border-radius: 24px;
  transition: all 0.2s ease-in-out 0s;

  &:focus,
  &:hover {
    opacity: 1;
  }
  &:active {
    opacity: 1;
  }

  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

const InnerContainer = styled.div`
  display: inline-block;
  width: 32px;
  height: 32px;
  min-width: 32px;
  min-height: 32px;
  position: relative;
  color: inherit;
  flex: 0 0 32px;
`;

const ArrowUp = styled(KeyboardArrowUp)`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  color: #fff;
`;

class ScrollButton extends React.Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0,
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    const intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId });
  }

  render() {
    return (
      <Container
        onClick={() => {
          this.scrollToTop();
        }}
      >
        <InnerContainer>
          <ArrowUp />
        </InnerContainer>
      </Container>
    );
  }
}

export default ScrollButton;
