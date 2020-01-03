/* eslint yoda: "off" */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, withRouter, Route, Redirect } from 'react-router-dom';
import componentQueries from 'react-component-queries';
import { LayoutRoute, MainLayout } from './components/Layout';
import './styles/livetrack.css';

import Login from './components/pages/Login';
import PhoneSystem from './components/pages/PhoneSystem';
import DashboardPage from './components/pages/Dashboard/DashboardPage';
import CustomerDashboard from './components/pages/CustomerDashboard/index';
import Contact from './components/pages/Contact';
import ProductSearch from './components/pages/ProductSearch';
import DayBook from './components/pages/DayBook';

import NotFound from './components/pages/Notfound';
// import CustomerInstructions from './components/pages/CustomerInstructions';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/login" />} />
        <Route path="/login" component={Login} />
        <Route path="/phone-system" component={PhoneSystem} />
        <LayoutRoute
          exact
          path="/dashboard"
          component={DashboardPage}
          layout={MainLayout}
        />
        <LayoutRoute
          exact
          path="/customer-dashboard"
          component={CustomerDashboard}
          layout={MainLayout}
        />
        <LayoutRoute
          exact
          path="/customer-dashboard/new-hire"
          component={CustomerDashboard}
          layout={MainLayout}
        />
        <LayoutRoute
          exact
          path="/customer-dashboard/new-off-hire"
          component={CustomerDashboard}
          layout={MainLayout}
        />
        <LayoutRoute
          exact
          path="/contact"
          component={Contact}
          layout={MainLayout}
        />
        <LayoutRoute
          exact
          path="/product-search"
          component={ProductSearch}
          layout={MainLayout}
        />
        <LayoutRoute
          exact
          path="/day-book"
          component={DayBook}
          layout={MainLayout}
        />
        <LayoutRoute
          exact
          path="/day-book/diary-bookings"
          component={DayBook}
          layout={MainLayout}
        />
        <LayoutRoute
          exact
          path="/day-book/live-contracts"
          component={DayBook}
          layout={MainLayout}
        />
        <LayoutRoute
          exact
          path="/day-book/off-hire-chose"
          component={DayBook}
          layout={MainLayout}
        />
        <LayoutRoute
          exact
          path="/day-book/last-hires"
          component={DayBook}
          layout={MainLayout}
        />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  };
};

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

App.displayName = 'App';

const cqApp = componentQueries(query)(App);

export default withRouter(connect(mapStateToProps)(cqApp));
