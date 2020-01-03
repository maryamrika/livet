import React from 'react';
import { Row, Col, InputGroup, Input, Button, Table } from 'reactstrap';
import { MdSearch, MdShoppingCart } from 'react-icons/md';
import bn from '../../../utils/bemnames';
import Calendar from '../../common/Calendar';
// import FileIcon from '../../../assets/images/file-o.svg';
// import CommentIcon from '../../../assets/images/comments-o.svg';
// import PhoneIcon from '../../../assets/images/phone-square.svg';
// import dropDown from 'react-icons/lib/md/arrow-drop-down'
const bem = bn.create('contact');

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={bem.b()}>
        <Row>
          <Col md={6}>
            <InputGroup className="search-box">
              <Input placeholder="search" />
              <Button color="success" className="i-btn opacity-6">
                {' '}
                <MdSearch className="h5" /> Search
              </Button>
            </InputGroup>
          </Col>
          <Col md={2} className="p-0">
            <Calendar />
          </Col>
          <Col md={2} className="p-0">
            <div className="wh-bg-border">
              <p>
                Customer No: <b> 36507 </b>
              </p>
              <p>
                VAT No:
                <b> 3423</b>
              </p>
            </div>
          </Col>

          <Col md={2}>
            <div className="wh-bg-border">
              <Button color="primary" className="thin f-btn i-btn">
                View Basket <MdShoppingCart className="h5 text-success" />
              </Button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <div className="white-bg">
              <Row>
                <Col sm={3}>
                  <p>AMCO Construction</p>
                  <p className="gray-color">Compnay Name</p>
                  <p>Rail</p>
                  <p className="gray-color">Department</p>
                </Col>
                <Col sm={3}>
                  <p>Unit 33C</p>
                  <p>Kyle Road</p>
                  <p>Kyle Industrial Estate</p>
                  <p>Irvine</p>
                  <p>KA12 8LH</p>
                  <p>United Kingdom</p>
                  <p className="gray-color">Head Office Address</p>
                </Col>
                <Col sm={3}>Prospect Category N/A Sub Category</Col>
                <Col sm={3}>AMCQ Code Mandy Shaw LIVE Contact</Col>
              </Row>
            </div>
          </Col>
          <Col md={4} className="pl-0">
            <div className="white-bg">
              <Row>
                <Col sm={4}>
                  <p className="bold pt-4">No</p>
                  <p className="pb-5">Insurance</p>
                  <p className="bold text-danger">£19,000.00</p>
                  <p className="pb-4 text-danger">Assets on Hire</p>
                </Col>

                <Col sm={4}>
                  <p className="bold pt-4">Yes</p>
                  <p className="pb-5">Quoted Rates</p>
                  <p className="bold text-danger">£22,000.00</p>
                  <p className="pb-4 text-danger">Balance</p>
                </Col>

                <Col sm={4}>
                  <p className="bold pt-4">Stop</p>
                  <p className="pb-5">Quoted Rates</p>
                  <p className="bold text-danger">£50,000.00</p>
                  <p className="pb-4 text-danger">Credit Limit</p>
                </Col>
              </Row>
            </div>
          </Col>

          <Col md={2} className="pl-0">
            <div className="white-bg">
              <p>Contact Value</p>
              <div className="d-flex text-center">
                <div className="m-auto">
                  <strong className="bold h2">£5000 </strong>
                  <small>Order Total</small>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={12}>
            <div className="white-bg">
              <p>Contacts</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <div className="white-bg p-3">
              <Table className="text-gray" borderless responsive>
                <thead>
                  <tr className="bb-light">
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Telephone</td>
                    <td>Email</td>
                    <td>Mobile</td>
                    <td>Town/City</td>
                    <td>Department</td>
                    <td>Add</td>
                    <td>Edit All</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-uppercase">Name</td>
                    <td className="text-uppercase">Surname</td>
                    <td>0770867531</td>
                    <td>name.name@company.com</td>
                    <td>0770867531</td>
                    <td className="text-uppercase">Area</td>
                    <td>
                      <button color="primary">primary</button>
                    </td>
                    <td className="text-uppercase text-green">View</td>
                    <td className="text-uppercase text-green">Edit</td>
                  </tr>
                  <tr>
                    <td className="text-uppercase">Name</td>
                    <td className="text-uppercase">Surname</td>
                    <td>0770867531</td>
                    <td>name.name@company.com</td>
                    <td>0770867531</td>
                    <td className="text-uppercase">Area</td>
                    <td>
                      <button color="primary">primary</button>
                    </td>
                    <td className="text-uppercase text-green">View</td>
                    <td className="text-uppercase text-green">Edit</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contact;
