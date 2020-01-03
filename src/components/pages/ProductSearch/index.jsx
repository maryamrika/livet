/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/newline-after-import */
import React, { Component } from 'react';
import {
  Row,
  Col,
  InputGroup,
  Input,
  Button,
  InputGroupAddon,
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Form
} from 'reactstrap';
import classnames from 'classnames';
import { MdSearch } from 'react-icons/md';
import ProductList from './product';
import data from './data';
import bn from '../../../utils/bemnames';
const bem = bn.create('productSearch');

export default class ProductSearch extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  changePage = () => {
  };
  render() {
    return (
      <div className={bem.b()}>
        <Container>
          <Row>
            <Col md={11}>
              <InputGroup>
                <Input placeholder="and..." />
                <InputGroupAddon addonType="append">
                  <Button color="secondary">I'm a button</Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>
            <Col md={1}>
              <Button>view basket</Button>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Button>Customer Overview</Button>
            </Col>
            <Col md={4}>
              <Button>New Hire</Button>
            </Col>
            <Col md={4}>
              <Button>New Off Hire</Button>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <div>Quotes</div>
              <div>
                <span>5</span>
              </div>
            </Col>
            <Col md={2}>
              <div>Quotes</div>
              <div>
                <span>5</span>
              </div>
            </Col>
            <Col md={2}>
              <div>Quotes</div>
              <div>
                <span>5</span>
              </div>
            </Col>
            <Col md={2}>
              <div>Quotes</div>
              <div>
                <span>5</span>
              </div>
            </Col>
            <Col md={2}>
              <div>Quotes</div>
              <div>
                <span>5</span>
              </div>
            </Col>
            <Col md={2}>
              <div>Quotes</div>
              <div>
                <span>5</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <p>hello</p>
            </Col>
            <Col md={3}>
              <p>Something</p>
            </Col>
            <Col md={3}>
              <p>Something</p>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={10} className="d-flex">
              <Nav tabs className="d-flex justify-content-between">
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === '1'
                    })}
                    onClick={() => {
                      this.toggle('1');
                    }}
                  >
                    Job Sheet - A
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === '2'
                    })}
                    onClick={() => {
                      this.toggle('2');
                    }}
                  >
                    Add Job Sheet
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md={2}>
              <a href="#">Edit Hire Information</a>
            </Col>
          </Row>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Form>
                <Row className="align-items-center">
                  <Col md={2}>
                    <Input
                      type="email"
                      name="email"
                      placeholder="HybridPanels - Install"
                    />
                  </Col>
                  <Col md={2}>
                    <Input type="select" name="select">
                      <option>Rail Template</option>
                    </Input>
                  </Col>
                  <Col md={2}>
                    <Input type="select" name="select">
                      <option>Bramley Vale, Chesterfield</option>
                    </Input>
                  </Col>
                  <Col md={3}>
                    <Input type="select" name="select">
                      <option>95% - Highly likely with confirmed dates</option>
                    </Input>
                  </Col>
                  <Col md={3} className="d-flex justify-content-around">
                    <span>
                      <Input type="checkbox" /> Site Visit Required
                    </span>
                    <span>
                      <Input type="checkbox" /> Include in Contract
                    </span>
                  </Col>
                </Row>
              </Form>
            </TabPane>
            <TabPane tabId="2">
              <p>do something</p>
            </TabPane>
          </TabContent>
          <div className="white-bg p-5 mt-3">
            <p className="h3 pl-3">Products</p>
            {/* <Row> */}
            <div className="d-flex">
              <Col md={8}>
                <InputGroup>
                  <Input placeholder="search" className="search-input" />
                  <InputGroupAddon className="search-icon" addonType="append">
                    <MdSearch />
                  </InputGroupAddon>
                </InputGroup>
              </Col>
              <Col md={2}>
                <Input type="select" name="select">
                  <option>Bramley Vale, Chesterfield</option>
                </Input>
              </Col>
              <Col md={2}>
                <Button color="success" className="text-white w-100">
                  Search
                </Button>
              </Col>
            </div>
            {/* </Row> */}
            <p className="pt-4 pb-3 pl-3">Browse by categories</p>
            <ProductList data={data} />
            <div className="pt-4 pb-4 d-flex justify-content-center">
              <Button className="circle-btn active-page" />
              <Button className="circle-btn" />
              <Button className="circle-btn" />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
