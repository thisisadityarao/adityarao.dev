import React from 'react';
import styled from 'styled-components';
import { ArrowCircleUp } from 'styled-icons/fa-solid/ArrowCircleUp';

const UpTop = styled(ArrowCircleUp)`
  opacity: 0.3;
  width: 30px;
  height: 30px;
  position: fixed;
  bottom: 15px;
  right: 10px;
  border-radius: 5px;
  border: none;
  color: #f43059;

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
