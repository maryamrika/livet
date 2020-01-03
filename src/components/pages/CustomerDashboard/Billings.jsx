import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import TextWithLabel from '../../common/TextWithLabel/TextWithLabel';

const Billings = (props) => {
  const { header, labelLeft, textLeft, labelRight, textRight, fontSize = 24, fontWeight = 'medium', className } = props;
  return (
    <Row className={className}>
      <Col sm={12}>
        <h2 className="font-size--14 color--grey-5d">{header}</h2>
      </Col>
      <Col sm={6}>
        <TextWithLabel
          text={textLeft}
          label={labelLeft}
          fontSize={fontSize}
          fontWeight={fontWeight}
        />
      </Col>
      <Col sm={6}>
        <TextWithLabel
          text={textRight}
          label={labelRight}
          fontSize={fontSize}
          fontWeight={fontWeight}
        />
      </Col>
    </Row>
  );
};

Billings.propTypes = {
  header: PropTypes.string.isRequired,
  labelLeft: PropTypes.string.isRequired,
  textLeft: PropTypes.string.isRequired,
  labelRight: PropTypes.string.isRequired,
  textRight: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.oneOf(['light', 'medium', 'bold'])
};

export default Billings;
