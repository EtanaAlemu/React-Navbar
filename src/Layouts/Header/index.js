import React from "react";
import profilePic from "../../Assets/Images/profile.png";
const Head = (props) => {
  return (
    <div className="head">
      <div className="col-div-6">
        <span
          style={{ fontSize: "30px", cursor: "pointer", color: "white" }}
          className="nav"
        >
          ☰ {props.name}
        </span>
        <span
          style={{ fontSize: "30px", cursor: "pointer", color: "white" }}
          className="nav2"
        >
          ☰ {props.name}
        </span>
      </div>
      <div className="col-div-6">
        <div className="profile">
          <img src={profilePic} alt="Profile Pic" className="pro-img" />
          <p>
            Manoj Adhikari <span>UI / UX DESIGNER</span>
          </p>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  );
};

export default Head;
