import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ShoppingBasket = (props) => {
  const { to, className = '' } = props;
  return (
    <div className={`input-wrapper bg-white d-flex p-1 text-center ${className}`}>
      <Link
        to={to}
        className="font-size--14 color--grey-5d line-height--45 center-block d-flex align-items-center"
      >View
                basket
                <i className="icon icon--basket d-flex align-items-center ml-1" />
      </Link>
    </div>
  );
};

ShoppingBasket.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default ShoppingBasket;
