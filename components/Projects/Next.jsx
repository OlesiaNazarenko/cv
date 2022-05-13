import s from "./Projects.module.css";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
export default function Next() {
  return (
    <>
      <Row>
        <Col className={s.col}>
          <div className={s.image}>
            <Image
              src="/projects/kompromix.png"
              width={0.7}
              height={0.4}
              layout="responsive"
            />
            <div className={s.info}>
              <span className={s.infoSpan}>Next.js</span>
              <span className={s.infoSpan}>CSS Modules</span>
              <span className={s.infoSpan}>JS</span>
              <span className={s.infoSpan}>Firebase</span>
              <span className={s.infoSpan}>Google Maps API</span>
              <span className={s.infoSpan}>Swiper</span>
              <span className={s.infoSpan}>Material UI</span>
              <span className={s.infoSpan}>React-spring</span>
            </div>
          </div>

          <h3>"Kompromix" - website for a construction company</h3>

          <div className={s.linksWrap}>
            <a
              target="_blank"
              className={["btn", "btn-light", s.link].join(" ")}
              href="https://kompromix.netlify.app/"
            >
              Demo
            </a>
            <a
              target="_blank"
              className={["btn", "btn-light", s.link].join(" ")}
              href="https://github.com/OlesiaNazarenko/kompromix"
            >
              GitHub
            </a>
          </div>
        </Col>
        <Col className={s.col}>
          <div className={s.image}>
            <Image
              src="/projects/portfolio.png"
              width={0.7}
              height={0.4}
              layout="responsive"
            />
            <div className={s.info}>
              <span className={s.infoSpan}>Next.js</span>
              <span className={s.infoSpan}>CSS Modules</span>
              <span className={s.infoSpan}>Bootstrap</span>
              <span className={s.infoSpan}>Emailjs</span>
              <span className={s.infoSpan}>notiflix</span>
              <span className={s.infoSpan}>Material-icons</span>
            </div>
          </div>
          <h3>Portfolio</h3>
          <div className={s.linksWrap}>
            <a
              target="_blank"
              className={["btn", "btn-light", s.link].join(" ")}
              href="https://byshov92.github.io/ice-cream-creativity-proj/"
            >
              Demo
            </a>
            <a
              target="_blank"
              className={["btn", "btn-light", s.link].join(" ")}
              href="https://github.com/Byshov92/ice-cream-creativity-proj"
            >
              GitHub
            </a>
          </div>
        </Col>
      </Row>
    </>
  );
}
