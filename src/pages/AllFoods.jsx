import React from "react";
import { useState, useRef } from "react";
import { Row, Col } from "reactstrap";

import "../styles/foods.css";
import desertdata from "../assets/fakeData/fakedata";
import {
  ProductCard,
  Button,
} from "../components/StyledComponents/StyledComponents";

const AllFoods = () => {
  const [activeType, setActiveType] =
    useState("CAKES");
  
  const inputWrapRef = useRef()

  function activeDesertType() {
    if (activeType === "CAKES")
      return desertdata.filter(
        (item) => item.category === "CAKES"
      );
    if (activeType === "PERFAITS")
      return desertdata.filter(
        (item) => item.category === "PERFAITS"
      );
    if (activeType === "SMALLCHOPS")
      return desertdata.filter(
        (item) => item.category === "SMALLCHOPS"
      );
  }

  function showInputs(e) {
    e.target.classList.add("hidden");
    inputWrapRef.current.classList.add(
      "show"
    );
  }

  return (
    <div>
      <Row>
        <Col lg="2" md="3" className="wrap">
          <div className="foods__category-wrap gap-4">
            <div
              onClick={() =>
                setActiveType("CAKES")
              }
              className={
                activeType === "CAKES"
                  ? "active__kind"
                  : ""
              }
            >
              Cakes
            </div>
            <div
              onClick={() =>
                setActiveType("PERFAITS")
              }
              className={
                activeType === "PERFAITS"
                  ? "active__kind"
                  : ""
              }
            >
              Perfaits
            </div>
            <div
              onClick={() =>
                setActiveType("SMALLCHOPS")
              }
              className={
                activeType === "SMALLCHOPS"
                  ? "active__kind"
                  : ""
              }
            >
              Small chops &amp; snacks
            </div>
          </div>
        </Col>
        <Col className="mt-4 me-4">
          <Row>
            <div className="custom__desert mb-5">
              <p className="foods__intro">
                click to customize your taste
              </p>
              <Button className="mb-5" onClick={(e)=> showInputs(e)}>
                Customize
              </Button>
              <div className="hidden show__effect" ref={inputWrapRef}>
                {(() => {
                  if (activeType === "CAKES") {
                    return (
                      <div>
                        <Row className="mb-5">
                          <Col lg="4" md="6">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="preffered flavour"
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
                                layer size
                                (smallest)
                              </option>
                              <option value="2">
                                2
                              </option>
                              <option value="3">
                                3
                              </option>
                              <option value="4">
                                4
                              </option>
                              <option value="5">
                                5
                              </option>
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
                            <ProductCard gap="20px">
                              <h5>Choices</h5>
                              <span>
                                Flavour:{" "}
                              </span>
                              <span>
                                Number of Layers:{" "}
                              </span>
                              <span>
                                Layer size:{" "}
                              </span>
                              <span>
                                Other desc:{" "}
                              </span>
                              <Button $primary>
                                add to cart
                              </Button>
                            </ProductCard>
                          </Col>
                        </Row>
                      </div>
                    );
                  }
                })()}
              </div>
            </div>
          </Row>
          <Row className="mb-5">
            <h5 className="foods__title">
              Welcome to the store
            </h5>
            <p className="foods__intro mb-5">
              Choose and modify any of our{" "}
              <span>recent highest selling</span>{" "}
              deserts or scroll down to customize
              your taste and choices
            </p>
            {activeDesertType().map((item, i) => (
              <Col lg="3" md="6" sm="12" key={i}>
                <ProductCard>
                  <img
                    src={item.image}
                    alt="product"
                    className="product__image mb-2"
                  />
                  <h5 className="text-center">
                    {item.name}
                  </h5>
                  <p className="text-center">
                    {item.desc}
                  </p>
                  <div className="d-flex justify-content-between align-items-center gap-5">
                    <span>₦{item.price}</span>
                    <Button $primary width="80px">
                      Modify
                    </Button>
                  </div>
                </ProductCard>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AllFoods;
