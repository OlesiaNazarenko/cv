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
        <h2>Why hire me?</h2>
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
              My co-workers often said I’m too serious about my work. But I
              think it's good, it's an advantage. Because it makes me better as
              a professional and I always try to do my best.
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
              all, and at the same time there are members who can support you
              and share new knowledge with you. You can achieve much more
              success together as a team than alone.
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
            <h3>Self-management</h3>
            <p>
              {" "}
              I enjoy being a lifetime learner and always seeking to improve
              myself. Curious about new possibilities and taking action to
              explore them.
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
            <h3>Open-mind</h3>
            <p>
              It is so important to be able to step out of your comfort zone and
              consider other ideas and perspectives, especially in this day and
              age. I'm willing to listen to other people, their suggestions, and
              opinions.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
