import React from 'react';
import { Nav } from 'react-bootstrap';
import { BsFillBookFill } from 'react-icons/bs';

const NavbarLink = ({ href, text }) => {
  return (
    <Nav.Link className="navbar-link" href={href}>
      {/* add custom icon */}
      <BsFillBookFill className="navbar-icon" fontSize={30} />
      {text}
    </Nav.Link>
  );
};

export default NavbarLink;
