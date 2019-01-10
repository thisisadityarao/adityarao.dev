import React from 'react';
import styled from 'styled-components';
import { UpArrowCircle } from 'styled-icons/boxicons-regular/UpArrowCircle';

const UpTop = styled(UpArrowCircle)`
  opacity: 0.5;
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  border-radius: 5px;
  border: none;

  &:hover {
    opacity: 1;
  }
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
      <UpTop
        onClick={() => {
          this.scrollToTop();
        }}
      />
    );
  }
}

export default ScrollButton;
