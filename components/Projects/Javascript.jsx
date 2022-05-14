import s from "./Projects.module.css";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import Links from "./Links";
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
              <span className={s.infoSpan}>tui&#45;pagination</span>
            </div>
          </div>
          <h3>&#34;Movie libriary&#34; team project</h3>
          <Links
            pathDemo={"https://hrendzha.github.io/filmoteka/"}
            pathGitHub={"https://github.com/hrendzha/filmoteka"}
          />
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
          <h3>2 apps&#58; Countdown and Stopwatch based on Date Object</h3>
          <Links
            pathDemo={"https://olesianazarenko.github.io/goit-js-hw-11-timer/"}
            pathGitHub={
              "https://github.com/OlesiaNazarenko/goit-js-hw-11-timer"
            }
          />
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
          <Links
            pathDemo={
              "https://olesianazarenko.github.io/goit-js-hw-10-food-service/"
            }
            pathGitHub={
              "https://github.com/OlesiaNazarenko/goit-js-hw-10-food-service"
            }
          />
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
          <h3>Search by country app based on restcountries&#46;com</h3>
          <Links
            pathDemo={
              "https://olesianazarenko.github.io/goit-js-hw-12-countries/"
            }
            pathGitHub={
              "https://github.com/OlesiaNazarenko/goit-js-hw-12-countries"
            }
          />
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
          <Links
            pathDemo={
              "https://olesianazarenko.github.io/goit-js-hw-13-image-finder/"
            }
            pathGitHub={
              "https://github.com/OlesiaNazarenko/goit-js-hw-13-image-finder"
            }
          />
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
          <Links
            pathDemo={
              "https://olesianazarenko.github.io/goit-js-hw-13-image-finderIO/"
            }
            pathGitHub={
              "https://github.com/OlesiaNazarenko/goit-js-hw-13-image-finderIO"
            }
          />
        </Col>
      </Row>
    </>
  );
}
