import React, { Component } from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';
import HeaderWrapper from './HeaderWrapper';

const TopBar = styled.div`
  height: 8px;
  background-color: #ff4b6e;
`;

const Header = styled.header`
  width: 100%;
  padding-top: 42px;
  margin-bottom: 2rem;
`;

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false,
    };

    this.drawerToggle = this.drawerToggle.bind(this);
    this.navCloseHandler = this.navCloseHandler.bind(this);
  }

  drawerToggle() {
    this.setState(prevState => ({ sideDrawerOpen: !prevState.sideDrawerOpen }));
  }

  navCloseHandler() {
    this.setState({ sideDrawerOpen: false });
  }

  render() {
    let sideDrawer;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideBar close={this.navCloseHandler} />;
    }

    return (
      <>
        <TopBar />
        <Header>
          <HeaderWrapper clickHandler={this.drawerToggle} />
          {sideDrawer}
        </Header>
      </>
    );
  }
}
