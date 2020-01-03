/* eslint-disable react/no-array-index-key */
import React from 'react';
import { FormGroup, Input } from 'reactstrap';
import InfoBox from '../../common/InfoBox';
import { ProgressBar } from '../../common/Progress';
import { TextWithDot } from '../../common/TextWithDot';

const BugdetUtilisation = props => {
  const { hireBudget, data } = props;
  if (hireBudget) {
    return (
      <div className="white-bg d-flex flex-column budget-clm">
        <div className="d-flex justify-content-between align-items-center">
          <h6>{data.title}</h6>
          <FormGroup className="m-0">
            <Input type="select" name="select">
              <option>Last 2 weeks</option>
              <option>Last 1 months</option>
              <option>Last year</option>
            </Input>
          </FormGroup>
        </div>
        <div className="status pb-4 pt-4">
          {data.hireVbudget.map((item, index) => {
            return <TextWithDot key={index} value1={item.value1} value2={item.value2} color="#A0D367" space />;
          })}
        </div>
        <InfoBox data={data.infoBoxData} color="#28a745" />
        <p className="text-right absolute-bottom font-weight-light pr-2 pb-1 pt-1">Last Updated: {data.updateTime}</p>
      </div>
    );
  }
  return (
    <div className="white-bg d-flex flex-column budget-clm">
      <div className="d-flex justify-content-between align-items-center">
        <h6>{data.title}</h6>
        <FormGroup className="m-0">
          <Input type="select" name="select">
            <option>Last 2 weeks</option>
            <option>Last 1 months</option>
            <option>Last year</option>
          </Input>
        </FormGroup>
      </div>
      <div>
        {data.progressData.map((item, index) => {
          return <ProgressBar key={index} data={item} />;
        })}
      </div>
      <InfoBox data={data.infoBoxData} color="#FC6D51" />
      <p className="text-right absolute-bottom font-weight-light pr-2 pb-1 pt-1">Last Updated: {data.updateTime}</p>
    </div>
  );
};

export default BugdetUtilisation;
