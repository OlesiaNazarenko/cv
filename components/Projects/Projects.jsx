import { useState } from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import HTML from "./HTML";
import JavaScript from "./Javascript";
import ReactJS from "./React";
import Next from "./Next";
import Team from "./Team";
import s from "./Projects.module.css";

export default function Projects() {
  const [key, setKey] = useState("HTML/CSS");

  return (
    <section
      className={[s.projectsSection, "projectSection"].join(" ")}
      id="projects"
    >
      <h2>Projects</h2>
      <Container>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className={[s.tabs, "aboutTabs", "mb-3"].join(" ")}
        >
          <Tab eventKey="HTML/CSS" title="HTML/CSS">
            <div className={s.tabWrap}>
              <HTML />
            </div>
          </Tab>
          <Tab eventKey="JavaScript" title="JavaScript">
            <div className={s.tabWrap}>
              <JavaScript />{" "}
            </div>
          </Tab>
          <Tab eventKey="React JS" title="React JS">
            <div className={s.tabWrap}>
              <ReactJS />
            </div>
          </Tab>
          <Tab eventKey="Next.js" title="Next.js">
            <div className={s.tabWrap}>
              <Next />
            </div>
          </Tab>
          <Tab eventKey="Team" title="Team projects">
            <div className={s.tabWrap}>
              <Team />
            </div>
          </Tab>
        </Tabs>
      </Container>
    </section>
  );
}
