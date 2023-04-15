import React from "react";
import { useRef } from "react";
import { Row, Col } from "reactstrap";

import {
  Button,
  ProductCard,
} from "../StyledComponents/StyledComponents";
import { showInputs } from "../../assets/functions/neededFunctions";

const SnacksForm = () => {
  const snacksTaskRef = useRef();
  const snacksInputWrapRef = useRef();
  return (
    <div>
      <p
        className="foods__intro"
        ref={snacksTaskRef}
      >
        click to customize your taste
      </p>
      <Button
        className="mb-5"
        onClick={(e) =>
          showInputs(
            e,
            snacksTaskRef,
            snacksInputWrapRef
          )
        }
      >
        Customize
      </Button>
      <div
        className="hidden"
        ref={snacksInputWrapRef}
      >
        <Row className="mb-5">
          <Col lg="4" md="6">
            <select
              name=""
              id=""
              className="customize__foods__inputs customize__foods__input"
            >
              <option value="type">Type</option>
              <option value="smallchops">
                Small Chops
              </option>
              <option value="doughnuts">
                Doughnuts
              </option>
            </select>
          </Col>
          <Col lg="4" md="6">
            <input
              type="number"
              name=""
              id=""
              placeholder="Quantity"
              className="customize__foods__inputs customize__foods__input"
            />
          </Col>
          <Col lg="4">
            <textarea
              name=""
              id=""
              cols="36"
              rows="2"
              placeholder="Any information for the chef? e.g allegies or special design"
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
                Type: <span>Small Chop</span>
              </p>
              <p>
                Quantity: <span>50</span>
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

export default SnacksForm;
