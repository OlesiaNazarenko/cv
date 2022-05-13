import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import s from "./Header.module.css";
export default function Header() {
  return (
    <div className={s.header} id="header">
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
              <Nav.Link href="#softSkills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contactForm">Contacts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
