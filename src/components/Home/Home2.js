import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  // AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
  AiFillSkype,
} from "react-icons/ai";
import { FaDiscord, FaTelegram, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript, Java, C#, Python, Solidity, Rust and Go. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js, Vue.js, Angular and Next.js</b>
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:harryjohn5093421@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  title="harryjohn5093421@gmail.com"
                >
                  <FaEnvelope />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/devgenius1989"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  title="devgenius1989"
                >
                  <FaTelegram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={`skype:${`live:.cid.ac4f5f3a2fa956e5`}?chat`}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="live:.cid.ac4f5f3a2fa956e5"
                >
                  <AiFillSkype />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://discord.com/users/harryjohn5093421"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="harryjohn5093421"
                >
                  <FaDiscord />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
