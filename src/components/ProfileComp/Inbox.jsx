import React from "react";
import { Container, Row } from "reactstrap";

import "../../styles/inbox.css";

const Inbox = () => {
  return (
    <Container className="inbox__container m-3 d-flex flex-column gap-4">
      <Row>
        <span className="inbox__time">10 hours ago</span>
        <h5 className="inbox__status">Package delivered</h5>
        <p className="inbox__desc">
          Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Omnis aliquid consequatur
          provident. Dolore, autem cum!
        </p>
        <div className="inbox__about">
          <span>200ml Yoghurt Perfait</span>
        </div>
      </Row>
      <Row>
        <span className="inbox__time">10 hours ago</span>
        <h5 className="inbox__status">Package delivered</h5>
        <p className="inbox__desc">
          Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Omnis aliquid consequatur
          provident. Dolore, autem cum!
        </p>
        <div className="inbox__about">
          <span>200ml Yoghurt Perfait</span>
        </div>
      </Row>
      <Row>
        <span className="inbox__time">10 hours ago</span>
        <h5 className="inbox__status">Package delivered</h5>
        <p className="inbox__desc">
          Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Omnis aliquid consequatur
          provident. Dolore, autem cum!
        </p>
        <div className="inbox__about">
          <span>200ml Yoghurt Perfait</span>
        </div>
      </Row>
    </Container>
  );
};

export default Inbox;
