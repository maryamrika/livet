import React, { Component } from 'react';
import DayBookTable from '../../common/DayBookTable/DayBookTable';
import ActionBar from '../../common/ActionBar/ActionBar';

const dayBookTableData = [{
  customer: 'Buckingham Group Limited',
  reference: 'BH23965',
  accountNumber: 837483,
  createdBy: 'Adam Hartley (AHR)',
  createdDate: '13-Sep-2017 16:39',
  accountOwner: 'Paul Greslow',
  onHireData: '13-Sep-2017 16:39',
  town: 'Manchester',
  postCode: 'M16 8DA',
  siteContact: 'Jim Beam',
  nextActionDate: '13-Sep-2017 16:39'
},
{
  customer: 'Buckingham Group Limited',
  reference: 'BH23965',
  accountNumber: 837483,
  createdBy: 'Adam Hartley (AHR)',
  createdDate: '13-Sep-2017 16:39',
  accountOwner: 'Paul Greslow',
  onHireData: '13-Sep-2017 16:39',
  town: 'Manchester',
  postCode: 'M16 8DA',
  siteContact: 'Jim Beam',
  nextActionDate: '13-Sep-2017 16:39'
},
{
  customer: 'Buckingham Group Limited',
  reference: 'BH23965',
  accountNumber: 837483,
  createdBy: 'Adam Hartley (AHR)',
  createdDate: '13-Sep-2017 16:39',
  accountOwner: 'Paul Greslow',
  onHireData: '13-Sep-2017 16:39',
  town: 'Manchester',
  postCode: 'M16 8DA',
  siteContact: 'Jim Beam',
  nextActionDate: '13-Sep-2017 16:39'
}];

class DayBookDashboard extends Component {
  render() {
    const { pageName = 'Quotes' } = this.props;
    return (
      <div className="bg-white mt-2 rounded">
        <ActionBar pageName={pageName} />
        <DayBookTable data={dayBookTableData} />
      </div>

    );
  }
}


export default DayBookDashboard;
