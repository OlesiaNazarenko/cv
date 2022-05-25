import s from "./About.module.css";
import Image from "next/image";
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
                  {/* <h3 className={s.tabTitle}>My story</h3> */}
                  <div className={s.contentWrap}>
                    <div className={s.img}>
                      <Image
                        src="/vectorGraphic/mind-map-concept-illustration_114360-3933(1).webp"
                        alt=""
                        width={1}
                        height={1}
                        layout="responsive"
                      />
                    </div>
                    <div className={s.contentText}>
                      <p>
                        I started my path in front end development when I was
                        17&#44; in college. But then I had a long break and last
                        year I made a decision to come back.{" "}
                      </p>
                      <p>
                        I&#39;m interested in creating user friendly and nice
                        interfaces of web apps. Resolving different tasks makes
                        me satisfied with my work and motivates me to move on
                        and impove my skills.{" "}
                      </p>
                      <p>
                        I&#39;d like be a part of the team and apply my
                        knowledge and skills&#44; experience to archieve team
                        goals.{" "}
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
                  {/* <h3 className={s.tabTitle}>Education</h3> */}
                  <div className={s.contentWrap}>
                    <div className={s.img2}>
                      <Image
                        src="/vectorGraphic/designer-girl-concept-illustration_114360-4455.webp"
                        alt=""
                        width={1}
                        height={1}
                        layout="responsive"
                      />
                    </div>
                    <div className={s.contentText}>
                      <h4 className={s.subTitle}>
                        Full Stack developer &#124; 2022
                      </h4>
                      <p className={s.schoolName}>IT School &#34;GoIT&#34;</p>
                      <h4 className={s.subTitle}>Web-design &#124; 2014</h4>
                      <p className={s.schoolName}>
                        Training Center &#34;Ukrainian Labor Exchange&#34;
                      </p>
                      <h4 className={s.subTitle}>
                        Software development &#124; 2014
                      </h4>
                      <p className={s.schoolName}>
                        College of Economics and Law of Zaporozhye National
                        University
                      </p>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="Experience" title="Work experience">
                <div className={[s.tabWrap, s.tabWrap3].join(" ")}>
                  {/* <h3 className={s.tabTitle}>Work experience</h3> */}
                  <div className={s.contentWrap}>
                    <div className={s.img3}>
                      <Image
                        src="/vectorGraphic/email-campaign-concept-illustration_114360-3937(1).webp"
                        alt=""
                        width={1}
                        height={1}
                        layout="responsive"
                      />
                    </div>
                    <div className={s.contentText}>
                      <h4 className={s.subTitle}>Lash Extension Specialist</h4>
                      <p className={s.schoolName}>
                        2021 &#47; 2022 &#45; Beauty salon &#34;Nude&#34;,
                        Estonia
                      </p>
                      <ul>
                        <li>
                          {" "}
                          developed strong and lasting relationships with
                          clients through consistent delivery of requested
                          services and exceptional results&#59;
                        </li>
                        <li>
                          {" "}
                          created content for the salon&#39;s social networks.
                        </li>
                      </ul>

                      <h4 className={s.subTitle}>Entrepreneurship</h4>
                      <p className={s.schoolName}>
                        2017 &#47; 2021 &#45; Beauty salon &#34;Flox&#34;
                        co&#45;founder&#44; Ukraine
                      </p>
                      <ul>
                        <li> organization of workplaces&#59;</li>
                        <li>
                          {" "}
                          election and internship training of employees&#58;
                        </li>
                        <li> communication with clients&#59;</li>
                        <li> attraction of new clients&#59;</li>
                        <li>
                          {" "}
                          maintaining and creating content for social networks
                          and advertising.
                        </li>
                      </ul>
                    </div>
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
