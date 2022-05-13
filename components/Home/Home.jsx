import s from "./Home.module.css";
import Image from "next/image";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import MarkEmailReadRoundedIcon from "@mui/icons-material/MarkEmailReadRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import SimCardDownloadRoundedIcon from "@mui/icons-material/SimCardDownloadRounded";
import EmailModal from "../EmailModal/EmailModal";
export default function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section className={s.aboutWrap} id="home">
        <Container>
          <Row>
            <Col>
              <div className={s.leftBox}>
                <div className={s.imageWrap}>
                  <Image
                    src="/myPortrait.jpg"
                    alt="Olesia Nazarenko"
                    width={1}
                    height={1}
                    layout="responsive"
                  />
                </div>
                <h2 className={s.title}>Olesia Nazarenko</h2>
                <h3 className={s.h2}>Frontend developer</h3>
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
              </div>
            </Col>
            <Col>
              {" "}
              <div className={s.rightBox}>
                <h1>Hello!</h1>
                <p>
                  I'm passionate about bringing mock-ups to life using HTML,
                  CSS, JavaScript, React JS, Next.js.
                </p>
                <p>Let's make something special.</p>
                <div className={s.btnWrap}>
                  <Button
                    variant="light"
                    className={s.downloadCvBtn}
                    onClick={handleShow}
                  >
                    Mail me{" "}
                    <MarkEmailReadRoundedIcon className={s.downloadIcon} />
                  </Button>
                  <a
                    href="cv.pdf"
                    className={["btn", s.downloadCvBtn].join(" ")}
                    download
                  >
                    Download CV <SimCardDownloadRoundedIcon />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <EmailModal onHide={handleClose} show={show} />
    </>
  );
}
