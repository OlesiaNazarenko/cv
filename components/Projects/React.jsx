import s from "./Projects.module.css";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
export default function ReactJS() {
  return (
    <>
      <Row>
        <Col className={s.col}>
          <div className={s.image}>
            <Image
              src="/projects/imageGallery.png"
              width={0.7}
              height={0.4}
              layout="responsive"
            />
            <div className={s.info}>
              <span className={s.infoSpan}>React JS</span>
              <span className={s.infoSpan}>CSS Modules</span>
              <span className={s.infoSpan}>REST API</span>
              <span className={s.infoSpan}>axios</span>
              <span className={s.infoSpan}>React-Toastify</span>
            </div>
          </div>
          <h3>Image gallery</h3>
          <div className={s.linksWrap}>
            <a
              target="_blank"
              className={["btn", "btn-light", s.link].join(" ")}
              href="https://olesianazarenko.github.io/goit-react-hw-04-hooks-images/"
            >
              Demo
            </a>
            <a
              target="_blank"
              className={["btn", "btn-light", s.link].join(" ")}
              href="https://github.com/OlesiaNazarenko/goit-react-hw-04-hooks-images"
            >
              GitHub
            </a>
          </div>
        </Col>
        <Col className={s.col}>
          <div className={s.image}>
            <Image
              src="/projects/movies.png"
              width={0.7}
              height={0.4}
              layout="responsive"
            />
            <div className={s.info}>
              <span className={s.infoSpan}>React JS</span>
              <span className={s.infoSpan}>CSS Modules</span>
              <span className={s.infoSpan}>REST API</span>
              <span className={s.infoSpan}>axios</span>
              <span className={s.infoSpan}>React Router v6</span>
              <span className={s.infoSpan}>React-Toastify</span>
              <span className={s.infoSpan}>Netlify</span>
            </div>
          </div>

          <h3>Movie search app using REST API and React Router v6</h3>
          <div className={s.linksWrap}>
            <a
              target="_blank"
              className={["btn", "btn-light", s.link].join(" ")}
              href="https://on-movies.netlify.app/"
            >
              Demo
            </a>
            <a
              target="_blank"
              className={["btn", "btn-light", s.link].join(" ")}
              href="https://github.com/OlesiaNazarenko/goit-react-hw-05-movies"
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
              src="/projects/phonebook.png"
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
              <span className={s.infoSpan}>React-Toastify</span>
              <span className={s.infoSpan}>Netlify</span>
              <span className={s.infoSpan}>Framer Motion</span>
            </div>
          </div>

          <h3>"Phonebook" app</h3>

          <div className={s.linksWrap}>
            <a
              target="_blank"
              className={["btn", "btn-light", s.link].join(" ")}
              href="https://phonebook-on.netlify.app/"
            >
              Demo
            </a>
            <a
              target="_blank"
              className={["btn", "btn-light", s.link].join(" ")}
              href="https://github.com/OlesiaNazarenko/goit-react-hw-08-phonebook"
            >
              GitHub
            </a>
          </div>
        </Col>
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
              <span className={s.infoSpan}>React-Toastify</span>
              <span className={s.infoSpan}>Netlify</span>
              <span className={s.infoSpan}>Formik</span>
              <span className={s.infoSpan}>i18next</span>
              <span className={s.infoSpan}>React-media</span>
              <span className={s.infoSpan}>React-transition-group</span>
              <span className={s.infoSpan}>Node.js</span>
              <span className={s.infoSpan}>MongoDB</span>
              <span className={s.infoSpan}>Postman</span>
            </div>
          </div>
          <h3>"Wallet" app, fullstack team project</h3>
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
      </Row>
    </>
  );
}
