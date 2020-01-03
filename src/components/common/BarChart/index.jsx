/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  YAxis,
  XAxis,
  Tooltip,
  Bar,
  Cell
} from 'recharts';

const BarChartComp = props => {
  const { data, contract, height } = props;
  if (contract) {
    return (
      <ResponsiveContainer height={height}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="female" stackId="a" fill="#AB91EC" />
          <Bar dataKey="male" stackId="a" fill="#A0D367" />
          <Bar dataKey="uv" stackId="a" fill="#FC6D51" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
  return (
    <ResponsiveContainer height={height}>
      <BarChart data={data}>
        <Bar dataKey="uv" fill="#8884d8">
          {
            data.map((entry, index) => <Cell key={index} fill={entry.color} />)
          }
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComp;
