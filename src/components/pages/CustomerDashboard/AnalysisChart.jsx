/* eslint-disable react/no-array-index-key */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import { Button, Col } from 'reactstrap';
import CircleChart from '../../common/ChartCircle/ChartCircle';
// import PercentText from '../../common/PrecentText/Percent';
import { TextWithDot } from '../../common/TextWithDot';

const calculatePercent = (data, colors) => {
  let total = 0;
  for (const i of data) {
    total += i.value;
  }
  return data.map((item, index) => {
    const percentItem = Math.round((item.value * 100) / total);
    return (
      <TextWithDot
        color={colors[index % colors.length]}
        value1={item.name}
        value2={`${percentItem} %`}
        space
        key={index}
      />
    );
  });
};

const AnalysisChart = props => {
  const { data, colors } = props;
  return (
    <div className="pt-4">
      <div className="d-flex">
        <Col sm={6}>
          <CircleChart
            mainData={data}
            colors={colors}
            height={190}
            thickeness={70}
            radius={80}
            paddingAngle={0}
            hasLabel
            chartLable="Information"
          />
        </Col>
        <Col sm={6}>
          <div className="w-100">
            <p className="h5">THIS IS B</p>
            {calculatePercent(data, colors)}
            <a className="btn btn-trans color--grey-5d font-size--12" href="#" role="button">+ Add Channel</a>
          </div>
        </Col>
      </div>
      <Button className="btn btn-light-gray w-100 pt-2 pb-2 mt-4">Incorrect Dates £10k</Button>
    </div>
  );
};

export default AnalysisChart;
