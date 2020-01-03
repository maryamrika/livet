/* eslint-disable no-unused-vars */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import UserService from '../../services/UserService';


const TabLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
                // !UserService.TokenIsExpired()
                //     ? (
        <section className="bg-white p-4">
          <p style={{ marginBottom: 0, color: 'red', fontWeight: 'bold' }}> {rest.message || ''}</p>
          <Component {...props} {...rest} />
        </section>
                    //
                    // )
                    // : <Redirect to="/login" />
            )}
    />


  );
};

export default TabLayout;
