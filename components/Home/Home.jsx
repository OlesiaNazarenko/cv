import s from "./Home.module.css";
import Image from "next/image";
import { useState, useRef } from "react";
import { useSpring, animated } from "react-spring";
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
  const ref = useRef();
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    duration: 700,
  });
  return (
    <>
      <section className={s.aboutWrap}>
        <Container>
          <Row>
            <Col>
              <div className={s.leftBox}>
                <animated.div style={props} className={s.imageWrap}>
                  <Image
                    src="/myPortrait.jpg"
                    alt="Olesia Nazarenko"
                    width={1}
                    height={1}
                    layout="responsive"
                  />
                </animated.div>
                <animated.div style={props}>
                  <h2 className={s.title}>Olesia Nazarenko</h2>
                  <h3 className={s.h2}>Frontend developer</h3>
                </animated.div>
                <div className={s.linksWrap}>
                  <animated.div style={props}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className={s.link}
                      href="https://www.linkedin.com/in/olesia-nazarenko-59691b207/"
                    >
                      <LinkedInIcon />
                    </a>
                  </animated.div>
                  <animated.div style={props}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className={s.link}
                      href="https://github.com/OlesiaNazarenko"
                    >
                      <GitHubIcon />
                    </a>
                  </animated.div>
                  <animated.div style={props}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className={s.link}
                      href="https://www.instagram.com/olesia_o.n/"
                    >
                      <InstagramIcon />
                    </a>
                  </animated.div>
                </div>
              </div>
            </Col>
            <Col>
              {" "}
              <animated.div style={props} className={s.rightBox}>
                {" "}
                <h1>Hello&#33; I&#39;m Olesia Nazarenko&#46;</h1>
                <p>
                  I started learning frontend development due to my passion to
                  make things beautiful and customers happy&#46; I've done a
                  deep dive into web-development using HTML&#44; CSS&#44;
                  JavaScript&#44; React JS&#44; Next&#46;js&#44; and ready for
                  the next adventure&#46;
                </p>
                <p>Let&#39;s make something special&#46;</p>
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
              </animated.div>
            </Col>
          </Row>
        </Container>
      </section>
      <EmailModal onHide={handleClose} show={show} />
    </>
  );
}
