import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import DayBookDashboard from '../DaybookDashboard/DayBookDashboard';
import DayBookSearchBar from './DayBookSearchBar';
import Tabs from './Tabs';


class DayBook extends Component {
  render() {
    return (
      <Fragment>
        <DayBookSearchBar />
        <Tabs />
        <Switch>
          <Route exact path="/day-book" component={DayBookDashboard} pageName="Quotes" />
          <Route exact path="/day-book/diary-bookings" component={DayBookDashboard} />
          <Route exact path="/day-book/live-contracts" component={DayBookDashboard} />
          <Route exact path="/day-book/off-hire-chose" component={DayBookDashboard} />
          <Route exact path="/day-book/last-hires" component={DayBookDashboard} />
        </Switch>
      </Fragment>
    );
  }
}


export default DayBook;
