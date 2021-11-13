import React from 'react';
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import './mainNav.css';


function MainNav() {
 
  return (
  <Navbar bg ='myPink' variant ='light' expand="lg">
  <Container fluid>
    <Navbar.Brand href="/cart">Cart</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
       
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <NavDropdown title="Menu" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/Signature-Cakes">Signature Cakes</NavDropdown.Item>
          <NavDropdown.Divider />

          <NavDropdown.Item href="/Loaded-Signature-Cakes">"Loaded" Signature Cakes</NavDropdown.Item>
          <NavDropdown.Divider />


          <NavDropdown.Item href="/Gluten-Free">Gluten Free</NavDropdown.Item>
          <NavDropdown.Divider />

          <NavDropdown.Item href="/Vegan-Free">Vegan</NavDropdown.Item>
          <NavDropdown.Divider />

          <NavDropdown.Item href="/Tiered-Cakes">Tiered Cakes</NavDropdown.Item>
          <NavDropdown.Divider />

          <NavDropdown.Item href="/Cupcakes">Cupcakes</NavDropdown.Item>
          <NavDropdown.Divider />

          <NavDropdown.Item href="/Cookies">Cookies</NavDropdown.Item>
          <NavDropdown.Divider />
          
          <NavDropdown.Item href="/Cookie-Cakes">Cookie Cakes</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

);
}

export default MainNav;



