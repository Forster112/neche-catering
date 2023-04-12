import React from "react";
import { Row, Col } from "reactstrap";

import "../styles/foods.css";

const AllFoods = () => {
  return (
    <div>
      <Row>
        <Col lg="2" md="3">
          <div className="foods__category-wrap gap-4">
            <div className="active__kind">
              Cakes
            </div>
            <div>Perfaits</div>
            <div className="active__kind">
              Small chops &amp; snacks
            </div>
          </div>
        </Col>
        <Col>
          <p>h</p>
          <p>h</p>
          <p>h</p>
          <p>
            <h1>j</h1>
          </p>
          <h1>G</h1>
          <h1>j</h1>
          <h1></h1>
          <h1>j</h1>
          <h1>j</h1>
          <h1>j</h1>
          <h1>j</h1>
        </Col>
      </Row>
    </div>
  );
};

export default AllFoods;
