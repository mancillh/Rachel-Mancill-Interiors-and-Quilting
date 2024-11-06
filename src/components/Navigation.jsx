import { Container, Navbar } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import '../styles/Navigation.css';

export default function Navigation() {
  return (
    <Navbar expand="lg" className="nav">
      <Container>
        <Navbar className="company-name">Rachel Mancill Interiors and Quilting</Navbar>
        <Dropdown>
          <Dropdown.Toggle className="justify-content-end dropdownButton" id="dropdown-basic">
            Menu
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="./about">About</Dropdown.Item>
            <Dropdown.Item href="./portfolio">Portfolio</Dropdown.Item>
            <Dropdown.Item href="./contact">Contact Me</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}

