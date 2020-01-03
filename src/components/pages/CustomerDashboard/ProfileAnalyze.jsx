import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import TextWithLabel from '../../common/TextWithLabel/TextWithLabel';

const ProfileAnalyze = (props) => {
  const { className } = props;
  return (
    <div className={`white-bg ${className}`}>
      <Row>
        <Col sm={12}>
          <h5 className="font-size--18 font-weight-medium color--grey-5d mb-3">Age Debt Profile Analysis</h5>
        </Col>
        <Col md={6}>
          <Row>
            <Col md={6}>
              <TextWithLabel text="26/Sep/1994" label="Date Opened" className="mb-3" />
            </Col>
            <Col md={6}>
              <TextWithLabel text="ABC" label="Sales Territory" />
            </Col>
            <Col md={6}>
              <TextWithLabel text="GLASTOLT" label="Parent" />
            </Col>
            <Col md={6}>
              <TextWithLabel
                text="BB 554 BILLING CYCLE"
                label="Flexible Invoicing Period"
              />
            </Col>
          </Row>
        </Col>

        <Col md={3}>
          <TextWithLabel
            text={['Unit 33C', 'Kyle Road', 'Kyle Industrial Estate', 'Irvine', 'KA12 8LH', 'United Kingdom']}
            label="Invoicing Address"
          />
        </Col>
        <Col md={3}>
          <TextWithLabel website text="glasto.co.uk" label="Website" className="mb-3" />
          <TextWithLabel email text="info@glasto.co.uk" label="Email" className="mb-3" />
          <TextWithLabel text="45213 - Civil Engineering CONSS" label="Company Code" />
        </Col>
      </Row>
    </div>);
};

ProfileAnalyze.propTypes = {
  className: PropTypes.string
};

export default ProfileAnalyze;
