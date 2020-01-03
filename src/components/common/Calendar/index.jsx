/* eslint-disable no-script-url */
/* eslint-disable radix */
import React, { Component } from 'react';
import { Button, Row, Input } from 'reactstrap';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const addDays = (numDays) => {
  const dateObj = new Date();
  dateObj.setDate(dateObj.getDate() + numDays);
  return dateObj.toLocaleDateString();
};

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      fromDay: '',
      toDay: ''
    };
  }
  componentWillMount = () => {
    this.setState({
      fromDay: addDays(7),
      toDay: addDays(0)
    });
  }
  showCalendar = () => {
    this.setState({
      open: true
    });
  };
  hideCalendar = () => {
    this.setState({
      open: false
    });
  }
  handleToClick = day => {
    this.setState({
      toDay: day.toLocaleDateString()
    });
  };
  handleFromClick = day => {
    this.setState({
      fromDay: day.toLocaleDateString()
    });
  };
  changeRange = value => {
    if (value.target.value !== 'custom') {
      this.setState({
        fromDay: addDays(parseInt(value.target.value)),
        toDay: addDays(0)
      });
    }
  }
  cancel = () => {
    this.setState({
      open: false
    });
  }
  render() {
    return (
      <div className="calendar-wrapper h-100">
        <Button className="w-100 h-100 font-weight-light" onClick={this.showCalendar}>{this.state.toDay} - {this.state.fromDay}</Button>
        <div className={`calendar ${this.state.open ? '' : 'hide'}`}>
          <DayPicker className="dayPicker" onDayClick={this.handleFromClick} />
          <DayPicker className="dayPicker" onDayClick={this.handleToClick} />
          <div className="customRange">
            <div className="border-left pl-5">
              <Row>
                <p className="h5">Date Range</p>
                <Input type="select" name="select" onChange={this.changeRange}>
                  <option>custom</option>
                  <option value="7">7 day</option>
                  <option value="30">30 day</option>
                </Input>
              </Row>
              <Row className="justify-content-around">
                <p className="final-selected-day font-weight-light text-center pl-3 pr-3 ">{this.state.fromDay}</p>
                <p className="final-selected-day font-weight-light text-center pl-3 pr-3 ">{this.state.toDay}</p>
              </Row>
              <Button color="success" className=" font-weight-light" onClick={this.hideCalendar}>Apply</Button>
              <Button color="link" className="font-weight-light " onClick={this.cancel}>Cancel</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
