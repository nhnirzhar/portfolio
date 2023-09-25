import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Student Performance Monitoring System 2.0",
      description: "This is a group project. We analyze the Business Requirement Document(BRD), System Requirement Specification (SRS) and Software Design Documents (SDD) and finally we created a demo project with Html, CSS and JAVASCRIPT",
      imgUrl: projImg1,
    },
    {
      title: "E-Medicine Sheba",
      description: "Developed by ReactJs, Javascript, ASP.Net, REST API, Microsoft SQL Server",
      imgUrl: projImg2,
    },
  ];
  const projects1 = [

    {
      title: "Hospital Management System",
      description: "With ReactJS, WEB API, C#, SQL SERVER 2018 technologies. There are some special features so that pateint and doctor can easily track their appointments, medicines etc. and be updated with regular treatment",
      imgUrl: projImg5,
    },
    {
      title: "Student Management System",
      description: "This project develops with ReactJS, C#, SQL SERVER 2018 and I did Design, Features development, Testing & Bug fixing",
      imgUrl: projImg3,
    },
  ];
  const projects2 = [
    {
      title: "Gesture Controlled Robotic Arm",
      description: "This is a robot which can be controlled by hand gestures, and it was a group project. We created this project with Arduino Uno, Flex sensor, Servo motor, Adapter ",
      imgUrl: projImg4,
    },
    {
      title: "Text Manipulating Application",
      description: "Developed with React hooks. Here you can manipulate your text. Such as, capital to small, small to capital, word count, time count etc.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>This is my personal project for simply showcase</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projects1.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            projects2.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
