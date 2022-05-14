import s from "./Projects.module.css";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import Links from "./Links";
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
              <span className={s.infoSpan}>Next&#46; js</span>
              <span className={s.infoSpan}>CSS Modules</span>
              <span className={s.infoSpan}>JS</span>
              <span className={s.infoSpan}>Firebase</span>
              <span className={s.infoSpan}>Google Maps API</span>
              <span className={s.infoSpan}>Swiper</span>
              <span className={s.infoSpan}>Material UI</span>
              <span className={s.infoSpan}>React&#45; spring</span>
            </div>
          </div>

          <h3>&#34;Kompromix&#34; &#45; website for a construction company</h3>
          <Links
            pathDemo={"https://kompromix.netlify.app/"}
            pathGitHub={"https://github.com/OlesiaNazarenko/kompromix"}
          />
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
              <span className={s.infoSpan}>Next&#46;js</span>
              <span className={s.infoSpan}>CSS Modules</span>
              <span className={s.infoSpan}>Bootstrap</span>
              <span className={s.infoSpan}>Emailjs</span>
              <span className={s.infoSpan}>notiflix</span>
              <span className={s.infoSpan}>Material&#45;icons</span>
            </div>
          </div>
          <h3>Portfolio</h3>
          <Links
            pathDemo={"https://byshov92.github.io/ice-cream-creativity-proj/"}
            pathGitHub={"https://github.com/Byshov92/ice-cream-creativity-proj"}
          />
        </Col>
      </Row>
    </>
  );
}
