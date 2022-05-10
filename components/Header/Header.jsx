import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import s from "./Header.module.css";
export default function Header() {
  return (
    <header className={s.header}>
      <Navbar expand="lg">
        <Container>
          <Nav.Link href="#header" className={s.logoLink}>
            Olesia Nazarenko
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#header">Home</Nav.Link>
              <Nav.Link href="#about">About me</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="#personal">Personal</NavDropdown.Item>
                <NavDropdown.Item href="#team">Team projects</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contacts">Contacts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
