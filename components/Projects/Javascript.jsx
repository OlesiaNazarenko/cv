import s from "./Projects.module.css";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
export default function JavaScript() {
  return (
    <>
      <Row>
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
              <span className={s.infoSpan}>tui-pagination</span>
            </div>
          </div>
          <h3>"Movie libriary" team project</h3>
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
        <Col className={s.col}>
          <div className={s.image}>
            <Image
              src="/projects/stopwatch.png"
              width={0.7}
              height={0.4}
              layout="responsive"
            />
            <div className={s.info}>
              <span className={s.infoSpan}>HTML</span>
              <span className={s.infoSpan}>CSS</span>
              <span className={s.infoSpan}>JS</span>
            </div>
          </div>
          <h3>2 apps: Countdown and Stopwatch based on Date.object</h3>
          <div className={s.linksWrap}>
            <a
              target="_blank"
              className={["btn", "btn-light", s.link].join(" ")}
              href="https://olesianazarenko.github.io/goit-js-hw-11-timer/"
            >
              Demo
            </a>
            <a
              target="_blank"
              className={["btn", "btn-light", s.link].join(" ")}
              href="https://github.com/OlesiaNazarenko/goit-js-hw-11-timer"
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
              src="/projects/themeSwitcher.png"
              width={0.7}
              height={0.4}
              layout="responsive"
            />
            <div className={s.info}>
              <span className={s.infoSpan}>HTML</span>
              <span className={s.infoSpan}>SASS</span>
              <span className={s.infoSpan}>JS</span>
              <span className={s.infoSpan}>Parcel</span>
              <span className={s.infoSpan}>Handlebars</span>
            </div>
          </div>

          <h3>Theme switcher using LocalStorage</h3>

          <div className={s.linksWrap}>
            <a
              target="_blank"
              className={["btn", "btn-light", s.link].join(" ")}
              href="https://olesianazarenko.github.io/goit-js-hw-10-food-service/"
            >
              Demo
            </a>
            <a
              target="_blank"
              className={["btn", "btn-light", s.link].join(" ")}
              href="https://github.com/OlesiaNazarenko/goit-js-hw-10-food-service"
            >
              GitHub
            </a>
          </div>
        </Col>
        <Col className={s.col}>
          <div className={s.image}>
            <Image
              src="/projects/countries.png"
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
              <span className={s.infoSpan}>Handlebars</span>
            </div>
          </div>
          <h3>Search by country app based on restcountries.com</h3>
          <div className={s.linksWrap}>
            <a
              target="_blank"
              className={["btn", "btn-light", s.link].join(" ")}
              href="https://olesianazarenko.github.io/goit-js-hw-12-countries/"
            >
              Demo
            </a>
            <a
              target="_blank"
              className={["btn", "btn-light", s.link].join(" ")}
              href="https://github.com/OlesiaNazarenko/goit-js-hw-12-countries"
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
              src="/projects/imageFinder.png"
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
              <span className={s.infoSpan}>Handlebars</span>
              <span className={s.infoSpan}>pnotify</span>
              <span className={s.infoSpan}>basiclightbox</span>
            </div>
          </div>

          <h3>Image search basic version</h3>

          <div className={s.linksWrap}>
            <a
              target="_blank"
              className={["btn", "btn-light", s.link].join(" ")}
              href="https://olesianazarenko.github.io/goit-js-hw-13-image-finder/"
            >
              Demo
            </a>
            <a
              target="_blank"
              className={["btn", "btn-light", s.link].join(" ")}
              href="https://github.com/OlesiaNazarenko/goit-js-hw-13-image-finder"
            >
              GitHub
            </a>
          </div>
        </Col>
        <Col className={s.col}>
          <div className={s.image}>
            <Image
              src="/projects/imageFinderIO.png"
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
              <span className={s.infoSpan}>Handlebars</span>
              <span className={s.infoSpan}>pnotify</span>
              <span className={s.infoSpan}>basiclightbox</span>
            </div>
          </div>
          <h3>Image search IntersectionObserver version</h3>
          <div className={s.linksWrap}>
            <a
              target="_blank"
              className={["btn", "btn-light", s.link].join(" ")}
              href="https://olesianazarenko.github.io/goit-js-hw-13-image-finderIO/"
            >
              Demo
            </a>
            <a
              target="_blank"
              className={["btn", "btn-light", s.link].join(" ")}
              href="https://github.com/OlesiaNazarenko/goit-js-hw-13-image-finderIO"
            >
              GitHub
            </a>
          </div>
        </Col>
      </Row>
    </>
  );
}
