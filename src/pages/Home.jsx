import React from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

import "../styles/home.css";
import baking from "../assets/images/baking.png";
import cake from "../assets/images/cake_vector.png";
import cupcake from "../assets/images/cupcake_vector.png";
import donut from "../assets/images/donut_vector.png";
import perfait from "../assets/images/perfait_vector.png";

import {
  Button,
  IconWrap,
  ServiceWrap,
} from "../components/StyledComponents/StyledComponents";
import WWS from "../components/HomeComp/WWS";

const Home = () => {
  return (
    <div>
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
                <Button>View gallery</Button>
                <Link to="/foods">
                  <Button $primary>
                    Order now{" "}
                    <i class="ri-arrow-right-s-line"></i>
                  </Button>
                </Link>
              </div>
              <div className="methods mt-4 d-flex gap-5">
                <span className="d-flex align-items-center gap-3">
                  <IconWrap>
                    <i class="ri-store-2-line"></i>
                  </IconWrap>
                  bakery pickup
                </span>
                <span className="d-flex align-items-center gap-3">
                  <IconWrap>
                    <i class="ri-shield-check-line"></i>
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
      <section className="servive__image">
        <Row>
          <Col lg="3" md="4" sm="6">
            <ServiceWrap>
              <IconWrap
                width="70px"
                height="70px"
              >
                <img
                  src={cake}
                  alt="cake"
                  className="vector__images"
                />
              </IconWrap>
              <span>Cakes</span>
            </ServiceWrap>
          </Col>
          <Col lg="3" md="4" sm="6">
            <ServiceWrap>
              <IconWrap
                width="70px"
                height="70px"
              >
                <img
                  src={cupcake}
                  alt="cupcake"
                  className="vector__images"
                />
              </IconWrap>
              <span>Cup cakes</span>
            </ServiceWrap>
          </Col>
          <Col lg="3" md="4" sm="6">
            <ServiceWrap>
              <IconWrap
                width="70px"
                height="70px"
              >
                <img
                  src={donut}
                  alt="donut"
                  className="vector__images2"
                />
              </IconWrap>
              <span>Dough nuts</span>
            </ServiceWrap>
          </Col>
          <Col lg="3" md="4" sm="6">
            <ServiceWrap>
              <IconWrap
                width="70px"
                height="70px"
              >
                <img
                  src={perfait}
                  alt="perfait"
                  className="vector__images"
                />
              </IconWrap>
              <span>Perfaits</span>
            </ServiceWrap>
          </Col>
        </Row>
      </section>
      <section className="wws__section">
        <WWS />
      </section>
    </div>
  );
};

export default Home;
