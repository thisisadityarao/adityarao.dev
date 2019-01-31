import React, { Component } from 'react';
import styled from 'styled-components';

const ScrollIndicator = styled.div`
  margin-top: 0;
  padding: 0;
  background: #64b4f0;
  background: linear-gradient(135deg, #bc4e9c 0, #f80759 100%);
  position: fixed;
  height: 4px;
  width: ${props => props.width};
  top: 0;
  z-index: 99;
  transition: ${props => props.width} 200ms ease-out;
`;

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
    };
    this.Scrolling = this.Scrolling.bind(this);
  }

  Scrolling() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (height > 0) {
      this.setState({ width: `${scrolled}%` });
    } else {
      this.setState({ width: null });
    }
  }

  componentDidMount() {
    try {
      window.addEventListener('scroll', this.Scrolling);
    } catch (oError) {
      console.log(oError);
    }
  }

  componentWillUnmount() {
    try {
      window.removeEventListener('scroll', this.Scrolling);
    } catch (oError) {
      console.log(oError);
    }
  }

  render() {
    const { width } = this.state;
    return <ScrollIndicator width={width} />;
  }
}
