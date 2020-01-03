import React from 'react';

export const ContractDetail = props => {
  const { total, aged, updateTime } = props;
  return (
    <div className="pt-2 text-center">
      <div className="d-flex align-items-center justify-content-center text-left">
        <span className="square-box bg-gray" />
        <div>
          <p className="bold">Total</p>
          <p className="color--grey-5d">{total}</p>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center text-left">
        <span className="square-box bg-green" />
        <div>
          <p className="bold">Aged</p>
          <p className="color--grey-5d">{aged}</p>
        </div>
      </div>
      <p className="pt-4">Last Updated:</p>
      <p className="color--grey-5d">{updateTime}</p>
    </div>
  );
};
