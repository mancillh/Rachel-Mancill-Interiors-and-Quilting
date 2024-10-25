import { Container, Navbar } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import '../styles/Top.css';

function Top() {
  return (
    <Navbar expand="lg" className="nav">
      <Container>
        <Navbar className="company-name">Rachel Mancill Interiors and Quilting</Navbar>
        <Dropdown>
          <Dropdown.Toggle className="justify-content-end dropdownButton" id="dropdown-basic">
            Menu
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#About">About</Dropdown.Item>
            <Dropdown.Item href="#Portfolio">Portfolio</Dropdown.Item>
            <Dropdown.Item href="#ContactMe">Contact Me</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}

export default Top;
