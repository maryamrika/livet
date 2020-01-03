/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import {
  DropdownItem,
  Navbar,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';
import { MdBookmark } from 'react-icons/md';

export default class Menu extends Component {
  changeRoute = (link) => {
    if (link !== '#') {
      this.props.history.push(link);
    }
  }
  itemConditions = item => {
    if (item.child.length !== 0) {
      return (
        <span>
          <DropdownToggle nav caret>
            {item.name}
          </DropdownToggle>
          <DropdownMenu>
            {
              item.child.map((name, i) => {
                return (
                  <DropdownItem key={i} onClick={() => this.changeRoute(name.link)}>
                    {name.name}
                  </DropdownItem>
                );
              })
            }
          </DropdownMenu>
        </span>
      );
    }
    return (
      <a href={item.link}>{item.name}</a>
    );
  }
  render() {
    return (
      <Navbar className="mt-2 d-flex align-items-center justify-content-between" expand="lg">
        <Nav className="pl-lg-3 col-10 col-lg-10 col-xl-9 d-flex justify-content-between" navbar>
          {
            this.props.data.map((item, index) => (
              <UncontrolledDropdown key={index} nav inNavbar>
                {this.itemConditions(item)}
              </UncontrolledDropdown>
            ))
          }
        </Nav>
        <div>
          <a href="https://github.com/reactstrap/reactstrap">Quick Links <MdBookmark /></a>
        </div>
      </Navbar>
    );
  }
}
