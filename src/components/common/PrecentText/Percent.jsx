import React from 'react';

const PercentText = props => {
  const { text, percent, color } = props;
  return (
    <div className="text-center">
      <p>{text}</p>
      <p className="h6" style={{ color }}>{percent}</p>
    </div>
  );
};

export default PercentText;
