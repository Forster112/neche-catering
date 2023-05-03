import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

import happychef from "../../assets/images/happychef.png";
import '../../styles/whyus.css'

const WhyUs = () => {
  return (
    <Container>
      <Row className="whyus__row">
        <Col lg="6" md="12" sm="12">
          <img src={happychef} alt="happychef" />
        </Col>
        <Col lg="6" md="12" sm="12">
          <h5 className="whyus__title mb-4">
            Why <span>Neche Catering</span>
          </h5>
          <p className="choose-us__desc">
            Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Minima
            eveniet expedita doloribus tempora sit
            ut tenetur? Omnis natus numquam fugit
            reprehenderit pariatur quis tempore
            adipisci sed, mollitia repellat quae
            cumque.
          </p>
          <ListGroup className="mt-4">
            <ListGroupItem className="border-0 ps-0">
              <p className="choose-us__title d-flex align-items-center gap-2">
                <i className="ri-checkbox-circle-line"></i>
                Fresh and Tasty Deserts
              </p>
              <p className="choose-us__desc">
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Qui
                quia at ipsam hic eveniet tenetur.
              </p>
            </ListGroupItem>

            <ListGroupItem className="border-0 ps-0">
              <p className="choose-us__title d-flex align-items-center gap-2">
                <i className="ri-checkbox-circle-line"></i>
                Quality Service
              </p>
              <p className="choose-us__desc">
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Qui
                quia at ipsam hic eveniet tenetur.
              </p>
            </ListGroupItem>

            <ListGroupItem className="border-0 ps-0">
              <p className="choose-us__title d-flex align-items-center gap-2">
                <i className="ri-checkbox-circle-line"></i>
                Order from any where in Lagos
              </p>
              <p className="choose-us__desc">
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Qui
                quia at ipsam hic eveniet tenetur.
              </p>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyUs;
