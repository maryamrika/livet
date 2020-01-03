import React from 'react';
import { Row } from 'reactstrap';

const AncillariesVBudget = () => {
  return (
    <div className="white-bg">
      <div className="d-flex justify-content-between align-items-center">
        <h6>Ancillaries v Budget</h6>
        <p className="h6 font-weight-light">Month to date</p>
      </div>
      <div className="pt-2 pb-2">
        <div className="border-bottom d-flex justify-content-between text-center p-2">
          <p className="w-20">Repairs</p>
          <p className="w-20">Cleaning</p>
          <p className="w-20">Fuel</p>
          <p className="w-20">Others</p>
        </div>
        <div className="d-flex justify-content-between text-center p-2">
          <p className="w-20">£0</p>
          <p className="w-20">£0</p>
          <p className="w-20">£0</p>
          <p className="w-20">£0</p>
        </div>
      </div>
      <div className="color-widget">
        <Row className="m-0 flex-column pl-3 pr-3 pt-1 justify-content-around blue-widget">
          <div className="border-bottom d-flex justify-content-between text-center pb-2 text-white">
            <p className="w-20">0%</p>
            <p className="w-20">0%</p>
            <p className="w-20">0%</p>
            <p className="w-20">0%</p>
          </div>
          <div className="d-flex justify-content-between text-center align-items-end pl-3 pr-3 pt-3 text-white">
            <p className="h6 pl-3">Total: <span className="h2"> £0</span></p>
            <p className="pr-3 pb-1"><span className="h3">0</span>%</p>
          </div>
        </Row>
      </div>
      <p className="text-right color--grey-5d font-weight-light pr-2 pt-1 absolute-bottom">Last Updated: 1 Nov 2018 13:00</p>
    </div>
  );
};

export default AncillariesVBudget;
