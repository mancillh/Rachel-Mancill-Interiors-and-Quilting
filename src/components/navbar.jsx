import { Container, Nav, Navbar } from 'react-bootstrap';
import '../styles/Navbar.css';

function NavbarSection() {
  return (
    <Navbar collapseOnSelect bg="light" expand="lg" className="personal-navbar-styling" variant="light">
      <Container>
        <Navbar className="MyNameBig">Rachel Mancill Interiors and Quilting</Navbar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse className="ml-auto" id="responsive-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#ContactMe">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSection;
