import React, { Fragment } from 'react';
import { Row, Col, Button } from 'reactstrap';
import Coordinator from '../CustomerDashboard/Coordinator';
import Activity from '../CustomerDashboard/Activity';
import FileIcon from '../../../assets/images/file-o.svg';
import CommentIcon from '../../../assets/images/comments-o-green.svg';
import InfoBox from '../../common/InfoBox';
import { COLORS, data, data3, infoBoxData } from '../CustomerDashboard/data';
import Billings from '../CustomerDashboard/Billings';
import BarChartComp from '../../common/BarChart';
import AnalysisChart from '../CustomerDashboard/AnalysisChart';
import Statement from '../CustomerDashboard/Statement';
import ProfileAnalyze from '../CustomerDashboard/ProfileAnalyze';

const Contractor = () => {
  return (
    <Fragment>
      <Row>
        <Col sm={12}>
          <Coordinator />
        </Col>
      </Row>
      <Row>
        <Col sm={12} lg={8} className="mt-2">
          <Activity />
        </Col>
        <Col sm={6} lg={2} className="mt-2">
          <div className="white-bg">
            <p>Outstanding Queries</p>
            <div className="d-flex h-100">
              <div className="m-auto align-items-center w-100 d-flex">
                <img className="w-25" src={FileIcon} alt="Outstanding Queries" />
                <div className="pr-2 pl-2">
                  <p className="font-size--12">Total</p>
                  <p className="h3 bold color--grey-5d">50</p>
                </div>
                <div>
                  <p className="font-size--12">Value</p>
                  <p className="h3 bold color--grey-5d">66</p>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col sm={6} lg={2} className="mt-2">
          <div className="white-bg">
            <div className="d-flex">
              <p>Open Complaints</p>
            </div>
            <div className="d-flex h-100">
              <div className="m-auto align-items-center w-100 d-flex">
                <img className="w-25 green-icon" src={CommentIcon} alt="Open Complaints" />
                <div className="pr-2 pl-2">
                  <p className="font-size--12">Total</p>
                  <p className="h3 bold color--grey-5d">50</p>
                </div>
                <div>
                  <p className="font-size--12">Last 30 Days</p>
                  <p className="h3 bold color--grey-5d">66</p>
                </div>
              </div>
            </div>
          </div>
        </Col>

      </Row>
      <Row>
        <Col lg={4} md={12} className="mt-2">
          <div className="white-bg">
            <InfoBox lightColor color="#fff" data={infoBoxData} />
          </div>
        </Col>

        <Col lg={8} sm={12} className="mt-2">
          <div className="white-bg center-vertically">
            <Row>
              <Col sm={6} className="border-right">
                <Billings
                  header="Billing"
                  labelLeft="Date of Last Invoice"
                  textLeft="28/01/2018"
                  labelRight="Date of Last Repayment"
                  textRight="02/05/2018"
                />
              </Col>
              <Col sm={6}>
                <Billings
                  header="Turn Ove"
                  labelLeft="Year to Date"
                  textLeft="564,555.02"
                  labelRight="Current Month"
                  textRight="45,556.05"
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={8} sm={12} className="mt-2">
          <div className="white-bg">
            <p>Age Debt Profile</p>
            <Row>
              <Col sm={12} lg={6}>
                <BarChartComp data={data3} contract height={350} />
              </Col>
              <Col sm={12} lg={6}>
                <BarChartComp data={[data3[5]]} contract height={350} />
              </Col>
            </Row>
          </div>
        </Col>
        <Col sm={12} lg={4} className="mt-2">
          <div className="white-bg">
            <p>Age Debt Profile Analysis</p>
            <AnalysisChart data={data} colors={COLORS} />
          </div>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col sm={12} lg={4}>
          <Statement />
        </Col>
        <Col sm={12} lg={8}>
          <ProfileAnalyze />
        </Col>
      </Row>
      <div className="d-flex justify-content-end mt-5">
        <Button color="green" className="rounded-19">10 Customer Instructions</Button>
      </div>
    </Fragment>
  );
};

export default Contractor;
