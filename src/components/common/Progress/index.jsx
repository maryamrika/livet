/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable radix */
import React from 'react';
import { Progress } from 'reactstrap';

export const ProgressBar = props => {
  const { value, color, total, totalName, valueName } = props.data;
  const { number, currency, className = '' } = props;
  const percentage = (value * 100) / total;
  let sign = '';
  if (currency) {
    sign = '£';
  }
  if (number) {
    return (
      <div className={className}>
        <div className="d-flex justify-content-between pt-2">
          <span>{sign} {value}</span>
          <span>{sign} {total}</span>
        </div>
        <Progress color={color} value={percentage} />
        <div className="d-flex justify-content-between">
          <span>{valueName}</span>
          <span>{totalName}</span>
        </div>
      </div>
    );
  }
  return (
    <div className={className}>
      <div className="d-flex justify-content-start pt-2">
        <span>Opening - {percentage}%</span>
      </div>
      <Progress color={color} value={percentage} />
    </div>
  );
};
