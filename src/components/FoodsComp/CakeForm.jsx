import React from "react";
import { useRef, useState } from "react";
import { Row, Col } from "reactstrap";

import {
  Button,
  ProductCard,
} from "../StyledComponents/StyledComponents";
import { showInputs } from "../../assets/functions/neededFunctions";

const CakeForm = () => {
  const taskRef = useRef();
  const inputWrapRef = useRef();

  const userInputsObj = {
    flavour: "",
    "number of layers": "",
    "layer size": "",
    descriptions: "",
    pricesArr: [0, 0, 0],
  };

  const [userInputsData, setUserInputsData] =
    useState(userInputsObj);

  function setUserFlavourData(e) {
    let price = 0;
    if (e.target.value === "Vanilla") price = 1000;
    if (e.target.value === "Chocolate")
      price = 1200;
    if (e.target.value === "Chocolate & Vanilla")
      price = 1300;
    if (e.target.value === "Strawberry")
      price = 1000;
    let addfp = userInputsData.pricesArr.slice();
    addfp[0] = price;
    setUserInputsData({
      ...userInputsData,
      flavour: e.target.value,
      pricesArr: addfp,
    });
  }

  function setUserLayerNumData(e) {
    let addlp = userInputsData.pricesArr.slice();
    addlp[1] = +e.target.value * 2000;
    setUserInputsData({
      ...userInputsData,
      "number of layers": e.target.value,
      pricesArr: addlp,
    });
  }

  function setUserLayerSizeData(e) {
    let price = 0;
    if (e.target.value === "Small") price = 600;
    if (e.target.value === "Medium") price = 800;
    if (e.target.value === "Large") price = 1000;
    if (e.target.value === "Extra Large")
      price = 1200;

    let addsp = userInputsData.pricesArr.slice();
    addsp[2] = price;
    setUserInputsData({
      ...userInputsData,
      "layer size": e.target.value,
      pricesArr: addsp,
    });
  }

  return (
    <div>
      <p className="foods__intro" ref={taskRef}>
        click to customize your taste
      </p>
      <Button
        className="mb-5"
        onClick={(e) =>
          showInputs(e, taskRef, inputWrapRef)
        }
      >
        Customize
      </Button>
      <div className="hidden" ref={inputWrapRef}>
        <Row className="mb-5">
          <Col lg="4" md="6">
            <select
              className="customize__foods__inputs customize__foods__input"
              onChange={(e) =>
                setUserFlavourData(e)
              }
            >
              <option value="Preffered flavour">
                Preffered Flavour(s)
              </option>
              <option value="Vanilla">
                Vanilla
              </option>
              <option value="Chocolate">
                Chocolate
              </option>
              <option value="Chocolate &amp; Vanilla">
                Chocolate &amp; Vanilla
              </option>
              <option value="Strawberry">
                Strawberry
              </option>
            </select>
          </Col>
          <Col lg="4" md="6">
            <input
              type="number"
              placeholder="number of layers"
              className="customize__foods__inputs customize__foods__input"
              onChange={(e) =>
                setUserLayerNumData(e)
              }
            />
          </Col>
          <Col lg="4">
            <select
              className="customize__foods__inputs customize__foods__input"
              onChange={(e) =>
                setUserLayerSizeData(e)
              }
            >
              <option value="layer size">
                layer size (smallest)
              </option>
              <option value="Small">Small</option>
              <option value="Medium">
                Medium
              </option>
              <option value="Large">Large</option>
              <option value="Extra Large">
                Extra Large
              </option>
            </select>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <textarea
              cols="50"
              rows="11"
              placeholder="Anyother information for the chef? e.g designs, texts like birthday wishes, preffered icing color, etc."
              className="customize__foods__inputs"
              onChange={(e) =>
                setUserInputsData({
                  ...userInputsData,
                  descriptions: e.target.value,
                })
              }
            ></textarea>
          </Col>
          <Col lg="6">
            <ProductCard
              gap="20px"
              className="userInputData"
            >
              <h5>Choices</h5>
              <p>
                Flavour:{" "}
                <span>
                  {userInputsData.flavour}
                </span>
              </p>
              <p>
                Number of Layers:{" "}
                <span>
                  {
                    userInputsData[
                      "number of layers"
                    ]
                  }
                </span>
              </p>
              <p>
                Layer size:{" "}
                <span>
                  {userInputsData["layer size"]}
                </span>
              </p>
              <p>
                Other desc:{" "}
                <span>
                  {userInputsData.descriptions}
                </span>
              </p>
              <div className="d-flex align-items-center justify-content-between w-50">
                <span>₦ {userInputsData.pricesArr.reduce((acc, val)=> acc + val, 3000)}</span>
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

export default CakeForm;
