import React from "react";
import { useState } from "react";
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { desertTypeActions } from "../store/desert-type/desertTypeSlice";

import "../styles/home.css";
import baking from "../assets/images/baking.png";
import cake from "../assets/images/cake_vector.png";
import cupcake from "../assets/images/cupcake_vector.png";
// import donut from "../assets/images/donut_vector.png";
import smallchops from "../assets/images/smallchops_vector.png";
import perfait from "../assets/images/perfait_vector.png";
import desertdata from "../assets/fakeData/fakedata";
import { activeDesert } from "../assets/functions/neededFunctions";

import {
  Button,
  IconWrap,
  ServiceWrap,
  PopularBtn,
  ProductCard,
} from "../components/StyledComponents/StyledComponents";
import WWS from "../components/HomeComp/WWS";
import WhyUs from "../components/HomeComp/WhyUs";
import Testimonial from "../components/HomeComp/Testimonial";

const Home = () => {
  const [activeBtn, setActiveBtn] =
    useState("ALL");

  const dispatch = useDispatch();

  return (
    <div>
      {/* Intro section */}
      <section className="home__intro">
        <Row>
          <Col sm="12" md="6" lg="6">
            <div className="intro__col d-flex gap-2">
              <h1>
                Easy way to get your cakes and
                pasteries
              </h1>
              <h5>
                Need <span>deserts?</span>
                <br /> Relax, we got you{" "}
                <span>covered</span>
              </h5>
              <p>
                We deliver all kind of cakes and
                pasteries for your events,
                birthdays and personal consumption
              </p>
              <div className="intro__btns d-flex gap-5">
                <Button
                  onClick={(e) =>
                    (window.location.href =
                      "/home#gallery")
                  }
                >
                  View gallery
                </Button>
                <Link to="/foods">
                  <Button $primary>
                    Order now{" "}
                    <i className="ri-arrow-right-s-line"></i>
                  </Button>
                </Link>
              </div>
              <div className="methods mt-4 d-flex gap-5">
                <span className="d-flex align-items-center gap-3">
                  <IconWrap>
                    <i className="ri-store-2-line"></i>
                  </IconWrap>
                  bakery pickup
                </span>
                <span className="d-flex align-items-center gap-3">
                  <IconWrap>
                    <i className="ri-shield-check-line"></i>
                  </IconWrap>
                  100% safe delivery
                </span>
              </div>
            </div>
          </Col>
          <Col sm="12" md="6" lg="6">
            <div className="img__col">
              <img
                src={baking}
                alt="chef image"
              />
            </div>
          </Col>
        </Row>
      </section>
      {/* Service Image section */}
      <section className="servive__image">
        <Row>
          <Col lg="3" md="4" sm="6">
            <Link to="/foods">
              <ServiceWrap
                onClick={() =>
                  dispatch(
                    desertTypeActions.changeType(
                      "CAKES"
                    )
                  )
                }
              >
                <IconWrap
                  width="70px"
                  height="70px"
                  $primary
                >
                  <img
                    src={cake}
                    alt="cake"
                    className="vector__images"
                  />
                </IconWrap>
                <span>Cakes</span>
              </ServiceWrap>
            </Link>
          </Col>
          <Col lg="3" md="4" sm="6">
            <Link to="/foods">
              <ServiceWrap
                onClick={() =>
                  dispatch(
                    desertTypeActions.changeType(
                      "CUPCAKES"
                    )
                  )
                }
              >
                <IconWrap
                  width="70px"
                  height="70px"
                  $primary
                >
                  <img
                    src={cupcake}
                    alt="cupcake"
                    className="vector__images"
                  />
                </IconWrap>
                <span>Cup cakes</span>
              </ServiceWrap>
            </Link>
          </Col>
          <Col lg="3" md="4" sm="6">
            <Link to="/foods">
              <ServiceWrap
                onClick={() =>
                  dispatch(
                    desertTypeActions.changeType(
                      "SMALLCHOPS"
                    )
                  )
                }
              >
                <IconWrap
                  width="70px"
                  height="70px"
                  $primary
                >
                  <img
                    src={smallchops}
                    alt="smallchops"
                    className="vector__images2"
                  />
                </IconWrap>
                <span>Small Chops</span>
              </ServiceWrap>
            </Link>
          </Col>
          <Col lg="3" md="4" sm="6">
            <Link to="/foods">
              <ServiceWrap
                onClick={() =>
                  dispatch(
                    desertTypeActions.changeType(
                      "PERFAITS"
                    )
                  )
                }
              >
                <IconWrap
                  width="70px"
                  height="70px"
                  $primary
                >
                  <img
                    src={perfait}
                    alt="perfait"
                    className="vector__images"
                  />
                </IconWrap>
                <span>Perfaits</span>
              </ServiceWrap>
            </Link>
          </Col>
        </Row>
      </section>
      {/* What we serve section */}
      <section className="wws__section">
        <WWS />
      </section>
      {/* Popular Deserts section */}
      <section id="gallery">
        <Container>
          <Row>
            <Col
              lg="12"
              md="12"
              sm="12"
              className="text-center mb-4"
            >
              <h5 className="popular__deserts__header fw-bold">
                Popular Deserts
              </h5>
            </Col>
            <Col
              lg="12"
              md="12"
              sm="12"
              className="mb-5"
            >
              <div className="popular__deserts__btn__wrap d-flex align-items-center justify-content-center gap-5">
                <PopularBtn
                  width="70px"
                  className={
                    activeBtn === "ALL"
                      ? "activebtn"
                      : ""
                  }
                  onClick={() =>
                    setActiveBtn("ALL")
                  }
                >
                  All
                </PopularBtn>
                <PopularBtn
                  className={
                    activeBtn === "CAKES"
                      ? "activebtn"
                      : ""
                  }
                  onClick={() =>
                    setActiveBtn("CAKES")
                  }
                >
                  Cakes
                </PopularBtn>
                <PopularBtn
                  className={
                    activeBtn === "CUPCAKES"
                      ? "activebtn"
                      : ""
                  }
                  onClick={() =>
                    setActiveBtn("CUPCAKES")
                  }
                >
                  Cupcakes
                </PopularBtn>
                <PopularBtn
                  width="93px"
                  className={
                    activeBtn === "SMALLCHOPS"
                      ? "activebtn"
                      : ""
                  }
                  onClick={() =>
                    setActiveBtn("SMALLCHOPS")
                  }
                >
                  Smallchops
                </PopularBtn>
                <PopularBtn
                  className={
                    activeBtn === "PERFAITS"
                      ? "activebtn"
                      : ""
                  }
                  onClick={() =>
                    setActiveBtn("PERFAITS")
                  }
                >
                  Perfaits
                </PopularBtn>
              </div>
            </Col>
            {activeDesert(activeBtn).map(
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
                    <p className="product__desc-text text-center">
                      {item.desc}
                    </p>
                    <div className="d-flex justify-content-between align-items-center gap-5">
                      <span>₦{item.price}</span>
                      <Button
                        $primary
                        width="100px"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </ProductCard>
                </Col>
              )
            )}
          </Row>
        </Container>
      </section>
      {/* Why us section */}
      <section>
        <WhyUs />
      </section>
      {/* Testimonial section */}
      <section>
        <Testimonial />
      </section>
    </div>
  );
};

export default Home;
