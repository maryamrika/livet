import React from 'react';
// import { Row } from 'reactstrap';

export const TextWithDot = props => {
  const { color, value1, value2, space } = props;
  return (
    <div
      className={`d-flex align-items-center border-bottom h6 pb-1 pt-1 ${space ? 'justify-content-between' : 'justify-content-start'}`}
    >
      <div><span className="bullet" style={{ backgroundColor: color }} /></div>
      <p className={`ml-3 ${space ? 'w-75' : ''}`}>{value1}</p>
      {
        !space &&
        <span className="ml-2 mr-2"> - </span>
      }
      <p>{value2}</p>
    </div>
  );
};
