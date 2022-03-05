import React from "react";
import {Link} from 'react-router-dom';
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar expand='lg' bg="dark" variant='dark' sticky="top" collapseOnSelect>
        <Container>
            <Link to='/' className="nav-link p-0"><Navbar.Brand>Blogger Website</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='ms-auto'>
                    <Nav.Link><Link to='/' className="nav-link p-0">Home</Link></Nav.Link>
                    <Nav.Link>About</Nav.Link>
                    <Nav.Link>Contact</Nav.Link>
                    <Nav.Link>Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
