import React from 'react';
import PropTypes from 'prop-types';
import './_number-pad.scss';

const NumberPad = (props) => {
  const { number, className } = props;
  return (
    <div className={`number-pad color--white ${className}`}>
      {number}
    </div>
  );
};

NumberPad.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired])
};

export default NumberPad;
