import React, {useEffect} from "react";

import { Container, Row } from "reactstrap";

import { Button } from "../components/StyledComponents/StyledComponents";
import "../styles/contact.css";

const Contact = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Container>
      <Row>
        <h3 className="contact__header text-center">
          CONTACT
        </h3>
        <p className="contact__desc text-center">
          Fill the form below to send an email to
          us
        </p>
      </Row>
      <Row className="contact__inputs justify-content-center gap-4 mb-5 mt-5">
        <form
          action=""
          className="d-flex flex-column align-items-center gap-4"
        >
          <input
            type="text"
            placeholder="Your Name"
          />
          <input
            type="text"
            placeholder="Your Email"
          />
          <input
            type="text"
            placeholder="Enter Message Subject"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message..."
          ></textarea>
        </form>
        <Button $primary font-size="1.2rem" width="30%">
          Send <i class="ri-send-plane-fill"></i>
        </Button>
      </Row>
    </Container>
  );
};

export default Contact;
