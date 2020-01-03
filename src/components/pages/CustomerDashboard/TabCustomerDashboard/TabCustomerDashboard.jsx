import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './_tab-customer-dashboard.scss';

const TabCustomerDashboard = (props) => {
  const { className = '', to, title } = props;
  return (
    <NavLink
      to={to}
      className={`tab-customer-dashboard ${className}`}
      activeClassName="tab-customer-dashboard--active"
      exact
    >{title}
    </NavLink>
  );
};

TabCustomerDashboard.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default TabCustomerDashboard;
