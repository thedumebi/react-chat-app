import React from "react";

import closeIcon from "../Icons/closeIcon.png";
import onlineIcon from "../Icons/onlineIcon.png";

import "./infobar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online-icon" />
      <h3>{room}</h3>
    </div>

    <div className="rightInnerContainer">
      <a href="/">
        <img src={closeIcon} alt="close-icon" />
      </a>
    </div>
  </div>
);

export default InfoBar;
