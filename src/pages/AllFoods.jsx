import React from "react";
import { useState } from "react";
import { Row, Col } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { desertTypeActions } from "../store/desert-type/desertTypeSlice";
import { cartActions } from "../store/cartSlice/cartSlice";

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
import CupcakesForm from "../components/FoodsComp/CupcakesForm";

const AllFoods = () => {
  
  const dispatch = useDispatch();
  const activeType = useSelector(
    (state) => state.desertType.desertType
  );

  function addItem(item) {
    dispatch(
      cartActions.addItem({
        title: item.title,
        quantity: 1,
        price: item.price,
        description: item.desc,
      })
    );
  }

  return (
    <div>
      <Row>
        <Col lg="2" md="3">
          <div className="foods__category-wrap gap-4">
            <div
              onClick={() =>
                dispatch(
                  desertTypeActions.changeType(
                    "CAKES"
                  )
                )
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
                dispatch(
                  desertTypeActions.changeType(
                    "CUPCAKES"
                  )
                )
              }
              className={
                activeType === "CUPCAKES"
                  ? "active__kind"
                  : ""
              }
            >
              Cupcakes
            </div>
            <div
              onClick={() =>
                dispatch(
                  desertTypeActions.changeType(
                    "PERFAITS"
                  )
                )
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
                dispatch(
                  desertTypeActions.changeType(
                    "SMALLCHOPS"
                  )
                )
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
                or Select any of our{" "}
                <span>
                  recent highest selling
                </span>{" "}
                deserts
              </p>
              <div>
                {(() => {
                  if (activeType === "CAKES") {
                    return <CakeForm />;
                  }
                  if (activeType === "PERFAITS") {
                    return <PerfaitForm />;
                  }
                  if (
                    activeType === "SMALLCHOPS"
                  ) {
                    return <SnacksForm />;
                  }
                  if (activeType === "CUPCAKES") {
                    return <CupcakesForm />;
                  }
                })()}
              </div>
            </div>
          </Row>
          <Row className="mb-5">
            {activeDesert(activeType).map(
              (item, i) => (
                <Col
                  lg="3"
                  md="6"
                  sm="12"
                  key={i}
                >
                  <ProductCard>
                    <img
                      src={item.image}
                      alt="product"
                      className="product__image mb-2"
                    />
                    <h5 className="text-center">
                      {item.title}
                    </h5>
                    <p className="text-center">
                      {item.desc}
                    </p>
                    <div className="d-flex justify-content-between align-items-center gap-5">
                      <span>₦{item.price}</span>
                      <Button
                        $primary
                        width="100px"
                        onClick={() => addItem(item)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </ProductCard>
                </Col>
              )
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AllFoods;
