import React from "react";
import { useRef, useState } from "react";
import { Row, Col } from "reactstrap";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice/cartSlice";

import {
  Button,
  ProductCard,
} from "../StyledComponents/StyledComponents";
import { showInputs } from "../../assets/functions/neededFunctions";

const CupcakesForm = () => {
  const cupcakesTaskRef = useRef();
  const cupcakesInputWrapRef = useRef();
  const cupcakeFlavourRef = useRef();

  const cUserInputsObj = {
    flavour: "",
    quantity: "",
    descriptions: "",
    price: 0,
  };

  const dispatch = useDispatch();
  function addItem() {
    for (
      let i = 0;
      i < cUserInputData.quantity;
      i++
    ) {
      dispatch(
        cartActions.addItem({
          title: `${cUserInputData.flavour} Cupcake`,
          quantity: 1,
          price: cUserInputData.price,
          description:
            cUserInputData.descriptions,
        })
      );
    }
  }

  const [cUserInputData, setcUserInputsData] =
    useState(cUserInputsObj);

  function setcupcakesPrice1(e) {
    const vanillaPrice = 600;
    const chocolatePrice = 900;
    const strawberryPrice = 700;

    if (e.target.value === "Vanilla") {
      setcUserInputsData({
        ...cUserInputData,
        flavour: e.target.value,
        price: vanillaPrice,
      });
    }
    if (e.target.value === "Chocolate") {
      setcUserInputsData({
        ...cUserInputData,
        flavour: e.target.value,
        price: chocolatePrice,
      });
    }
    if (e.target.value === "Strawberry") {
      setcUserInputsData({
        ...cUserInputData,
        flavour: e.target.value,
        price: strawberryPrice,
      });
    }
  }

  function setCupcakesPrice2(e) {
    const vanillaPrice = 600;
    const chocolatePrice = 900;
    const strawberryPrice = 700;

    if (cUserInputData.flavour === "Vanilla") {
      setcUserInputsData({
        ...cUserInputData,
        quantity: e.target.value,
        price: vanillaPrice,
      });
    }
    if (cUserInputData.flavour === "Chocolate") {
      setcUserInputsData({
        ...cUserInputData,
        quantity: e.target.value,
        price: chocolatePrice,
      });
    }
    if (cUserInputData.flavour === "Strawberry") {
      setcUserInputsData({
        ...cUserInputData,
        quantity: e.target.value,
        price: strawberryPrice,
      });
    }
  }

  return (
    <div>
      <p
        className="foods__intro"
        ref={cupcakesTaskRef}
      >
        click to customize your taste
      </p>
      <Button
        className="mb-5"
        onClick={(e) =>
          showInputs(
            e,
            cupcakesTaskRef,
            cupcakesInputWrapRef
          )
        }
      >
        Customize
      </Button>
      <div
        className="hidden"
        ref={cupcakesInputWrapRef}
      >
        <Row className="mb-5">
          <Col lg="4" md="6">
            <select
              className="customize__foods__inputs customize__foods__input"
              ref={cupcakeFlavourRef}
              onChange={(e) =>
                setcupcakesPrice1(e)
              }
            >
              <option value="flavour">
                Flavour
              </option>
              <option value="Chocolate">
                Chocolate
              </option>
              <option value="Vanilla">
                Vanilla
              </option>
              <option value="Strawberry">
                Strawberry
              </option>
            </select>
          </Col>
          <Col lg="4" md="6">
            <input
              type="number"
              placeholder="Quantity"
              className="customize__foods__inputs customize__foods__input"
              onChange={(e) =>
                setCupcakesPrice2(e)
              }
            />
          </Col>
          <Col lg="4">
            <textarea
              cols="36"
              rows="2"
              placeholder="Any information for the chef? e.g allegies or special design"
              className="customize__foods__inputs"
              onChange={(e) =>
                setcUserInputsData({
                  ...cUserInputData,
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
                Flavour:{" "}
                <span>
                  {cUserInputData.flavour}
                </span>
              </p>
              <p>
                Quantity:{" "}
                <span>
                  {cUserInputData.quantity}
                </span>
              </p>
              <p>
                Other Info:{" "}
                <span>
                  {cUserInputData.descriptions}
                </span>
              </p>
              <div className="d-flex align-items-center justify-content-between w-50">
                <span>
                  ₦ {cUserInputData.price * cUserInputData.quantity}{" "}
                </span>
                <Button
                  $primary
                  onClick={addItem}
                >
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

export default CupcakesForm;
