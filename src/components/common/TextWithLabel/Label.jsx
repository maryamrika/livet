import React from 'react';
import PropTypes from 'prop-types';

const Label = (props) => {
  const { className, color, label } = props;
  return (
    <p className={`font-size--12 color--${color} ${className}`}>{label}</p>);
};

Label.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string.isRequired,
};

export default Label;
