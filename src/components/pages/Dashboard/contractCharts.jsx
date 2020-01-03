/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Col } from 'reactstrap';
import CircleChart from '../../common/ChartCircle/ChartCircle';
import { ContractDetail } from '../../common/ChartCircle/contractDetail';

const colors = ['#AFAFAF', '#75B94E'];

const ContractChart = props => {
  const { data } = props;
  // console.log
  return data.map((item, index) => {
    return (
      <Col key={index} sm={3}>
        <CircleChart
          mainData={item.data}
          colors={colors}
          height={150}
          thickeness={33}
          radius={40}
          chartLable={item.label}
          hasLabel
        />
        <ContractDetail
          total={item.total}
          aged={item.age}
          updateTime={item.updateTime}
        />
      </Col>
    );
  });
};

export default ContractChart;
