import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useRef, useEffect } from "react";
import Link from "next/link";
import s from "./Header.module.css";

export default function Header() {
  let sections = [];
  let windowObj;
  useEffect(() => {
    windowObj = window;
    sections.push(
      document.getElementById("home"),
      document.getElementById("about"),
      document.getElementById("softSkills"),
      document.getElementById("projects"),
      document.getElementById("contactForm")
    );
  });
  const scrollToSection = (e) => {
    const ref = e.target.innerHTML.toLowerCase();
    return sections.forEach((item) => {
      return (
        item == ref &&
        ref.scrollIntoView({ block: "center", behavior: "smooth" })
      );
    });
  };
  return (
    <div className={s.header}>
      <Navbar expand="lg" onClick={(e) => scrollToSection(e)}>
        <Container>
          <Nav.Link href="#home" className={s.logoLink}>
            Olesia Nazarenko
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
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
