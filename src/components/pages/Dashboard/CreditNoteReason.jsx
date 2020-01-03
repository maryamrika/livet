/* eslint-disable react/no-array-index-key */
import React from 'react';
import CircleChart from '../../common/ChartCircle/ChartCircle';
import { TextWithDot } from '../../common/TextWithDot';


const CreditNoteReason = props => {
  const { colors, data } = props;
  return (
    <div className="status col-sm-12 pt-3">
      <CircleChart
        mainData={data}
        colors={colors}
        height={190}
        thickeness={0}
        radius={80}
        paddingAngle={0}
      />

      {
        data.map((item, index) => {
          return (
            <TextWithDot
              key={index}
              value1={item.name}
              value2={`£ ${item.value}`}
              color={colors[index % colors.length]}
            />
          );
        })
      }
    </div>
  );
};
export default CreditNoteReason;
