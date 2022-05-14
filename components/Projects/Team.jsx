import s from "./Projects.module.css";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
export default function Team() {
  return (
    <>
      <Row>
        <Col className={s.col}>
          <div className={s.image}>
            <Image
              src="/projects/icecream.png"
              width={0.7}
              height={0.4}
              layout="responsive"
            />
            <div className={s.info}>
              <span className={s.infoSpan}>HTML</span>
              <span className={s.infoSpan}>SASS</span>
              <span className={s.infoSpan}>Figma</span>
              <span className={s.infoSpan}>Parcel</span>
            </div>
          </div>
          <h3>Landing page &#34;Ice cream&#34;</h3>
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
        <Col className={s.col}>
          <div className={s.image}>
            <Image
              src="/projects/filmoteka.png"
              width={0.7}
              height={0.4}
              layout="responsive"
            />
            <div className={s.info}>
              <span className={s.infoSpan}>HTML</span>
              <span className={s.infoSpan}>SASS</span>
              <span className={s.infoSpan}>JS</span>
              <span className={s.infoSpan}>Parcel</span>
              <span className={s.infoSpan}>REST API</span>
              <span className={s.infoSpan}>axios</span>
              <span className={s.infoSpan}>Handlebars</span>
              <span className={s.infoSpan}>basiclightbox</span>
              <span className={s.infoSpan}>notiflix</span>
              <span className={s.infoSpan}>tui&#45;pagination</span>
            </div>
          </div>
          <h3>&#34;Movie libriary&#34; team project</h3>
          <div className={s.linksWrap}>
            <a
              target="_blank"
              className={["btn", "btn-light", s.link].join(" ")}
              href="https://hrendzha.github.io/filmoteka/"
            >
              Demo
            </a>
            <a
              target="_blank"
              className={["btn", "btn-light", s.link].join(" ")}
              href="https://github.com/hrendzha/filmoteka"
            >
              GitHub
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className={s.col}>
          <div className={s.image}>
            <Image
              src="/projects/icecream.png"
              width={0.7}
              height={0.4}
              layout="responsive"
            />
            <div className={s.info}>
              <span className={s.infoSpan}>React JS</span>
              <span className={s.infoSpan}>CSS Modules</span>
              <span className={s.infoSpan}>REST API</span>
              <span className={s.infoSpan}>axios</span>
              <span className={s.infoSpan}>Redux</span>
              <span className={s.infoSpan}>React Router v6</span>
              <span className={s.infoSpan}>React&#45;Toastify</span>
              <span className={s.infoSpan}>Netlify</span>
              <span className={s.infoSpan}>Formik</span>
              <span className={s.infoSpan}>i18next</span>
              <span className={s.infoSpan}>React&#45;media</span>
              <span className={s.infoSpan}>React&#45;transition&#45;group</span>
              <span className={s.infoSpan}>Node&#46;js</span>
              <span className={s.infoSpan}>MongoDB</span>
              <span className={s.infoSpan}>Postman</span>
            </div>
          </div>
          <h3>&#34;Wallet&#34; app&#44; fullstack team project</h3>
          <div className={s.linksWrap}>
            <a
              target="_blank"
              className={["btn", "btn-light", s.link].join(" ")}
              href="https://kdv-wallet-project.netlify.app/"
            >
              Demo
            </a>
            <a
              target="_blank"
              className={["btn", "btn-light", s.link].join(" ")}
              href="https://github.com/DenisK0s/dementors-wallet-project"
            >
              GitHub
            </a>
          </div>
        </Col>
        <Col className={s.col}></Col>
      </Row>
    </>
  );
}
