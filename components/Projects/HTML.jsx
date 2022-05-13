import s from "./Projects.module.css";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
export default function HTML() {
  return (
    <Row>
      <Col className={s.col}>
        <div className={s.image}>
          <Image
            src="/projects/webstudio.png"
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

        <h3>Landing page "WebStudio"</h3>

        <div className={s.linksWrap}>
          <a
            target="_blank"
            className={["btn", "btn-light", s.link].join(" ")}
            href="https://olesianazarenko.github.io/goit-markup-hw-08/"
          >
            Demo
          </a>
          <a
            target="_blank"
            className={["btn", "btn-light", s.link].join(" ")}
            href="https://github.com/OlesiaNazarenko/goit-markup-hw-08"
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
            <span className={s.infoSpan}>HTML</span>
            <span className={s.infoSpan}>SASS</span>
            <span className={s.infoSpan}>Figma</span>
            <span className={s.infoSpan}>Parcel</span>
          </div>
        </div>
        <h3>Landing page "Ice cream"</h3>
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
  );
}
