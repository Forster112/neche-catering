import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/users/usersSlice";

import { Container, Row, Col } from "reactstrap";

import ProfileHelmet from "../../components/ProfileComp/ProfileHelmet";
import fakeOrders from "../../assets/fakeData/fake_order";
import Orders from "../../components/ProfileComp/Orders";
import UserDetails from "../../components/ProfileComp/UserDetails";
import Newsletter from "../../components/ProfileComp/Newsletter";
import Inbox from "../../components/ProfileComp/Inbox";

import "../../styles/profile.css";

const DeskTopProfile = () => {
  const [activeUserDetail, setActiveUserDetail] =
    useState("account");

  const dispatch = useDispatch();

  const loggedUserDetails = useSelector(
    (state) => state.userSlice.loggedInUser
  );

  const purchasedItems = useSelector(
    (state) => state.cart.purchasedItems
  );

  const usersOrders = purchasedItems.filter(item => item?.user === loggedUserDetails?.email);
  console.log(usersOrders);

  const navigate = useNavigate();

  function logout(e) {
    e.preventDefault();
    dispatch(
      userActions.logoutUser(loggedUserDetails.email)
    );
    setTimeout(() => {
      navigate("/home");
    }, 100);
  }

  return (
    <Container className="mb-4 mt-3">
      <Row>
        <Col lg="4" md="4" sm="12" xs="12">
          <div className="profile__selectBar">
            <div
              className={
                activeUserDetail === "account"
                  ? "active__detail profile__items account__details special__active"
                  : "profile__items account__details"
              }
              onClick={() => setActiveUserDetail("account")}
            >
              <i className="ri-user-3-line"></i>
              <span>My Account</span>
            </div>
            <div className="profile__separator"></div>
            <div
              className={
                activeUserDetail === "order"
                  ? "profile__items active__detail"
                  : "profile__items"
              }
              onClick={() => setActiveUserDetail("order")}
            >
              <i className="ri-archive-line"></i>
              <span>Orders</span>
            </div>
            <div
              className={
                activeUserDetail === "inbox"
                  ? "profile__items active__detail"
                  : "profile__items"
              }
              onClick={() => setActiveUserDetail("inbox")}
            >
              <i className="ri-mail-line"></i>
              <span>Inbox</span>
            </div>
            <div
              className={
                activeUserDetail === "newsletter"
                  ? "profile__items active__detail"
                  : "profile__items"
              }
              onClick={() =>
                setActiveUserDetail("newsletter")
              }
            >
              <i className="ri-article-line"></i>
              <span>Newsletter Preferences</span>
            </div>
            <div className="profile__separator mb-3"></div>
            <div className="d-flex justify-content-center">
              <button onClick={(e) => logout(e)}>
                LOGOUT
              </button>
            </div>
          </div>
        </Col>
        <Col lg="8" md="8" sm="12" xs="12">
          {(() => {
            if (activeUserDetail === "account") {
              return (
                <ProfileHelmet title="Account Overview">
                  <UserDetails />
                </ProfileHelmet>
              );
            }
            if (activeUserDetail === "order") {
              return (
                <ProfileHelmet title="Orders">
                  <div className="orders__wrapper">
                    {usersOrders.map((item, i) => (
                      <Orders
                        name={item.desert[0].title}
                        quantity={item.desert[0].quantity}
                        price={item.totalAmount}
                        status={item.status}
                        date={item.date}
                        key={i}
                        fullOrders={item}
                      />
                    ))}
                  </div>
                </ProfileHelmet>
              );
            }
            if (activeUserDetail === "newsletter") {
              return (
                <ProfileHelmet title="Newsletter Preferences">
                  <Newsletter />
                </ProfileHelmet>
              );
            }
            if (activeUserDetail === "inbox") {
              return (
                <ProfileHelmet title="Inbox Messages">
                  <div className="inbox__wrapper">
                    <Inbox />
                  </div>
                </ProfileHelmet>
              );
            }
          })()}
        </Col>
      </Row>
    </Container>
  );
};

export default DeskTopProfile;
