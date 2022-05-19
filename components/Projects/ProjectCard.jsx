import s from "./Projects.module.css";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import Links from "./Links";
export default function ProjectCard({ data }) {
  return (
    data &&
    data.map((item, index) => {
      return (
        <Row key={index} xs={1} sm={2}>
          {item.map((project, index) => {
            return (
              <Col className={s.col} key={index}>
                <h3>{project.title}</h3>
                <div className={s.image}>
                  <Image
                    src={project.image}
                    width={0.7}
                    height={0.4}
                    layout="responsive"
                  />
                  <div className={s.info}>
                    {project.descTitle && project.descTitle ? (
                      <p>
                        {project.descTitle} <br /> {project.descTasks} <br />
                        {project.descStack}
                      </p>
                    ) : (
                      <p>{project.descTitle}</p>
                    )}
                    {project.techList && (
                      <div className={s.technologies}>
                        {project.techList.map((item, index) => {
                          return (
                            <span className={s.infoSpan} key={index}>
                              {item}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
                <Links
                  pathDemo={project.linkDemo}
                  pathGitHub={project.linkGitHub}
                />
              </Col>
            );
          })}
        </Row>
      );
    })
  );
}
