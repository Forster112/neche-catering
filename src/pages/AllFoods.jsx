import React from "react";
import { useState } from "react";
import { Row, Col } from "reactstrap";

import "../styles/foods.css";
import desertdata from "../assets/fakeData/fakedata";
import {
  ProductCard,
  Button,
} from "../components/StyledComponents/StyledComponents";
import CakeForm from "../components/FoodsComp/CakeForm";
import PerfaitForm from "../components/FoodsComp/PerfaitForm";
import SnacksForm from "../components/FoodsComp/SnacksForm";
import { activeDesert } from "../assets/functions/neededFunctions";

const AllFoods = () => {
  const [activeType, setActiveType] =
    useState("CAKES");

  return (
    <div>
      <Row>
        <Col lg="2" md="3">
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
              <h5 className="foods__title">
                Welcome to the store
              </h5>
              <p className="foods__intro mb-5">
                Customize your taste and choices
                or Choose and modify any of our{" "}
                <span>
                  recent highest selling
                </span>{" "}
                deserts
              </p>
              <div>
                {(() => {
                  if (activeType === "CAKES") {
                    return (
                      <CakeForm/>
                    );
                  }
                  if (activeType === "PERFAITS") {
                    return (
                      <PerfaitForm/>
                    );
                  }
                  if (activeType === "SMALLCHOPS") {
                    return (
                      <SnacksForm/>
                    )
                  }
                })()}
              </div>
            </div>
          </Row>
          <Row className="mb-5">
            {activeDesert(activeType).map((item, i) => (
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
