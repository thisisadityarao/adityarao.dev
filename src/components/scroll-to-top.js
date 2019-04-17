/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import styled from 'styled-components';
import detectPassiveEvents from 'detect-passive-events';
import TweenFunctions from 'tween-functions';
import { ChevronUp } from 'styled-icons/fa-solid/ChevronUp';

const ScrollUpButton = styled.div`
  display: ${props => (props.customProp ? 'block' : 'none')};
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  width: 50px;
  height: 50px;
  padding: 8px 11px;
  border-radius: 100%;
  background: #188ef4;
  border: 1px solid #188ef4;
  transition: 0.2s ease-in;

  &:hover {
    background: #2c73cb;
    border: 1px solid #2c73cb;
  }

  @media (min-width: 992px) {
    width: 70px;
    height: 70px;
    padding: 17px 19px;
  }
`;

const Chevron = styled(ChevronUp)`
  width: 26px;
  color: #fff;

  @media (min-width: 992px) {
    width: 30px;
  }
`;

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = { isScrolling: '' };
    this.Animation = {
      StartPosition: 0, // Passed as an argument to easing function to calculate next position
      CurrentAnimationTime: 0, // Passed as an argument to easing function to calculate next position
      StartTime: null, // Needed to calculate currentAnimationTime
      AnimationFrame: null, // RefID that requestAnimationFrame returns
    };
    this.ButtonToggle = this.ButtonToggle.bind(this);
    this.HandleScrolling = this.HandleScrolling.bind(this);
    this.StopScrollingFrame = this.StopScrollingFrame.bind(this);
    this.ScrollingFrame = this.ScrollingFrame.bind(this);
  }

  componentDidMount() {
    this.HandleScrolling(); // Scroll to top at mount incase we are already scrolled down
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.ButtonToggle);
    }
    if (typeof window !== 'undefined') {
      window.addEventListener(
        'wheel',
        this.StopScrollingFrame,
        detectPassiveEvents.hasSupport ? { passive: true } : false
      ); // Stop animation if user mouse wheels during animation.;
    }
    if (typeof window !== 'undefined') {
      window.addEventListener(
        'touchstart',
        this.StopScrollingFrame,
        detectPassiveEvents.hasSupport ? { passive: true } : false
      ); // Stop animation if user touches the screen during animation
    }
  }

  componentWillUnmount() {
    // Remove all events, since component is no longer mounted.
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

  ButtonToggle() {
    // Position at which to show scroll-to-top button(unit: px)
    // Can convert it into a prop??
    const ShowAtPosition = 900;
    // window.pageYOffset = current scroll position
    // ShowAtPosition = position at which we want the button to show.
    if (window.pageYOffset > ShowAtPosition) {
      this.setState({ isScrolling: true });
    } else {
      this.setState({ isScrolling: '' });
    }
  }

  HandleScrolling() {
    // Scroll to StopPosition
    this.StopScrollingFrame(); // Stoping all AnimationFrames
    this.Animation.StartPosition = window.pageYOffset; // current scroll position
    this.Animation.CurrentAnimationTime = 0;
    this.Animation.StartTime = null;
    // Start the scrolling animation.
    this.Animation.AnimationFrame = window.requestAnimationFrame(
      this.ScrollingFrame
    );
  }

  ScrollingFrame() {
    // Where to stop the scroll animation(end position: pageYOffset = 0)
    // Can convert it into a prop??
    const StopPosition = 0;
    // Total duration for animation
    // Can convert it into a prop??
    const AnimationDuration = 500;
    const timestamp = Math.floor(Date.now());
    // If StartTime has not been assigned a value, assign it the start timestamp.
    if (!this.Animation.StartTime) {
      this.Animation.StartTime = timestamp;
    }

    // set CurrentAnimationTime every iteration of ScrollingFrame()
    this.Animation.CurrentAnimationTime = timestamp - this.Animation.StartTime;
    // if we hit the StopPosition, StopScrollingFrame()
    if (window.pageYOffset <= StopPosition) {
      this.StopScrollingFrame();
    } else {
      // Otherwise continue ScrollingFrame to the StopPosition.
      // Let TweenFunctions handle the math to give us a new position based on AnimationDuration and EasingType type
      let YPos = TweenFunctions.easeOutCubic(
        this.Animation.CurrentAnimationTime,
        this.Animation.StartPosition,
        StopPosition,
        AnimationDuration
      );
      if (YPos <= StopPosition) {
        YPos = StopPosition;
      }
      window.scrollTo(0, YPos);
      // Request another frame to be painted
      this.Animation.AnimationFrame = window.requestAnimationFrame(
        this.ScrollingFrame
      );
    }
  }

  StopScrollingFrame() {
    // Stop the Animation Frames.
    window.cancelAnimationFrame(this.Animation.AnimationFrame);
  }

  render() {
    const { isScrolling } = this.state;
    return (
      <ScrollUpButton onClick={this.HandleScrolling} customProp={isScrolling}>
        <Chevron />
      </ScrollUpButton>
    );
  }
}
