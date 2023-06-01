import React from "react";
import { Container, Row, Col } from "reactstrap";
// import { Button } from "react-router-dom";

import {
  IconWrap,
  Button,
} from "../components/StyledComponents/StyledComponents";

import "../styles/about.css";
import cake_shop from "../assets/images/catering-shop.png";
import chef_image from "../assets/images/chef-image.png";
import services_image from "../assets/images/services-image.png";
import contact_image from "../assets/images/contact-image.png";

const About = () => {
  return (
    <div>
      <div className="about__intro">
        <h6 className="text-center">
          ABOUT NECHE CATERING
        </h6>
        <p>
          We offer all kinds of catering services e.g cakes,
          snacks, small chops, perfaits, and also cooking
          services for your events
        </p>
      </div>
      <Container className="about">
        <Row className="mb-5 align-items-center">
          <Col
            lg="6"
            md="6"
            sm="12"
            xs="12"
            className="about__background-intro"
          >
            <h6>BACKGROUND</h6>
            <p>
              Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Nihil veniam debitis aperiam
              quo earum eius neque harum, laborum facere
              nulla commodi ipsam perferendis voluptatibus
              deleniti cum dolor maiores incidunt ratione
              accusantium porro obcaecati aliquam fugiat sed
              nemo. Iusto odit placeat laboriosam possimus
              similique deleniti ullam impedit voluptate.
              Accusantium, facilis assumenda!
            </p>
          </Col>
          <Col
            lg="6"
            md="6"
            sm="12"
            xs="12"
            className=" d-flex justify-content-center"
          >
            <img
              src={cake_shop}
              alt="Catering shop"
              className="about__background-image"
            />
          </Col>
        </Row>
        <Row className="about__chef-row mb-5 align-items-center">
          <Col className="d-flex justify-content-center">
            <img
              src={chef_image}
              alt="chef image"
              className="about__chef-image"
            />
          </Col>
          <Col>
            <h6>ABOUT THE CHEF</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Illo, natus? Totam
              consequuntur tempore sed minus et nihil, quae
              nam provident pariatur corporis iusto eaque
              sunt illo? Autem illo iusto nostrum?
            </p>
          </Col>
        </Row>
        <Row className="mb-5 align-items-center">
          <Col>
            <h6>PRODUCTS AND SERVICES</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Rem in natus aspernatur,
              reiciendis saepe eum esse repellendus.
              Accusamus omnis harum, praesentium,
              repudiandae soluta recusandae cum perspiciatis
              tempora deserunt mollitia aspernatur incidunt
              velit? Saepe, culpa. Ullam veniam quod
              voluptate provident quam!
            </p>
          </Col>
          <Col>
            <img
              src={services_image}
              alt="Our services"
              className="about__chef-image"
            />
          </Col>
        </Row>
        <Row className="about__contact-row mb-5 align-items-center">
          <Col>
            <img
              src={contact_image}
              alt="contact image"
              className="about__contact-image"
            />
          </Col>
          <Col>
            <h6>CONTACT US</h6>
            <p>
              You can contact neche catering through email,
              phone or any of our social media handles
              provided below.
            </p>
            <div className="contact__details-div">
              <span>
                <i className="ri-mail-fill"></i>{" "}
                forstermichael112@gmail.com
              </span>
              <span>
                <i className="ri-phone-fill"></i>{" "}
                +2348113778736
              </span>
              <div className="d-flex gap-4">
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
              <p className="newsletter">
                Also subscribe to our newsletter
              </p>
              <div className="newsletter__wrap">
                <input
                  type="text"
                  placeholder="Enter your email"
                />{" "}
                <Button $primary width="55px">
                  <i className="ri-send-plane-fill"></i>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
