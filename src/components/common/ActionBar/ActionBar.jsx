import React, { Component } from 'react';
import { Input, Label, Button, FormGroup, Row, Col, ButtonGroup } from 'reactstrap';
import PropTypes from 'prop-types';
import SelectWithIcon from '../SelectWithIcon/SelectWithIcon';
import './_action-bar.scss';

class ActionBar extends Component {
    state = {
      dayBookViewAs: '',
      sortAsc: true,
      sortBy: '',
      search: ''
    };

    handleInputChange = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    sortAsc = () => {
      this.setState({
        sortAsc: true
      });
    };

    sortDesc = () => {
      this.setState({
        sortAsc: false
      });
    };

    render() {
      const { pageName } = this.props;
      const { dayBookViewAs, sortAsc, sortBy, search } = this.state;
      return (
        <div className="pl-2 pr-2 action-bar">
          <Row>
            <Col sm={12} className="pb-4 pt-4 align-items-center">
              <Row>
                <Col sm={2} className="d-flex align-items-center">
                  <h2 className="font-size--14 font-weight-bold color--grey-5d">
                    {pageName}
                  </h2>
                </Col>
                <Col sm={4} lg={3}>
                  <FormGroup className="d-flex justify-content-between mb-0 align-items-center">
                    <Label className="white-space-no-wrap pr-2 mb-0 font-size--12 color--grey-5d">Day
                                          Book Search
                    </Label>
                    <div className="input-wrapper d-flex align-items-center action-bar__input-wrapper">
                      <i className="icon icon--search-grey ml-2 d-flex align-items-center" />
                      <Input
                        type="text"
                        placeholder="Search"
                        className="input-blank  action-bar__input-blank"
                        value={search}
                        name="search"
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </FormGroup>
                </Col>
                <Col sm={3}>
                  <FormGroup className="d-flex justify-content-between mb-0 align-items-center">
                    <Label for="sortBy" className="white-space-no-wrap pr-2 mb-0 font-size--12 color--grey-5d">Sort by</Label>
                    <SelectWithIcon
                      onChange={this.handleInputChange}
                      className="input-wrapper action-bar__input-wrapper"
                      options={[{ name: 'name', value: 'name' }, {
                        name: 'surname',
                        value: 'surname'
                      }]}
                      icon="chevron-down"
                      name="sortBy"
                      value={sortBy}
                    />
                  </FormGroup>
                </Col>
                <Col sm={2} lg={1}>
                  <ButtonGroup>
                    <Button
                      color="white"
                      className="mr-3 outline-0 btn-none bg-white p-0"
                      onClick={this.sortAsc}
                    >
                      <i className={`${sortAsc && 'icon--active'} icon icon--sort-ascending d-flex align-items-center`} />
                    </Button>
                    <Button
                      color="white"
                      className="outline-0 btn-none bg-white p-0"
                      onClick={this.sortDesc}
                    >
                      <i className={`${!sortAsc && 'icon--active'} icon icon--sort-descending d-flex align-items-center`} />
                    </Button>
                  </ButtonGroup>
                </Col>
                <Col lg={3} md={5}>
                  <FormGroup className="d-flex justify-content-between mb-0 align-items-center">
                    <Label className="white-space-no-wrap pr-2 mb-0 font-size--12 color--grey-5d">View day Book As</Label>
                    <SelectWithIcon
                      onChange={this.handleInputChange}
                      className="input-wrapper action-bar__input-wrapper"
                      options={[{ name: 'test', value: 'test' }]}
                      icon="chevron-down"
                      name="dayBookViewAs"
                      value={dayBookViewAs}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      );
    }
}

ActionBar.propTypes = {
  pageName: PropTypes.string.isRequired
};

export default ActionBar;
