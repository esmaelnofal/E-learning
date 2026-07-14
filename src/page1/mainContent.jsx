import React from "react";
import "./mainContent.css";
import people from "../assets/people.png";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import image4 from "../assets/image4.png";

export default function MainContent({ onGetStarted }) {
  return (
    <div className="MainContent">
      <div className="leftMainContent">
        <h1>
          <span className="MainContentSpan1">Empower Your Future with</span>
          <span style={{ color: "#3559e0" }} className="MainContentSpan2">
            Smart Learning
          </span>
        </h1>
        <p>
          Unlock your potential with expert-led courses, interactive AI
          tutoring, and a community of ambitious learners. Your journey to
          mastery starts here.
        </p>
        <div>
          <button onClick={onGetStarted} className="MainContentButton">
            Get Started <i className="fa-solid fa-arrow-right"></i>
          </button>
          <button className="MainContentButton2">
            <i className="fa-regular fa-circle-play"></i> Watch Demo
          </button>
        </div>
        <div
          className="clients"
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <div className="clientImages">
            <img src={client1} alt="client1" className="clientImage" />
            <img
              src={client2}
              alt="client2"
              className="clientImage"
              style={{ marginLeft: "-10px" }}
            />
            <img
              src={client3}
              alt="client3"
              className="clientImage"
              style={{ marginLeft: "-10px" }}
            />
            <img
              src={image4}
              alt="image4"
              className="clientImage"
              style={{ marginLeft: "-15px", height: "50px", width: "50px" }}
            />
          </div>
          <div className="clientText">
            <p>Joined by over 50,000+ students this month.</p>
          </div>
        </div>
      </div>
      <div className="RightMainContent">
        <div className="imageContainer">
          <img src={people} alt="people" className="MainContentImage" />
        </div>
      </div>
    </div>
  );
}
