/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/first */
import React from 'react';
import Slider from '../../../assets/images/sliders.svg';
import {
  FormGroup,
  InputGroup,
  Input,
  InputGroupAddon,
  Row,
  Col
} from 'reactstrap';
import { ProgressBar } from '../../common/Progress';
import BugdetUtilisation from './BudgetUtilisation';
import AncillariesVBudget from './AncillariesVBudget';
import CreditNoteReason from './CreditNoteReason';
import StockControlWidget from './StockControlWidget';
import {
  progressData,
  redBg,
  grayBg,
  data,
  data1,
  COLORS1,
  data2,
  contractChartData,
  hireWidget,
  utilisation
} from './data';
import bn from '../../../utils/bemnames';
import ContractChart from './contractCharts';
import BarChartComp from '../../common/BarChart';

const bem = bn.create('dashboard');

class DashboardPage extends React.Component {
  render() {
    return (
      <div className={bem.b()}>
        <Row className="dashboard-header">
          <Col sm={6} className="pb-1">
            <InputGroup>
              <InputGroupAddon addonType="prepend">Depot</InputGroupAddon>
              <Input placeholder="Chesterfield" />
            </InputGroup>
          </Col>
          <Col sm={6} className="pb-1">
            <InputGroup>
              <InputGroupAddon addonType="prepend">Actions</InputGroupAddon>
              <Input placeholder="Something should goes here" />
            </InputGroup>
          </Col>
        </Row>

        <Row className="charts">
          <Col md={6} lg={3} className="pb-1 pt-1 col">
            <div className="white-bg">
              <div className="d-flex justify-content-between align-items-center">
                <p>Asset Status</p>
                <FormGroup className="m-0">
                  <Input type="select" name="select">
                    <option>Last 6 weeks</option>
                    <option>Last 3 months</option>
                    <option>Last year</option>
                  </Input>
                </FormGroup>
              </div>
              <StockControlWidget data={data1} colors={COLORS1} />
            </div>
          </Col>

          <Col md={6} lg={6} className="pb-1 pt-1 col">
            <div className="white-bg">
              <div className="d-flex justify-content-between align-items-center pb-5">
                <p>Overall Performance</p>
                <FormGroup className="m-0">
                  <Input type="select" name="select">
                    <option>Last 6 weeks</option>
                    <option>Last 3 months</option>
                    <option>Last year</option>
                  </Input>
                </FormGroup>
              </div>
              <BarChartComp data={data2} height="38%" />
            </div>
          </Col>

          <Col sm={12} lg={3} className="pb-1 pt-1 dilution">
            <div className="white-bg">
              <div className="d-flex justify-content-between align-items-center">
                <p>Dilution</p>
                <FormGroup className="m-0">
                  <Input type="select" name="select">
                    <option>Last 6 weeks</option>
                    <option>Last 3 months</option>
                    <option>Last year</option>
                  </Input>
                </FormGroup>
              </div>
              <div className="dilution--main">
                <div className="dilution--inner">
                  <div className="top">£100k</div>
                  <div className="bottom">50k</div>
                </div>
              </div>
              <div className="status col-sm-10 bottom-st">
                <h6>Status</h6>
                <ul>
                  <li><span style={redBg} />Credit Needs</li>
                  <li><span style={grayBg} />Sales</li>
                </ul>
                <a href="#" className="view-btn">View more</a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} lg={3} className="pb-1 d-flex d-lg-block pt-1 d-">
            <div className="white-bg mb-2 small-box col-sm-6 col-lg-12">
              <div className="d-flex justify-content-between align-items-center pb-5">
                <h6>Outside Haulage Margin</h6>
                <img width="15" src={Slider} alt="" />
              </div>
              <ProgressBar data={progressData[1]} currency number />
            </div>
            <div className="white-bg small-box col-sm-6 col-lg-12">
              <div className="d-flex justify-content-between align-items-center pb-5">
                <h6>Internal Haulage Efficiency</h6>
                <img width="15" src={Slider} alt="" />
              </div>
              <ProgressBar data={progressData[2]} number />
            </div>
          </Col>

          <Col sm={12} lg={6} className="pb-1 pt-1">
            <div className="white-bg col">
              <p>Contract Scanning</p>
              <Row>
                <ContractChart data={contractChartData} />
              </Row>
            </div>
          </Col>
          <Col sm={12} lg={3} className="pb-1 pt-1">
            <div className="white-bg">
              <div className="d-flex justify-content-between align-items-center">
                <h6>Credit Note Reason</h6>
                <FormGroup className="m-0">
                  <Input type="select" name="select">
                    <option>Last 2 weeks</option>
                    <option>Last 1 months</option>
                    <option>Last year</option>
                  </Input>
                </FormGroup>
              </div>
              <CreditNoteReason data={data} colors={COLORS1} />
            </div>
          </Col>
        </Row>
        <div className="title-with-border pt-4 mb-4 text-center">
          <span className="color--green-1">Revenue / Fleet</span>
        </div>
        <Row className="charts">
          <Col sm={12} lg={4} className="pb-1 pt-1">
            <BugdetUtilisation data={hireWidget} hireBudget />
          </Col>

          <Col sm={12} lg={4} className="pb-1 pt-1">
            <BugdetUtilisation data={utilisation} />
          </Col>

          <Col sm={12} lg={4} className="pb-1 pt-1">
            <AncillariesVBudget />
          </Col>
        </Row>
      </div>
    );
  }
}

export default DashboardPage;
