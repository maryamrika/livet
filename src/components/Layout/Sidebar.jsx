import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import keyGen from 'uuid/v1';
import TooltipItem from '../common/TooltipItem/TooltipItem';
import bn from '../../utils/bemnames';

const bem = bn.create('sidebar');

export default class Sidebar extends React.Component {
    tooltips = [
      {
        placement: 'left',
        text: 'Daybook',
        className: 'icon icon--daybook',
        to: '/day-book'
      },

      {
        placement: 'left',
        text: 'Depot Notes',
        className: 'icon icon--deponotes',
        to: '/'
      },
      {
        placement: 'left',
        text: 'Advanced Search',
        className: 'icon icon--advanced-search',
        to: '/'
      },
      {
        placement: 'left',
        text: 'Company Contacts',
        className: 'icon icon--company-contacts',
        to: '/'
      },
      {
        placement: 'left',
        text: 'Audit Trial',
        className: 'icon icon--audit-trial',
        to: '/'
      },
      {
        placement: 'left',
        text: 'Comments',
        className: 'icon icon--comments',
        to: '/'
      },
      {
        placement: 'left',
        text: 'Settings',
        className: 'icon icon--setting',
        to: '/'
      },
      {
        placement: 'left',
        text: 'Logistics',
        className: 'icon icon--lugistics',
        to: '/'
      }
    ];

    render() {
      return (
        <aside className={bem.b()} color="gray">
          <Nav>
            {this.tooltips.map((tooltip, index) => {
                        const { text, placement, to, className } = tooltip;
                        const id = `Tooltip-${index}`;
                        return (
                          <NavItem key={keyGen()}>
                            <NavLink to={to} className={`nav-link d-flex justify-content-center ${className}`} activeClassName={`${className}--active`} id={id}>
                              <TooltipItem text={text} placement={placement} id={id} />
                            </NavLink>
                          </NavItem>
                        );
                    })}
          </Nav>
        </aside>
      );
    }
}
