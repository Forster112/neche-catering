import React from "react";
import { useRef } from "react";
import { Row, Col } from "reactstrap";

import {
  Button,
  ProductCard,
} from "../StyledComponents/StyledComponents";
import { showInputs } from "../../assets/functions/neededFunctions";

const CakeForm = () => {
  const taskRef = useRef();
  const inputWrapRef = useRef();

  return (
    <div>
      <p className="foods__intro" ref={taskRef}>
        click to customize your taste
      </p>
      <Button
        className="mb-5"
        onClick={(e) => showInputs(e, taskRef, inputWrapRef)}
      >
        Customize
      </Button>
      <div className="hidden" ref={inputWrapRef}>
        <Row className="mb-5">
          <Col lg="4" md="6">
            <input
              type="text"
              name=""
              id=""
              placeholder="preffered flavour(s)"
              className="customize__foods__inputs customize__foods__input"
            />
          </Col>
          <Col lg="4" md="6">
            <input
              type="number"
              name=""
              id=""
              placeholder="number of layers"
              className="customize__foods__inputs customize__foods__input"
            />
          </Col>
          <Col lg="4">
            <select
              name=""
              id=""
              className="customize__foods__inputs customize__foods__input"
            >
              <option value="layer size">
                layer size (smallest)
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <textarea
              name=""
              id=""
              cols="50"
              rows="11"
              placeholder="Anyother information for the chef? e.g designs, texts like birthday wishes, preffered icing color, etc."
              className="customize__foods__inputs"
            ></textarea>
          </Col>
          <Col lg="6">
            <ProductCard
              gap="20px"
              className="userInputData"
            >
              <h5>Choices</h5>
              <p>
                Flavour: <span>Vanilla</span>
              </p>
              <p>
                Number of Layers: <span>2</span>
              </p>
              <p>
                Layer size: <span>3</span>
              </p>
              <p>
                Other desc:{" "}
                <span>add happy birthday</span>
              </p>
              <Button $primary>
                add to cart
              </Button>
            </ProductCard>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CakeForm;
