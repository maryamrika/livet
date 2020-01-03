import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './_tab.scss';

const Tab = (props) => {
  const { to, title, className = '', children } = props;
  return (
    <NavLink to={to} exact className={`tab d-block ${className}`} activeClassName="tab--active">
      <div className="text-center tab__title">
        <p className="tab__title__text">{title}</p>
      </div>
      <div className="tab__children d-flex justify-content-center align-items-center">
        {children}
      </div>
    </NavLink>
  );
};

Tab.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Tab;
