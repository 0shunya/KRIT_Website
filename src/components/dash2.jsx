import React from "react";
import ill1 from "../image/software tester-amico.png";
import "./styles/Dash2.css";

export const Dash2 = () => {
  return (
    <div className="dashboard2">
      <img src={ill1} alt="software tester" className="illu1" />
      <div className="Dash2content">
        <h1>Welcome to Our Platform</h1>
        <p>Empowering your digital journey with cutting-edge solutions</p>

        <section class="intro-content">
          <h2>Why Choose Us?</h2>
          <p>
            We’re dedicated to providing innovative, user-focused solutions that
            transform your goals into success stories. From comprehensive tools
            to expert insights, our platform is designed to elevate every step
            of your digital experience.
          </p>
        </section>
      </div>
    </div>
  );
};
