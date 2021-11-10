import React from 'react';
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import './mainNav.css';


function MainNav() {
 
  return (
  <Navbar bg ='myPink' variant ='light' expand="lg">
  <Container fluid>
    <Navbar.Brand></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">About</Nav.Link>
        <NavDropdown title="Menu" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Signature Cakes</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action4">"Loaded" Signature Cakes</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Gluten Free</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action3">Vegan</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action4">Tiered Cakes</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Cupcakes</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Cookies</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Cookie Cakes</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

);
}

export default MainNav;



