import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import TextWithLabel from '../../common/TextWithLabel/TextWithLabel';

const Coordinator = (props) => {
  const { className = '' } = props;
  return (
    <div className={`bg-white mt-2 ${className}`}>
      <Row>
        <Col md={2} className="center-vertically">
          <p className="font-size--18 font-weight-medium pl-2">Contract Coordinator</p>
        </Col>
        <Col sm={10}>
          <div className="bg-grey-f0 pl-3 pt-2 pb-2">
            <Row>
              <Col sm={3}>
                <TextWithLabel text="Alex Shambrook" label="Coordinator" />
              </Col>
              <Col sm={2} lg={3}>
                <TextWithLabel phone text="01457 867537" label="Telephone" />
              </Col>
              <Col sm={2} lg={3}>
                <TextWithLabel text={221253} label="EXT" />
              </Col>
              <Col sm={5} lg={3}>
                <TextWithLabel email text="alexshambroom@livetrakway.com" label="Email" />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>);
};

Coordinator.propTypes = {
  className: PropTypes.string
};

export default Coordinator;
