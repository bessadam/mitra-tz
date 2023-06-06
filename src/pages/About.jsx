import React from "react";
import "../assets/styles/About.scss";
// bootstrap
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// db
import { links } from "../assets/db/links";
// avatar
import Avatar from "../assets/images/Avatar1.jpg";

const About = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="mt-5">
          <Card style={{ borderRadius: "15px" }}>
            <Card.Body className="p-4">
              <div className="d-flex text-black">
                <div className="flex-shrink-0">
                  <Card.Img
                    style={{ width: "240px", borderRadius: "10px" }}
                    src={Avatar}
                    alt="Generic placeholder image"
                  />
                  <Card.Text>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {links.map((link) => {
                        return (
                          <li key={link.id}>
                            <a
                              href={link.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <b>{link.title}</b>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </Card.Text>
                </div>
                <div className="flex-grow-1 ms-3">
                  <Card.Title>
                    Привет! Меня зовут Тимур, я Front-end разработчик.
                  </Card.Title>
                  <Card.Text>
                    Сейчас в поиске работы на позицию Веб/Frontend-разработчика.
                    Активно изучаю и практикую написание пользовательских
                    интерфейсов на Javascript/React.js.
                  </Card.Text>
                  <Card.Text>
                    <b>В работе использую:</b>
                    <ol>
                      <li>Javascript (ES6+)</li>
                      <li>React (16.8+)</li>
                      <li>Redux (Toolkit, RTK Query и тд)</li>
                      <li>Typescript</li>
                      <li>MaterialUI, SASS, Styled-Components, Figma</li>
                    </ol>
                  </Card.Text>
                  <Card.Text>
                    В свободное время читаю тех. литературу, решаю задачи на
                    Leetcode, играю в шахматы или стратегии, тренируюсь.
                  </Card.Text>
                  <Card.Text>
                    Владею английским языком на уровне B1-B2, немецким B1.
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
