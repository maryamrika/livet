import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import TextWithLabel from '../../common/TextWithLabel/TextWithLabel';
import CallInfo from './CallInfo';

const CompanyInfo = (props) => {
  const { className } = props;
  return (
    <div className={`white-bg ${className}`}>
      <Row>
        <Col sm={12}>
          <Row className="border-bottom pb-2 mb-3">
            <Col sm={4}>
              <CallInfo className="border-right" />
            </Col>
            <Col sm={3} className="center-vertically">
              <TextWithLabel text="+44(0)1226 243413" label="Telephone" phone />
            </Col>
            <Col sm={2} className="center-vertically">
              <TextWithLabel text="AMCO.COM" label="Website" website />
            </Col>
            <Col sm={2} className="center-vertically">
              <TextWithLabel text="john@amco.com" label="Email" email />
            </Col>
          </Row>
        </Col>
        <Col sm={3}>
          <TextWithLabel className="pb-3" text="AMCO Construction" label="Company Name" />
          <TextWithLabel className="pb-3" text="44583" label="Account Number" />
          <TextWithLabel text="Rail" label="Department" />
        </Col>
        <Col sm={3}>
          <TextWithLabel
            text={['Unit 33C', 'Kyle Road', 'Kyle Industrial Estate', 'Irvine', 'KA12 8LH', 'United Kingdom']}
            label="Head Office Address"
          />
        </Col>
        <Col sm={3}>
          <TextWithLabel
            text={['Unit 44A', 'John Road', 'John Industrial Estate', 'Irvine', 'KA21 8LH', 'United Kingdom']}
            label="Invoice address"
          />
        </Col>
        <Col sm={3}>
          <TextWithLabel className="pb-3" text="GB 123456789" label="VAT Number" />
          <TextWithLabel text="Mandy Shaw" label="Account Owner" />
        </Col>
      </Row>
    </div>
  );
};

CompanyInfo.propTypes = {
  className: PropTypes.string
};

export default CompanyInfo;
