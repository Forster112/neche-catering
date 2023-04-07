import React from "react";
import { Col, Row } from "reactstrap";

import "../styles/home.css";
import baking from "../assets/images/baking.png";
import { Button } from "../components/StyledComponents/Button";

const Home = () => {
  return (
    <div>
      <section className="home__intro">
        <Row>
          <Col md="6" lg="6">
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
              <div className="intro__btns d-flex gap-4">
                <Button>View gallery</Button>
                <Button $primary>
                  Order now{" "}
                  <i class="ri-arrow-right-s-line"></i>
                </Button>
              </div>
            </div>
          </Col>
          <Col md="6" lg="6">
            <div className="img__col">
              <img
                src={baking}
                alt="chef image"
              />
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Home;
