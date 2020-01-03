import React, { Component } from 'react';
import { Col, Input, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import SelectWithIcon from '../SelectWithIcon/SelectWithIcon';
import SearchButton from '../searchButtton/SearchButton';

class DayBookSearchBar extends Component {
    state = {
      searchByDate: '',
      search: ''
    };
    handleInputChange = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    render() {
      const { searchByDate, search } = this.state;
      return (
        <Row className="mb-2 mt-2 day-book-search">
          <Col sm={7}>
            <div className="input-wrapper bg-white d-flex p-1">
              <Input
                type="text"
                className="input-blank"
                name="search"
                onChange={this.handleInputChange}
                value={search}
              />
              <SearchButton onClick={() => {
                        }}
              />
            </div>
          </Col>
          <Col sm={3}>
            <div className="input-wrapper bg-white d-flex p-1 align-items-center">
              <SelectWithIcon
                name="searchByDate"
                value={searchByDate}
                height={38}
                icon="caret-down"
                options={[{ name: 'test', value: 'test' }]}
                onChange={this.handleInputChange}
              />
            </div>
          </Col>
          <Col sm={2}>
            <div className="input-wrapper bg-white d-flex p-1 text-center">
              <Link
                to="#"
                className="font-size--14 color--grey-5d line-height--45 center-block d-flex align-items-center"
              >View
                            basket
                            <i className="icon icon--basket d-flex align-items-center ml-1" />
              </Link>
            </div>
          </Col>
        </Row>
      );
    }
}

export default DayBookSearchBar;
