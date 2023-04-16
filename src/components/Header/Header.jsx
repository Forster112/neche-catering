import React from "react";
import { useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import "../../styles/header.css";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const headerRef = useRef(null);

  const nav_links = [
    {
      display: "Home",
      path: "/home",
    },
    {
      display: "Foods",
      path: "/foods",
    },
    {
      display: "Services",
      path: "/services",
    },
    {
      display: "Contact",
      path: "/contact",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current?.classList?.add("header__fix")
      } else {
        headerRef.current?.classList?.remove("header__fix")
      }
    })
    return () => {
      window.removeEventListener("scroll", null)
    };
  }, []);

  return (
    <header ref={headerRef} className="header">
      <div className="nav d-flex align-items-center justify-content-between">
        <div className="logo d-flex align-items-center gap-4">
          <Link to="/home">
            <img src={logo} alt="logo" />
          </Link>
          <h5>neche catering</h5>
        </div>
        <div className="navigate">
          <div className="left__navbar d-flex align-items-center gap-5">
            {nav_links.map((item, i) => (
              <NavLink
                to={item.path}
                key={i}
                className={(navClass) =>
                  navClass.isActive
                    ? "active__nav"
                    : ""
                }
              >
                {item.display}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="right__navbar d-flex gap-5">
          <span className="cart">
            <i className="ri-shopping-basket-fill"></i>
            <span>0</span>
          </span>
          <span className="user">
            <Link to="/login">
              <i className="ri-user-fill"></i>
            </Link>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
