import s from "./Footer.module.css";
import style from "../Home/Home.module.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
export default function Footer() {
  return (
    <section
      className={[s.footerSection, "footerSection"].join(" ")}
      id="footer"
    >
      <Nav.Link href="#header" className={s.topLink}>
        <ArrowDropDownCircleIcon className={s.topIcon} />
      </Nav.Link>
      <Container>
        <Row className={s.row}>
          <Col className={s.col}>
            {" "}
            <Nav.Link href="#header" className={s.logoLink}>
              Olesia Nazarenko
            </Nav.Link>
          </Col>
          <Col className={s.col}>
            {" "}
            <Nav.Link href="#about">About me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Col>
          <Col className={s.col}>
            <div className={s.linksWrap}>
              <a
                target="_blank"
                rel="noreferrer"
                className={s.link}
                href="https://www.linkedin.com/in/olesia-nazarenko-59691b207/"
              >
                <LinkedInIcon />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                className={s.link}
                href="https://github.com/OlesiaNazarenko"
              >
                <GitHubIcon />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                className={s.link}
                href="https://www.instagram.com/olesia_o.n/"
              >
                <InstagramIcon />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
