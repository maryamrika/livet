import React from 'react';
import { Route } from 'react-router-dom';

const LayoutRoute = ({ component: Component, layout: Layout, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} {...rest} />
      </Layout>
    )}
  />
);

export default LayoutRoute;
