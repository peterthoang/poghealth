import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import vid from "../videos/video.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video source src={vid} autoPlay loop muted />
      <h1>Welcome to POGHealth!</h1>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Click Here to Get Started
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
