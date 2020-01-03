import React from 'react';
import PropTypes from 'prop-types';
import isArray from 'lodash/isArray';
import keyGen from 'uuid/v1';
import Label from './Label';

const TextWithLabel = (props) => {
  const { text, label, color = 'grey-5d', fontSize = 14, fontWeight = 'bold', email = false, phone = false, website = false, className } = props;
  if (isArray(text)) {
    return (
      <div className={className}>
        {
              text.map(name => <p key={keyGen()} className={`font-size--${fontSize} color--${color} font-weight-${fontWeight}`}>{name}</p>)
          }
        <Label label={label} color={color} />
      </div>
    );
  }
  if (email) {
    return (
      <div className={className}>
        <a href={`mailto:${text}`} className={`font-size--${fontSize} color--${color} font-weight-${fontWeight}`}>{text}</a>
        <Label label={label} color={color} />
      </div>
    );
  }
  if (phone) {
    return (
      <div className={className}>
        <a href={`tel:${text}`} className={`font-size--${fontSize} color--${color} font-weight-${fontWeight}`}>{text}</a>
        <Label label={label} color={color} />
      </div>
    );
  }
  if (website) {
    return (
      <div className={className}>
        <a href={text} target="_blank" className={`font-size--${fontSize} color--${color} font-weight-${fontWeight}`}>{text}</a>
        <Label label={label} color={color} />
      </div>
    );
  }
  return (
    <div className={className}>
      <p className={`font-size--${fontSize} color--${color} font-weight-${fontWeight}`}>{text}</p>
      <Label label={label} color={color} />
    </div>
  );
};

TextWithLabel.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.oneOf(['light', 'medium', 'bold']),
  className: PropTypes.string,
  email: PropTypes.bool,
  phone: PropTypes.bool,
  website: PropTypes.bool
};

export default TextWithLabel;
