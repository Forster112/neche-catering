import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../store/users/usersSlice";

import { useNavigate, Link } from "react-router-dom";

import { Container, Row, Col } from "reactstrap";

import "../../../styles/profile.css";

const MobileProfile = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const loggedUserDetails = useSelector(
    (state) => state.userSlice.loggedInUser
  );

  async function logout(e) {
    e.preventDefault();
    await auth.signOut();
    dispatch(userActions.logoutUser(loggedUserDetails.uid));
    setTimeout(() => {
      navigate("/");
    }, 100);
  }

  return (
    <Container>
      <Row>
        <div className="profile__selectBar profile__selectBar2">
          <Link to="/mobiledetails">
            <div className="profile__items account__details">
              <i className="ri-user-3-line"></i>
              <span>My Account</span>
            </div>
          </Link>
          <div className="profile__separator"></div>
          <Link to="/mobileorders">
            <div className="profile__items">
              <i className="ri-archive-line"></i>
              <span>Orders</span>
            </div>
          </Link>
          <Link to="/mobileinbox">
            <div className="profile__items">
              <i className="ri-mail-line"></i>
              <span>Inbox</span>
            </div>
          </Link>
          <Link to="/mobilenewsletter">
            <div className="profile__items">
              <i className="ri-article-line"></i>
              <span>Newsletter Preferences</span>
            </div>
          </Link>
          <div className="profile__separator mb-3"></div>
          <div className="d-flex justify-content-center">
            <button onClick={(e) => logout(e)}>
              LOGOUT
            </button>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default MobileProfile;
