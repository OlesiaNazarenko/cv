import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import s from "./SoftSkills.module.css";
export default function SoftSkills() {
  return (
    <section
      className={[s.softSkillsSection, "softSkillsSection"].join(" ")}
      id="softSkills"
    >
      <Container>
        <h2>Why hire me&#63;</h2>
        <Row className="align-items-start">
          <Col>
            <div className={s.image}>
              <Image
                src="/vectorGraphic/blogging-concept-illustration_114360-4481.webp"
                alt=""
                width={2}
                height={1.3}
                objectFit="contain"
                layout="responsive"
              />
            </div>
            <h3>Responsible</h3>
            <p>
              My co&#45;workers often said I&#39;m too serious about my work.
              But I think it&#39;s good&#44; it&#39;s an advantage&#46; Because
              it makes me better as a professional and I always try to do my
              best&#46;
            </p>
          </Col>
          <Col>
            <div className={s.image}>
              <Image
                src="/vectorGraphic/creative-team-concept-illustration_114360-6488.webp"
                alt=""
                width={2}
                height={1.3}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <h3>Team player</h3>
            <p>
              Being part of a team means you can contribute for the benefit of
              all&#44; and at the same time there are members who can support
              you and share new knowledge with you&#46; You can achieve much
              more success together as a team than alone&#46;
            </p>
          </Col>
          <Col>
            <div className={s.image}>
              <Image
                src="/vectorGraphic/loading-concept-illustration_114360-7368.webp"
                alt=""
                width={2}
                height={1.3}
                objectFit="contain"
                layout="responsive"
              />
            </div>
            <h3>Self&#45;management</h3>
            <p>
              {" "}
              I enjoy being a lifetime learner and always seeking to improve
              myself&#46; Curious about new possibilities and taking action to
              explore them&#46;
            </p>
          </Col>
          <Col>
            <div className={s.image}>
              <Image
                src="/vectorGraphic/content-team-concept-illustration_114360-7188(1).webp"
                alt=""
                width={2}
                height={1.3}
                objectFit="contain"
                layout="responsive"
              />
            </div>
            <h3>Open&#45;mind</h3>
            <p>
              It is so important to be able to step out of your comfort zone and
              consider other ideas and perspectives&#44; especially in this day
              and age&#46; I&#39;m willing to listen to other people&#44; their
              suggestions&#44; and opinions&#46;
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
