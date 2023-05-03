import React from "react";
import { Col, Row, Container } from "reactstrap";

import '../../styles/testimonial.css'
import customer from "../../assets/images/customers.png";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <Container>
      <Row>
        <Col lg="6" md="12" sm="12" className="slider__wrap">
          <h3 className="testimonial__title mb-4">
            Testimonial
          </h3>
          <h5 className="testimonial__intro mb-4">
            What our <span>customers</span> are
            saying
          </h5>
          <p className="testimonial__desc mb-5">
            Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Dicta
            aperiam atque fuga dolorem aliquam!
            Odit.
          </p>
          <TestimonialSlider />
        </Col>
        <Col lg="6" md="12" sm="12">
          <img
            src={customer}
            alt="customers"
            className="testimonial__image"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonial;
