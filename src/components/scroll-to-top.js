/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import styled from 'styled-components';
import detectPassiveEvents from 'detect-passive-events';
import { ChevronCircleUp } from 'styled-icons/fa-solid/ChevronCircleUp';

const ScrollButton = styled(ChevronCircleUp)`
  display: ${props => (props.customProp ? 'block' : 'none')}; /* Hidden by default */
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 25px; /* Place the button 25px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: #555; /* Set a background color */
  background: #00bcd4;
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  width: 35px; /* Some width */
  font-size: 18px; /* Increase font size */
  border-radius: 20px;
  border: 2px solid #00bcd4;

  &:hover {
    background: #f43059;
    border-color: #f43059;
  }

  @media (min-width: 786px) {
    bottom: 30px;
    right: 30px;
    width: 40px;
  }
`;

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = { isScrolling: '' };
    this.ButtonToggle = this.ButtonToggle.bind(this);
    this.Scrolling = this.Scrolling.bind(this);
  }

  ButtonToggle() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      this.setState({ isScrolling: true });
    } else {
      this.setState({ isScrolling: '' });
    }
  }

  Scrolling() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  componentDidMount() {
    this.Scrolling(); // Scroll to top in case we land in the middle of the page
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.ButtonToggle);
    }
    if (typeof window !== 'undefined') {
      window.addEventListener(
        'wheel',
        this.StopScrollingFrame,
        detectPassiveEvents.hasSupport ? { passive: true } : false,
      ); // Stop animation if user mouse wheels during animation.;
    }
    if (typeof window !== 'undefined') {
      window.addEventListener(
        'touchstart',
        this.StopScrollingFrame,
        detectPassiveEvents.hasSupport ? { passive: true } : false,
      ); // Stop animation if user touches the screen during animation
    }
  }

  render() {
    const { isScrolling } = this.state;
    return <ScrollButton onClick={this.Scrolling} customProp={isScrolling} />;
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.ButtonToggle);
    }
    if (typeof window !== 'undefined') {
      window.removeEventListener('wheel', this.StopScrollingFrame, false);
    }
    if (typeof window !== 'undefined') {
      window.removeEventListener('touchstart', this.StopScrollingFrame, false);
    }
  }
}
