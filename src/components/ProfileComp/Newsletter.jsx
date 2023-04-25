import React from "react";
import { useState } from "react";

import "../../styles/newsletter.css";
const Newsletter = () => {
  const [selected, setSelected] = useState("all");

  return (
    <div className="newsletter__wrapper">
      <h6 className="m-3">Subscribe To:</h6>
      <div className="separate"></div>
      <div className="d-flex flex-column gap-3 m-3">
        <div className="d-flex align-items-center gap-3 fs-5">
          <input
            type="radio"
            name="all"
            className="newsletter__radio"
            onChange={() => setSelected("all")}
            checked={selected === "all"}
          />
          <label htmlFor="all">
            All Newsletters
          </label>
        </div>
        <div className="d-flex align-items-center gap-3 fs-5">
          <input
            type="radio"
            name="important"
            className="newsletter__radio"
            onChange={() =>
              setSelected("important")
            }
            checked={selected === "important"}
          />
          <label htmlFor="important">
            Important Newsletters
          </label>
        </div>
        <div className="d-flex align-items-center gap-3 fs-5">
          <input
            type="radio"
            name="no"
            className="newsletter__radio"
            onChange={() => setSelected("no")}
            checked={selected === "no"}
          />
          <label htmlFor="no">
            I don't want any Newsletters
          </label>
        </div>
        <button>Save</button>
      </div>
    </div>
  );
};

export default Newsletter;
