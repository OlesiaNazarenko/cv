import s from "./Home.module.css";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import MarkEmailReadRoundedIcon from "@mui/icons-material/MarkEmailReadRounded";
import EmailModal from "../EmailModal/EmailModal";
export default function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section className={s.aboutWrap}>
        <Container>
          <Row>
            <Col className={s.leftWrap}>
              <p>Hello!</p>
              <h1 className={s.title}>I'm Olesia Nazarenko</h1>
              <Button
                variant="light"
                className={s.downloadCvBtn}
                onClick={handleShow}
              >
                Mail me <MarkEmailReadRoundedIcon className={s.downloadIcon} />
              </Button>{" "}
            </Col>
            <Col>
              <div className={s.imageWrap}>
                <img
                  className="img-fluid"
                  src="myPortrait.jpg"
                  alt="Olesia Nazarenko"
                />
              </div>
            </Col>
            <Col>
              {" "}
              <div>
                <h2 className={s.h2}>Frontend developer</h2>
                <p>
                  Passionate about bringing mock-ups to life using HTML, CSS,
                  JavaScript, ReactJS, Next.js
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <EmailModal onHide={handleClose} show={show} />
    </>
  );
}
