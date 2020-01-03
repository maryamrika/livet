import React from 'react';
import { Row, Col } from 'reactstrap';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';

// if your color is light so set attribute lightColor as props like this
// <InfoBox color="#ffff" lightColor />

const InfoBox = props => {
  const { firstValue, secondValue, firstNum, secondNum, Indicator } = props.data;
  const { color, lightColor } = props;
  return (
    <div className="color-widget">
      <Row
        className={`m-0 ${lightColor ? '' : 'text-white'} pt-3 pb-3 justify-content-around`}
        style={{ backgroundColor: color }}
      >
        <Col sm={5} className="border-right mr-2 p-0">
          <p>{firstValue}</p>
          <p className="h1">{firstNum}</p>
        </Col>
        <Col sm={6} className="p-0">
          <p>{secondValue}</p>
          <p className="h1">
            {secondNum}
            {Indicator === 'increase' && <MdArrowDropUp className="pt-2" />}
            {Indicator === 'decrease' && <MdArrowDropDown className="pt-2" />}
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default InfoBox;
