import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import bn from '../../../utils/bemnames';
import ShoppingBasket from '../../common/shoppigBasket/ShoppingBasket';
import Search from '../../common/search';
import Tabs from './Tabs';
import CompanyInfo from './CompanyInfo';
import CompanyAdditionalInfo from './CompanyAdditionalInfo';
import TabCustomerDashboard from './TabCustomerDashboard/TabCustomerDashboard';
import Contractor from '../Contactor';
import WorkInProgress from '../../common/workInProgress/index';

const bem = bn.create('customer-dashboard');

class CustomerDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  showCalendar = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    return (
      <div className={bem.b()}>
        <Row className="mb-2">
          <Col lg={10} sm={8}>
            <Search />
          </Col>
          <Col lg={2} sm={4}>
            <ShoppingBasket to="#" />
          </Col>
        </Row>
        <Row>
          <Col sm={4} className="mb-3">
            <TabCustomerDashboard to="/customer-dashboard" title="Customer Overview" />
          </Col>
          <Col sm={4} className="mb-3">
            <TabCustomerDashboard to="/customer-dashboard/new-hire" title="New Hire" />
          </Col>
          <Col sm={4} className="mb-3">
            <TabCustomerDashboard to="/customer-dashboard/new-off-hire" title="New Off Hire" />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Tabs />
          </Col>
        </Row>
        <Row>
          <Col sm={12} lg={6} className="mt-2">
            <CompanyInfo />
          </Col>
          <Col sm={12} lg={4} className="mt-2">
            <CompanyAdditionalInfo />
          </Col>
          <Col sm={12} lg={2} className="mt-2">
            <div className="white-bg">
              <p>Contact Value</p>
              <div className="d-flex text-center h-100">
                <div className="m-auto">
                  <strong className="bold h2 ">£5000 </strong>
                  <small>Order Total</small>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Switch>
          <Route exact path="/customer-dashboard" component={Contractor} />
          <Route exact path="/customer-dashboard/new-hire" component={WorkInProgress} />
          <Route exact path="/customer-dashboard/new-off-hire" component={WorkInProgress} />
        </Switch>
      </div >
    );
  }
}

export default CustomerDashboard;
