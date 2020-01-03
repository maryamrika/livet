import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import './_dayBookSearch.scss';
import ShoppingBasket from '../../common/shoppigBasket/ShoppingBasket';
import Search from '../../common/search/index';
import Calendar from '../../common/Calendar';

class DayBookSearchBar extends Component {
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Row className="mb-2 mt-2 day-book-search">
        <Col md={7} lg={8}>
          <Search />
        </Col>
        <Col md={3} lg={2}>
          <div className="input-wrapper bg-white">
            <Calendar />
          </div>
        </Col>
        <Col md={2}>
          <ShoppingBasket to="#" />
        </Col>
      </Row>
    );
  }
}

export default DayBookSearchBar;
