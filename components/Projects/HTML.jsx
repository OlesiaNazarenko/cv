import s from "./Projects.module.css";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import Links from "./Links";
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
        <h3>Landing page &#34;WebStudio&#34;</h3>
        <Links
          pathDemo={"https://olesianazarenko.github.io/goit-markup-hw-08/"}
          pathGitHub={"https://github.com/OlesiaNazarenko/goit-markup-hw-08"}
        />
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
        <h3>Landing page &#34;Ice cream&#34;</h3>
        <Links
          pathDemo={"https://byshov92.github.io/ice-cream-creativity-proj/"}
          pathGitHub={"https://github.com/Byshov92/ice-cream-creativity-proj"}
        />
      </Col>
    </Row>
  );
}
