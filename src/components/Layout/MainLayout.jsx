import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  MdImportantDevices,
  MdLoyalty,
} from 'react-icons/md';


import { Content, Footer, Sidebar } from './';
import Header from './Header';

class MainLayout extends React.Component {
  static isSidebarOpen() {
    return document
      .querySelector('.cr-sidebar')
      .classList.contains('cr-sidebar--open');
  }

  componentDidMount() {
    this.checkBreakpoint(this.props.breakpoint);

    setTimeout(() => {
      if (!this.notificationSystem) {
        return;
      }

      this.notificationSystem.addNotification({
        title: <MdImportantDevices />,
        message: 'Welome to Reduction Admin!',
        level: 'info',
      });
    }, 1500);

    setTimeout(() => {
      if (!this.notificationSystem) {
        return;
      }

      this.notificationSystem.addNotification({
        title: <MdLoyalty />,
        message:
          'Reduction is carefully designed template powered by React and Bootstrap4!',
        level: 'info',
      });
    }, 2500);
  }

  componentWillReceiveProps({ breakpoint }) {
    if (breakpoint !== this.props.breakpoint) {
      this.checkBreakpoint(breakpoint);
    }
  }

  // close sidebar when
  handleContentClick = () => {
    // close sidebar if sidebar is open and screen size is less than `md`
    if (
      MainLayout.isSidebarOpen() &&
      (this.props.breakpoint === 'xs' ||
        this.props.breakpoint === 'sm' ||
        this.props.breakpoint === 'md')
    ) {
      this.openSidebar('close');
    }
  };

  checkBreakpoint(breakpoint) {
    switch (breakpoint) {
      case 'xs':
      case 'sm':
      case 'md':
        return this.openSidebar('close');

      case 'lg':
      case 'xl':
      default:
        return this.openSidebar('open');
    }
  }

  openSidebar(openOrClose) {
    if (openOrClose === 'open') {
      return document
        .querySelector('.cr-sidebar')
        .classList.add('cr-sidebar--open');
    }

    document.querySelector('.cr-sidebar').classList.remove('cr-sidebar--open');
    return null;
  }

  render() {
    const { children, appTitle } = this.props;

    return (
      <main className="cr-app bg-light">
        <Header />
        <Sidebar {...this.props} title={appTitle} />
        <Content fluid onClick={this.handleContentClick}>
          {/* currentUser && <Header currentUser={currentUser} logout={this.logout} /> */}
          {children}
        </Content>
        <Footer />
      </main>
    );
  }
}

const mapStateToProps = () => {
  return {
    appTitle: '',
    currentUser: '',
    token: ''
  };
};

export default withRouter(connect(mapStateToProps)(MainLayout));
