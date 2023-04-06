import React from "react";
import IllustrationImage from "../manage/images/illustration-intro.svg";
export default function Intro() {
  return (
    <div className="intro-wrapper">
      <div className="container intro">
        <div className="illustration">
          <img src={IllustrationImage} alt="illustration-intro.svg" />
        </div>
        <div className="intro-content">
          <h1>Bring everyone together to build better products.</h1>
          <p>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger teams goals in view.
          </p>
          <button> Get Started</button>
        </div>
      </div>
    </div>
  );
}
