import React, { Component } from 'react';
import { Input } from 'reactstrap';
import keyGen from 'uuid/v1';
import isFunction from 'lodash/isFunction';
import isArray from 'lodash/isArray';
import PropTypes from 'prop-types';
import './_select-with-icon.scss';


class SelectWithIcon extends Component {
    onChangeHandler=(e) => {
      const { onChange } = this.props;
      if (isFunction(onChange)) {
        onChange(e);
      }
    };

    render() {
      const { name, value, icon, options, height, className = '' } = this.props;
      return (
        <div className={`select-with-icon position-relative ${className}`} style={{ height }}>
          <Input type="select" className="input-blank select-with-icon__input bg-transparent" onChange={this.onChangeHandler} name={name} value={value}>
            <option value="" disabled>Select</option>
            {isArray(options) &&
              options.map(item => {
               return <option value={item.value} key={keyGen()}>{item.name}</option>;
              })
              }
          </Input>
          <i className={`select-with-icon__icon icon icon--${icon}`} style={{ lineHeight: `${height}px` }} />
        </div>
      );
    }
}

SelectWithIcon.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  height: PropTypes.number,
  className: PropTypes.string,
  onChange: PropTypes.func
};

export default SelectWithIcon;
