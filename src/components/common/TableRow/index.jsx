import React from 'react';
import { Col, Row } from 'reactstrap';
import keyGen from 'uuid/v1';

export const TableRow = props => {
  const { tableData } = props;
  return (
    <div>
      {tableData.map((item) => {
        return (
          <Row key={keyGen()} className="font-size--12 d-flex justify-content-between border-bottom">
            <Col md={3} className="font-weight-bold">{item.date}</Col>
            <Col md={3}>{item.description}</Col>
            <Col md={4}>{item.location}</Col>
            <Col md={2}><span className="sm-label" style={{ backgroundColor: item.color }}>{item.status}</span></Col>
          </Row>
        );
      })}
    </div>
  );
};
