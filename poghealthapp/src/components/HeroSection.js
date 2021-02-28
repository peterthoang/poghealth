import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import video from "../videos/exercisevid.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video source src={video} autoPlay loop />
      <h1>Welcome To POGHealth!</h1>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
