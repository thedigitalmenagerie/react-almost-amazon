import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/data/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
          <NavItem>
              <Link className="nav-link" to="/add-authors/">Add Authors</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/authors">Authors</Link>
            </NavItem>
    </>
  );

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">React</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            { user && authenticated()}
            {
                user !== null
                && <NavItem>
                  {
                    user
                      ? <Button color="info" onClick={signOutUser}>Sign Out</Button>
                      : <Button color="info" onClick={signInUser}>Sign In</Button>
                  }
                  </NavItem> }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
