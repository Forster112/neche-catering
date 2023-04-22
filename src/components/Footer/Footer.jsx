import React from "react";
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/footer.css";
import logo from "../../assets/images/logo.png";
import { IconWrap } from "../StyledComponents/StyledComponents";

const Footer = () => {
  return (
    <footer className="footer">
      <Row>
        <Col lg="3" md="4" sm="6">
          <div className="footer_info text-start">
            <img src={logo} alt="logo" />
            <h5>neche catering</h5>

            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
              Corrupti, dolor ipsum.
            </p>
          </div>
        </Col>
        <Col lg="3" md="4" sm="6">
          <div className="opening__hours">
            <h5>Opening hours</h5>
            <ListGroup>
              <ListGroupItem className="opening__hours-item border-0 ps-0">
                <p>Monday - Friday</p>
                <span>8:00am - 7:00pm</span>
              </ListGroupItem>
              <ListGroupItem className="opening__hours-item border-0 ps-0">
                <p>Saturday</p>
                <span>9:00am - 5:00pm</span>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg="3" md="4" sm="6">
          <div className="footer__contact">
            <h5>Contact</h5>
            <ListGroup>
              <ListGroupItem className="opening__hours-item border-0 ps-0">
                <p>
                  Location:{" "}
                  <span>
                    Iba Ojo Lagos, Nigeria
                  </span>
                </p>
              </ListGroupItem>
              <ListGroupItem className="opening__hours-item border-0 ps-0">
                <p>
                  Email:{" "}
                  <span>
                    forstermichael112@gmail
                  </span>
                </p>
              </ListGroupItem>
              <ListGroupItem className="opening__hours-item border-0 ps-0">
                <div className="social__contacts d-flex align-items-center gap-4">
                  <IconWrap className="social__contacts-item">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                    >
                      <i className="ri-facebook-line"></i>
                    </a>
                  </IconWrap>
                  <IconWrap className="social__contacts-item">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                    >
                      <i className="ri-instagram-line"></i>
                    </a>
                  </IconWrap>
                  <IconWrap className="social__contacts-item">
                    <a
                      href="https://wa.me/+2348113778736"
                      target="_blank"
                    >
                      <i className="ri-whatsapp-line"></i>
                    </a>
                  </IconWrap>
                </div>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg="3" md="4" sm="6">
          <div>
            <h5>About the Chef</h5>
            <p>
              Name: <br />
              <span>
                Marypeace Chinaecherem Udemezue
              </span>
            </p>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
