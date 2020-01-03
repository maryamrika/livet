import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import keyGen from 'uuid/v1';

export default class ProductList extends Component {
  renderProductList = () => {
    if (this.props.data) {
      return this.props.data.map(item => {
        return (
          <Col key={keyGen()} md={3}>
            <a href={item.link}>
              <div className="product-wrapper">
                <img className="product-img" src={item.img} alt={item.title} />
                <p className="product-title">{item.title}</p>
              </div>
            </a>
          </Col>
        );
      });
    }
    return <div>Loading ...</div>;
  };
  render() {
    return <Row>{this.renderProductList()}</Row>;
  }
}
