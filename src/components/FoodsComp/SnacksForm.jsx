import React from "react";
import { useRef, useState } from "react";
import { Row, Col } from "reactstrap";

import {
  Button,
  ProductCard,
} from "../StyledComponents/StyledComponents";
import { showInputs } from "../../assets/functions/neededFunctions";

const SnacksForm = () => {
  const snacksTaskRef = useRef();
  const snacksInputWrapRef = useRef();
  const perfaitTypeRef = useRef();

  const userInputsObj = {
    type: "",
    quantity: "",
    descriptions: "",
    price: 0,
  };

  const [sUserInputData, setsUserInputsData] =
    useState(userInputsObj);

  function setSnacksPrice1(e) {
    const doughnutPrice = 250;
    const smallChopsPrice = 900;

    if (e.target.value === "Doughnuts") {
      setsUserInputsData({
        ...sUserInputData,
        type: e.target.value,
        price:
          +sUserInputData.quantity *
          doughnutPrice,
      });
    }
    if (e.target.value === "Small Chops") {
      setsUserInputsData({
        ...sUserInputData,
        type: e.target.value,
        price:
          +sUserInputData.quantity *
          smallChopsPrice,
      });
    }
  }

  function setSnacksPrice2(e) {
    const doughnutPrice = 250;
    const smallChopsPrice = 900;

    if (sUserInputData.type === "Doughnuts") {
      setsUserInputsData({
        ...sUserInputData,
        quantity: e.target.value,
        price: +e.target.value * doughnutPrice,
      });
    }
    if (sUserInputData.type === "Small Chops") {
      setsUserInputsData({
        ...sUserInputData,
        quantity: e.target.value,
        price: +e.target.value * smallChopsPrice,
      });
    }
  }

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
              className="customize__foods__inputs customize__foods__input"
              ref={perfaitTypeRef}
              onChange={(e) => setSnacksPrice1(e)}
            >
              <option value="type">Type</option>
              <option value="Small Chops">
                Small Chops
              </option>
              <option value="Doughnuts">
                Doughnuts
              </option>
            </select>
          </Col>
          <Col lg="4" md="6">
            <input
              type="number"
              placeholder="Quantity"
              className="customize__foods__inputs customize__foods__input"
              onChange={(e) => setSnacksPrice2(e)}
            />
          </Col>
          <Col lg="4">
            <textarea
              cols="36"
              rows="2"
              placeholder="Any information for the chef? e.g allegies or special design"
              className="customize__foods__inputs"
              onChange={(e) =>
                setsUserInputsData({
                  ...sUserInputData,
                  descriptions: e.target.value,
                })
              }
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
                Type:{" "}
                <span>{sUserInputData.type}</span>
              </p>
              <p>
                Quantity:{" "}
                <span>
                  {sUserInputData.quantity}
                </span>
              </p>
              <p>
                Other Info:{" "}
                <span>
                  {sUserInputData.descriptions}
                </span>
              </p>
              <div className="d-flex align-items-center justify-content-between w-50">
                <span>
                  ₦ {sUserInputData.price}{" "}
                </span>
                <Button $primary>
                  add to cart
                </Button>
              </div>
            </ProductCard>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SnacksForm;
