import React, { useEffect } from "react";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/users/usersSlice";

import "../../styles/profile.css";
import "../../styles/userdetails.css";
import {
  auth,
  query,
  where,
  getDocs,
  collection,
  db,
} from "../../firebase";

const UserDetails = () => {
  const [showPrompt, setShowPrompt] = useState(false);

  const users = useSelector(
    (state) => state.userSlice.loggedInUser
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const queryPhone = async function () {
    try {
      const p = query(
        collection(db, "phoneNumbers"),
        where("uid", "==", users.uid)
      );
      const querySnapshot = await getDocs(p);
      let phoneObj;
      querySnapshot.forEach((doc) => {
        phoneObj = doc.data();
        console.log(doc.data());
      });
      return phoneObj;
    } catch (error) {
      throw error;
    }
  };

  const [phoneNum, setPhoneNum] = useState(null);

  useEffect(() => {
    const fetchPhone = async () => {
      try {
        const phoneN = await queryPhone();
        setPhoneNum(phoneN.phone);
        console.log(phoneN);
        console.log(phoneNum);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPhone();
  }, []);

  async function closeAccount() {
    try {
      const user = auth.currentUser;
      if (user) {
        await user.delete();
      }
    } catch (error) {
      return error.message;
    }
    dispatch(userActions.deleteUser(users.email));
    setTimeout(() => {
      navigate("/home");
    }, 100);
  }

  return (
    <div className="user__details__wrapper">
      <div className="user__details-div mt-4 ms-4">
        <span className="fs-5 fw-bold">
          Account details
        </span>
        <div className="profile__separator"></div>
        <p>
          Name: <span>{users.displayName}</span>
        </p>
        <p>
          Email: <span>{users.email}</span>
        </p>
        <p>
          Phone Number:{" "}
          <span>{phoneNum || "+234xxxxxxxxxx"}</span>
        </p>
        <div className="profile__separator"></div>
        <Link to="/edit_details">
          <div className="profile__settings">
            Edit account details
          </div>
        </Link>
        <Link to="/change_password">
          <div className="profile__settings one red-zone">
            Change password
          </div>
        </Link>
        <div
          className="profile__settings d-flex gap-3 two red-zone"
          onClick={() => setShowPrompt(!showPrompt)}
        >
          Close account
        </div>
      </div>
      <div
        className={
          showPrompt
            ? "confirm__overlay showDiv"
            : "confirm__overlay"
        }
      >
        <div className="confirmPrompt">
          Are you sure?{" "}
          <div className="confirm__separator"></div>
          <p>
            This action will automatically delete your
            account and data permanently and this action
            can't be reversed
          </p>
          <div className="option">
            <span
              onClick={() => {
                closeAccount();
                setShowPrompt(!showPrompt);
              }}
            >
              Yes
            </span>
            <span
              onClick={() => setShowPrompt(!showPrompt)}
            >
              No
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
