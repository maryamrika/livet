import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import TextWithLabel from '../../common/TextWithLabel/TextWithLabel';

const CompanyAdditionalInfo = (props) => {
  const { className } = props;
  return (
    <div className={`white-bg center-vertically ${className}`}>
      <Row>
        <Col sm={4}>
          <TextWithLabel text="No" label="Insurance" className="mb-3" />
          <TextWithLabel text="£19,000.00" label="Assets on Hire" color="red-cb" />
        </Col>
        <Col sm={4}>
          <TextWithLabel text="Yes" label="Quoted Rates" className="mb-3" />
          <TextWithLabel text="£22,000.00" label="Balance" />
        </Col>

        <Col sm={4}>
          <TextWithLabel text="Stop" label="Quoted Rates" color="red-cb" className="mb-3" />
          <TextWithLabel text="£50,000.00" label="Credit Limit" color="red-cb" />
        </Col>
      </Row>
    </div>
  );
};

CompanyAdditionalInfo.propTypes = {
  className: PropTypes.string
};

export default CompanyAdditionalInfo;
