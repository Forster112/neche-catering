import React from "react";
import { useRef } from "react";
import { Row, Col } from "reactstrap";

import {
  Button,
  ProductCard,
} from "../StyledComponents/StyledComponents";
import { showInputs } from "../../assets/functions/neededFunctions";

const PerfaitForm = () => {
  const perfaitTaskRef = useRef();
  const perfaitInputWrapRef = useRef();

  return (
    <div>
      <p
        className="foods__intro"
        ref={perfaitTaskRef}
      >
        click to customize your taste
      </p>
      <Button
        className="mb-5"
        onClick={(e) =>
          showInputs(
            e,
            perfaitTaskRef,
            perfaitInputWrapRef
          )
        }
      >
        Customize
      </Button>
      <div
        className="hidden"
        ref={perfaitInputWrapRef}
      >
        <Row className="mb-5">
          <Col lg="4" md="6">
            <select
              name=""
              id=""
              className="customize__foods__inputs customize__foods__input"
            >
              <option value="type">Type</option>
              <option value="yoghurt">
                Yoghort perfait
              </option>
              <option value="cake">
                Cake perfait
              </option>
            </select>
          </Col>
          <Col lg="4" md="6">
            <select
              name=""
              id=""
              className="customize__foods__inputs customize__foods__input"
            >
              <option value="size">Size</option>
              <option value="200ml">200ml</option>
              <option value="500ml">500ml</option>
              <option value="1l">1L</option>
            </select>
          </Col>
          <Col lg="4">
            <textarea
              name=""
              id=""
              cols="36"
              rows="2"
              placeholder="Any information for the chef? e.g allegies"
              className="customize__foods__inputs"
            ></textarea>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <ProductCard
              gap="20px"
              className="userInputData"
            >
              <h5>Choices</h5>
              <p>
                Type: <span>Vanilla</span>
              </p>
              <p>
                Size: <span>2</span>
              </p>
              <p>
                Other Info:{" "}
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

export default PerfaitForm;
