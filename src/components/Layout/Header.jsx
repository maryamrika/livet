import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  Col
} from 'reactstrap';
import isObject from 'lodash/isObject';
import isFunction from 'lodash/isFunction';
import Menu from './MainMenu';
import bn from '../../utils/bemnames';
import Search from '../common/search';


const bem = bn.create('header');
const MenuItems = [
  {
    name: 'Assets',
    link: '#',
    child: [{
      name: 'Assets-1',
      link: '#'
    },
    {
      name: 'Assets-2',
      link: '#'
    },
    {
      name: 'Assets-3',
      link: '#'
    }]
  },
  {
    name: 'Directory',
    link: '#',
    child: [{
      name: 'Directory-1',
      link: '#'
    },
    {
      name: 'Directory-2',
      link: '#'
    },
    {
      name: 'Directory-3',
      link: '#'
    }]
  },
  {
    name: 'Reports',
    link: '#',
    child: [{
      name: 'Reports-1',
      link: '#'
    },
    {
      name: 'Reports-2',
      link: '#'
    },
    {
      name: 'Reports-3',
      link: '#'
    }]
  },
  {
    name: 'HR / Training',
    link: '#',
    child: [{
      name: 'HR / Training-1',
      link: '#'
    },
    {
      name: 'HR / Training-2',
      link: '#'
    },
    {
      name: 'HR / Training-3',
      link: '#'
    }]
  },
  {
    name: 'Support Office',
    link: '#',
    child: [{
      name: 'Support Office-1',
      link: '#'
    },
    {
      name: 'Support Office-2',
      link: '#'
    },
    {
      name: 'Support Office-3',
      link: '#'
    }]
  },
  {
    name: 'Rental Admin',
    link: '#',
    child: []
  },
  {
    name: 'Workshops',
    link: '#',
    child: [{
      name: 'Workshops-1',
      link: '#'
    },
    {
      name: 'Workshops-2',
      link: '#'
    },
    {
      name: 'Workshops-3',
      link: '#'
    }]
  },
  {
    name: 'Sales',
    link: '#',
    child: [{
      name: 'Sales-1',
      link: '#'
    },
    {
      name: 'Sales-2',
      link: '#'
    },
    {
      name: 'Sales-3',
      link: '#'
    }]
  },
  {
    name: 'Help / I.T.',
    link: '#',
    child: [{
      name: 'Help / I.T.-1',
      link: '#'
    },
    {
      name: 'Help / I.T.-2',
      link: '#'
    },
    {
      name: 'Help / I.T.-3',
      link: '#'
    }]
  },
];

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

    state = {
      isOpenNotificationPopover: false,
      isNotificationConfirmed: true,
      isOpenUserCardPopover: false,
    };

    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    toggleNotificationPopover = () => {
      this.setState({
        isOpenNotificationPopover: !this.state.isOpenNotificationPopover,
      });

      if (!this.state.isNotificationConfirmed) {
        this.setState({ isNotificationConfirmed: true });
      }
    };

    toggleUserCardPopover = () => {
      this.setState({
        isOpenUserCardPopover: !this.state.isOpenUserCardPopover,
      });
    };

    handleSidebarControlButton = event => {
      event.preventDefault();
      event.stopPropagation();

      document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
    };
    /* eslint-disable no-unused-vars */
    // very important to keep this unused value for future implementation of search
    search = (value) => {
      const { history } = this.props;
      if (isObject(history) && isFunction(history.push)) {
        history.push('/customer-dashboard');
      }
    };

    render() {
      return (
        <div className={bem.b()}>
          <Navbar expand="lg">
            <NavbarBrand href="/dashboard">
              <i className="icon icon--keplar mr-3 d-flex align-items-center" />
              <i className="icon icon--live  d-flex align-items-center" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <div className="w-100 d-flex align-items-center">
                <Col lg={6} xl={7}>
                  <Search
                    onClick={this.search}
                    placeholder="Enter Customer Name / Number"
                    className="bg-grey-e6"
                  />
                </Col>
                <Col lg={6} xl={5}>
                  <Nav className="justify-content-end border-left" navbar>
                    <NavItem>
                      <NavLink href="/components" className="">Add Company <i
                        className="icon icon--add-company ml-1 d-flex align-items-center"
                      />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink>April 12,2019</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                                          Alex Shambook
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                                              Account
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                                              Logout
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Col>
              </div>
            </Collapse>
          </Navbar>
          <Menu data={MenuItems} />
        </div>
      );
    }
}

export default withRouter(Header);
