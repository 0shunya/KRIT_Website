import React from "react";
import "../components/styles/dashboard.css"; // You'll need to create this CSS file
import { Card1 } from "./card1";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome to Our Platform</h1>
        <p>Empowering your digital journey with cutting-edge solutions</p>
      </header>

      <section className="dashboard-info">
        <div className="info-card">
          <h2>Our Mission</h2>
          <p>
            To provide innovative and user-friendly digital solutions that
            transform businesses and enhance user experiences.
          </p>
        </div>
        <div className="info-card">
          <h2>Key Features</h2>
          <ul>
            <li>Intuitive User Interface</li>
            <li>Advanced Analytics</li>
            <li>Secure Data Management</li>
            <li>24/7 Customer Support</li>
          </ul>
        </div>
        <div className="info-card">
          <h2>Get Started</h2>
          <p>Ready to begin? Click the button below to explore our services!</p>
          <button className="cta-button">Explore Now</button>
        </div>
      </section>

      <header className="card-header">
        <h1>Our Services</h1>
      </header>
      <section className="card-section">
        <div className="card-container">
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
        </div>
        <div className="card-container-2">
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
        </div>
        {/* <div className="card-container-3">
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
        </div> */}
      </section>
    </div>
  );
};
