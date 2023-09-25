import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import nh from '../assets/img/nh.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          <Col size={12} sm={4}>
            <img src={nh} alt="Logo" />
          </Col>
          <Col size={12} sm={4}>
            <p>Address:</p>
            <p>Bashundhara R/A, Dhaka</p>
            <p>Mobile No:</p>
            <p>+8801738479247</p>
          </Col>
          <Col size={12} sm={4} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/md-nazmul-hadi/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/mdnazmul.hadi.1"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/nhnirzhar"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
