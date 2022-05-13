import s from "./About.module.css";
import { Container, Tabs, Tab } from "react-bootstrap";
import { useState } from "react";
import SimCardDownloadRoundedIcon from "@mui/icons-material/SimCardDownloadRounded";

export default function About() {
  const [key, setKey] = useState("My story");

  return (
    <>
      <div className={[s.sectionWrap, "aboutSection"].join(" ")} id="about">
        <Container className={s.aboutWrap}>
          <h2>About me</h2>
          <div className={s.wrap}>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className={[s.tabs, "aboutTabs", "mb-3"].join(" ")}
            >
              <Tab eventKey="My story" title="My story">
                <div className={s.tabWrap}>
                  <h3 className={s.tabTitle}>My story</h3>
                  <div className={s.contentWrap}>
                    <img
                      className={s.img}
                      src="vectorGraphic/mind-map-concept-illustration_114360-3933(1).webp"
                      alt=""
                    />
                    <div className={s.contentText}>
                      <p>
                        I started my path in frontend development when I was 17,
                        in college. But then I had a long break and last year I
                        made a decision to come back.{" "}
                      </p>
                      <p>
                        I'm interested in creating user friendly and nice
                        interfaces of web apps. Resolving different tasks makes
                        me satisfied with my work and motivates me to move on
                        and impove my skills.{" "}
                      </p>
                      <p>
                        I'd like be a part of the team and apply my knowledge
                        and skills, experience to archieve team goals.{" "}
                      </p>
                      <a
                        href="cv.pdf"
                        className={["btn", s.downloadCvBtn].join(" ")}
                        download
                      >
                        Download CV <SimCardDownloadRoundedIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="Education" title="Education">
                <div className={s.tabWrap}>
                  <h3 className={s.tabTitle}>Education</h3>
                  <div className={s.contentWrap}>
                    <img
                      className={s.img2}
                      src="vectorGraphic/designer-girl-concept-illustration_114360-4455.webp"
                      alt=""
                    />
                    <div className={s.contentText}>
                      <h4 className={s.subTitle}>
                        Full Stack developer | 2022
                      </h4>
                      <p className={s.schoolName}>IT School "GoIT"</p>
                      <h4 className={s.subTitle}>Web-design | 2014</h4>
                      <p className={s.schoolName}>
                        Training Center "Ukrainian Labor Exchange"
                      </p>
                      <h4 className={s.subTitle}>
                        Software development | 2014
                      </h4>
                      <p className={s.schoolName}>
                        College of Economics and Law of Zaporozhye National
                        University
                      </p>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="Experience" title="Experience">
                <div className={[s.tabWrap, s.tabWrap3].join(" ")}>
                  <h3 className={s.tabTitle}>Work experience</h3>
                  <div className={[s.contentWrap, s.contentWrap3].join(" ")}>
                    <h4 className={s.subTitle}>Lash Extension Specialist</h4>
                    <p className={s.schoolName}>
                      2021 / 2022 - Beauty salon"Nude", Estonia
                    </p>
                    <ul>
                      <li>
                        {" "}
                        developed strong and lasting relationships with clients
                        through consistent delivery of requested services and
                        exceptional results;
                      </li>
                      <li> created content for the salon's social networks.</li>
                    </ul>
                    <img
                      className={s.img3}
                      src="vectorGraphic/email-campaign-concept-illustration_114360-3937(1).webp"
                      alt=""
                    />
                    <h4 className={s.subTitle}>Entrepreneurship</h4>
                    <p className={s.schoolName}>
                      2017 / 2021 - Beauty salon "Flox" co-founder, Ukraine
                    </p>
                    <ul>
                      <li> organization of workplaces;</li>
                      <li> election and internship training of employees;</li>
                      <li> communication with clients;</li>
                      <li> attraction of new clients;</li>
                      <li>
                        {" "}
                        maintaining and creating content for social networks and
                        advertising.
                      </li>
                    </ul>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Container>
      </div>
    </>
  );
}
