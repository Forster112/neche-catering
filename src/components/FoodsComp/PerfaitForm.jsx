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

const PerfaitForm = () => {
  const perfaitTaskRef = useRef();
  const perfaitInputWrapRef = useRef();

  const userInputsObj = {
    type: "",
    size: "",
    descriptions: "",
    pricesArr: [0, 0],
  };

  const dispatch = useDispatch();
  function addItem() {
    dispatch(
      cartActions.addItem({
        title: `${pUserInputData.size} ${pUserInputData.type}`,
        quantity: 1,
        price: pUserInputData.pricesArr.reduce(
          (acc, val) => acc + val,
          0
        ),
        description: pUserInputData.descriptions,
      })
    );
  }

  const [pUserInputData, setpUserInputsData] =
    useState(userInputsObj);
  
  function setPTypePrice(e) {
    let price = 0;
    if (e.target.value === "Cake Perfait")
      price = 3000;
    if (e.target.value === "Yoghurt perfait")
      price = 2000;
    let addTp = pUserInputData.pricesArr.slice()
    addTp[0] = price;
    setpUserInputsData({
      ...pUserInputData,
      type: e.target.value,
      pricesArr: addTp
    });
  }

  function setPSizePrice(e) {
    let price = 0;
    if (e.target.value === "200ml") price = 1000
    if (e.target.value === "500ml") price = 2200
    if (e.target.value === "1L") price = 4100
    let addSp = pUserInputData.pricesArr.slice();
    addSp[1] = price;
    setpUserInputsData({
      ...pUserInputData,
      size: e.target.value,
      pricesArr: addSp
    });
  }

  return (
    <div>
      <p className="foods__intro" ref={perfaitTaskRef}>
        click to customize your taste
      </p>
      <Button
        className="mb-5"
        onClick={(e) =>
          showInputs(e, perfaitTaskRef, perfaitInputWrapRef)
        }
      >
        Customize
      </Button>
      <div className="hidden" ref={perfaitInputWrapRef}>
        <Row className="mb-5">
          <Col lg="4" md="6">
            <select
              className="customize__foods__inputs customize__foods__input"
              onChange={(e) => setPTypePrice(e)}
            >
              <option value="type">Type</option>
              <option value="Yoghurt Perfait">
                Yoghort Perfait
              </option>
              <option value="Cake Perfait">
                Cake Perfait
              </option>
            </select>
          </Col>
          <Col lg="4" md="6">
            <select
              className="customize__foods__inputs customize__foods__input"
              onChange={(e) => setPSizePrice(e)}
            >
              <option value="size">Size</option>
              <option value="200ml">200ml</option>
              <option value="500ml">500ml</option>
              <option value="1L">1L</option>
            </select>
          </Col>
          <Col lg="4">
            <textarea
              cols="36"
              rows="2"
              placeholder="Any information for the chef? e.g allegies"
              className="customize__foods__inputs"
              onChange={(e) =>
                setpUserInputsData({
                  ...pUserInputData,
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
                Type: <span>{pUserInputData.type}</span>
              </p>
              <p>
                Size: <span>{pUserInputData.size}</span>
              </p>
              <p>
                Other Info:{" "}
                <span>{pUserInputData.descriptions}</span>
              </p>
              <div className="userInputedTotalPriceNbtn d-flex align-items-center justify-content-between">
                <span>
                  ₦{" "}
                  {pUserInputData.pricesArr.reduce(
                    (acc, val) => acc + val,
                    0
                  )}{" "}
                </span>
                <Button $primary onClick={addItem}>
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

export default PerfaitForm;
