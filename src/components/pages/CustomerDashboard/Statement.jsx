import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import TextWithLabel from '../../common/TextWithLabel/TextWithLabel';

const Statement = (props) => {
  const { className } = props;
  return (
    <div className={`${className} white-bg center-vertically`}>
      <Row>
        <Col md={6}>
          <TextWithLabel fontSize={24} fontWeight="medium" text="Yes" label="Statements Suppressed" />
        </Col>
        <Col md={6}>
          <TextWithLabel fontSize={24} fontWeight="medium" text="No" label="Letter Suppressed" />
        </Col>
        <Col sm={12}>
          <div className="divider" />
        </Col>
        <Col md={6}>
          <TextWithLabel fontSize={24} fontWeight="medium" text="Required" label="Order Number" className="mb-3" />
        </Col>
        <Col md={6}>
          <TextWithLabel fontSize={24} fontWeight="medium" text="No" label="VAT Exempt" className="mb-3" />
        </Col>
      </Row>
    </div>
  );
};

Statement.propTypes = {
  className: PropTypes.string
};

export default Statement;
