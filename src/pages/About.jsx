import React from "react";
import { Container, Row, Col } from "reactstrap";

import "../styles/about.css";
import cake_shop from "../assets/images/catering-shop.png";
import chef_image from "../assets/images/chef-image.png";
import services_image from '../assets/images/services-image.png'

const About = () => {
  return (
    <div>
      <div className="about__intro">
        <h6 className="text-center">
          ABOUT NECHE CATERING
        </h6>
        <p>
          We offer all kinds of catering services
          e.g cakes, snacks, small chops,
          perfaits, and also cooking services for
          your events
        </p>
      </div>
      <Container className="about">
        <Row className="mb-5 align-items-center">
          <Col className="about__background-intro">
            <h6>BACKGROUND</h6>
            <p>
              Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Nihil
              veniam debitis aperiam quo earum
              eius neque harum, laborum facere
              nulla commodi ipsam perferendis
              voluptatibus deleniti cum dolor
              maiores incidunt ratione accusantium
              porro obcaecati aliquam fugiat sed
              nemo. Iusto odit placeat laboriosam
              possimus similique deleniti ullam
              impedit voluptate. Accusantium,
              facilis assumenda!
            </p>
          </Col>
          <Col className=" d-flex justify-content-center">
            <img
              src={cake_shop}
              alt="Catering shop"
              className="about__background-image"
            />
          </Col>
        </Row>
        <Row className="mb-5 align-items-center">
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
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Illo,
              natus? Totam consequuntur tempore
              sed minus et nihil, quae nam
              provident pariatur corporis iusto
              eaque sunt illo? Autem illo iusto
              nostrum?
            </p>
          </Col>
        </Row>
        <Row className="mb-5 align-items-center">
          <Col>
            <h6>PRODUCTS AND SERVICES</h6>
            <p>
              Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Rem
              in natus aspernatur, reiciendis
              saepe eum esse repellendus.
              Accusamus omnis harum, praesentium,
              repudiandae soluta recusandae cum
              perspiciatis tempora deserunt
              mollitia aspernatur incidunt velit?
              Saepe, culpa. Ullam veniam quod
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
      </Container>
    </div>
  );
};

export default About;
