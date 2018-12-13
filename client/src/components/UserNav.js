import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class UserNav extends React.Component {
  render() {
    return (
      <div>
        <p>List Based</p>
        <Nav vertical>
        <h1> MY ACCOUNT</h1>
          <NavItem>
            <NavLink href="#">My Jobs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Inbox</NavLink>
            {/* Inbox/PaymentMethods/Preferred Providers will not be functional links */}
          </NavItem>
          <NavItem>
            <NavLink href="#">Invoice History</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Preferred Providers</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Manage Properties</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Account Details</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Payment Methods</NavLink>
    
          </NavItem>
        </Nav>
        <hr />
        <p>Link based</p>
        <Nav vertical>
          <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
        </Nav>
      </div>
    );
  }
}