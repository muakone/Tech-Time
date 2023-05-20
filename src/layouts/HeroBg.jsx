import React from "react";
import { ArrowOutwards, Herobg } from "../assets";
import StudentOverlay from "../component/StudentOverlay";
import Navbar from "./Navbar";

const HeroBg = () => {
  return (
    <div className="hero">
      <Navbar />
      <main className="main-hero">
        <div className="hero-container">
          <div className="hero-text">
            <h2>Grow your skills to advance your career path </h2>
            <p className="hero-about">
              build your future with our quality education. the best and largest
              all-in-one online tutoring platform in the world{" "}
            </p>
            <div className="hero-buttons">
              <button className="hero-getstarted">
                <span>
                  <p>Get Started Now</p>
                  <img src={ArrowOutwards} alt="arrow-outwards" />
                </span>
              </button>
              <button className="hero-enroll">Enroll Now</button>
            </div>
            <div className="hero-previews">
              <StudentOverlay />
              <span className="preview-text">
                <p className="numbers">255k+</p>
                <p>Previews</p>
              </span>
            </div>
          </div>
          <div className="hero-bg">
            <img src={Herobg} alt="Herobg" className="hero-avatar" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroBg;
