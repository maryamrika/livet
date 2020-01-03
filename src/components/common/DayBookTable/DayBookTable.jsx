/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Popover, PopoverBody, Table } from 'reactstrap';
import isArray from 'lodash/isArray';
import TextWithLabel from '../TextWithLabel/TextWithLabel';
import './_dayBookTable.scss';

class DayBookTable extends Component {
  state = {};
  toggle = (e) => {
    const { name } = e.target;
    this.setState((prevState) => {
      return { [name]: !prevState[name] };
    });
  };


  render() {
    const { data } = this.props;
    return (
      <Table>
        <tbody>
          {isArray(data) &&
            data.map(
              (item, index) => {
                const id = `popover${index}`;
                return (
                  <tr key={index}>
                    <td>
                      <TextWithLabel label="Customer" text={item.customer} />
                      <TextWithLabel label="Reference" text={item.reference} />
                    </td>
                    <td>
                      <TextWithLabel label="Account Number" text={item.accountNumber} />
                      <TextWithLabel label="Created By" text={item.createdBy} />
                    </td>
                    <td>
                      <TextWithLabel label="Date Created and Time" text={item.createdDate} />
                      <TextWithLabel label="Account Owner" text={item.accountOwner} />
                    </td>
                    <td>
                      <TextWithLabel label="On hire data and time" text={item.onHireData} />
                      <TextWithLabel label="On hire data and time" text={item.onHireData} />
                    </td>
                    <td>
                      <TextWithLabel label="Town" text={item.town} />
                      <TextWithLabel label="Post code" text={item.postCode} />
                    </td>
                    <td>
                      <TextWithLabel label="Site contact" text={item.siteContact} />
                      <TextWithLabel label="Next action date" text={item.nextActionDate} />
                    </td>
                    <td style={{ verticalAlign: 'middle' }}>
                      <Button color="green" id={id} onClick={this.toggle} name={id}>Options</Button>
                      <Popover
                        placement="bottom"
                        isOpen={this.state[id]}
                        target={id}
                        toggle={this.toggle}
                        className="day-book-table__popover"
                      >
                        <PopoverBody className="p-0">
                          <ButtonGroup className="bg-grey-f0" vertical>
                            <Button color="transparent" className="text-left font-size--12 color--grey-5d btn-none">View</Button>
                            <Button color="transparent" className="text-left font-size--12 color--grey-5d btn-none">Clone</Button>
                            <Button color="transparent" className="text-left font-size--12 color--grey-5d btn-none">Add Attachment</Button>
                            <Button color="transparent" className="text-left font-size--12 color--grey-5d btn-none">View Attachment</Button>
                            <Button color="transparent" className="text-left font-size--12 color--grey-5d btn-none">Audit Trail</Button>
                            <Button color="transparent" className="text-left font-size--12 color--grey-5d btn-none">Reassign</Button>
                          </ButtonGroup>
                        </PopoverBody>
                      </Popover>
                    </td>
                  </tr>
                );
              }
            )
          }

        </tbody>
      </Table>
    );
  }
}

DayBookTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default DayBookTable;
