/* eslint-disable react/no-array-index-key */
/* eslint-disable no-mixed-operators */
import React from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Label,
  Tooltip
} from 'recharts';

const CircleChart = props => {
  const {
    mainData,
    colors,
    height,
    chartLable,
    thickeness = 0,
    radius = 0,
    paddingAngle = 0,
    width = '100%',
    hasLabel,
  } = props;
  return (
    <ResponsiveContainer height={height} width={width}>
      <PieChart>
        <Pie
          data={mainData}
          innerRadius={thickeness}
          outerRadius={radius}
          paddingAngle={paddingAngle}
          labelLine={hasLabel}
        >
          {
            mainData.map((entry, index) =>
              <Cell key={index} fill={colors[index % colors.length]} />
            )
          }
          {
            hasLabel &&
            <Label className="font-weight-light font-size--12 white-space" value={chartLable} offset={0} position="center" />
          }
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CircleChart;

