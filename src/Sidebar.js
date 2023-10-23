import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faCalculator,
  faImage,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [selected, setSelected] = useState("");
  const handleItemClick = (item) => {
    setSelected(item);
  };
  const iconStyle = { color: "#cccec5", fontSize: "25px" };

  return (
    <>
      <div className="col-md-1">
        <div className="sidebar">
          <div className="sb-els">
            <div
              className={selected == "calculator" ? "sb-el selected" : "sb-el"}
              rel="tooltip"
              title="Calculator"
              onClick={() => handleItemClick("calculator")}
            >
              <Link to="/calculator">
                {" "}
                <FontAwesomeIcon
                  icon={faCalculator}
                  style={{ color: "#cccec5", fontSize: "25px" }}
                />
              </Link>
            </div>
            <div
              className={selected == "dashboard" ? "sb-el selected" : "sb-el"}
              rel="tooltip"
              title="Dashboard"
              onClick={() => handleItemClick("dashboard")}
            >
              <Link to="/dashboard">
                {" "}
                <FontAwesomeIcon
                  icon={faGauge}
                  style={{ color: "#cccec5", fontSize: "25px" }}
                />
              </Link>
            </div>
            <div
              className={selected == "nfts" ? "sb-el selected" : "sb-el"}
              rel="tooltip"
              title="Nfts"
              onClick={() => handleItemClick("nfts")}
            >
              <Link to="/nfts">
                {" "}
                <FontAwesomeIcon icon={faImage} style={iconStyle} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
