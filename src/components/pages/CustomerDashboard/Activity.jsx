import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input } from 'reactstrap';
import { TableRow } from '../../common/TableRow';

const tableData = [{
  date: '18/05/2018 - AB87414',
  description: '3% Quote Queued',
  location: '0.00 GBP - Nick Frank - ABRINDLE',
  status: 'Queued',
  color: '#2880B9'
}, {
  date: '18/05/2018 - AB87414',
  description: '3% Quote Queued',
  location: '1,051.00 GBP - Richard Daykin - BHARE',
  status: 'Lost/Cancelled',
  color: '#E15448'
},
{
  date: '18/05/2018 - AB87414',
  description: '3% Quote Queued',
  location: '1,051.00 GBP - Richard Daykin - BHARE',
  status: 'In Progress',
  color: '#059363'
},
{
  date: '18/05/2018 - AB87414',
  description: '3% Quote Queued',
  location: '1,051.00 GBP - Richard Daykin - BHARE',
  status: 'Contracted',
  color: '#E67D21'
}];
const Activity = (props) => {
  const { className = '' } = props;
  return (
    <div className={`white-bg ${className}`}>
      <div className="d-flex justify-content-between align-items-center pb-4">
        <p>Activity</p>
        <FormGroup className="m-0">
          <Input type="select" name="select" className="no-border">
            <option>View all</option>
            <option>Last 3 months</option>
            <option>Last year</option>
          </Input>
        </FormGroup>
      </div>
      <TableRow tableData={tableData} />
    </div>);
};

Activity.propTypes = {
  className: PropTypes.string
};

export default Activity;
