import React from "react";
import "../components/styles/midpart.css";
import { RiComputerFill } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";
import { RiBrainFill } from "react-icons/ri";

export const Midpart = () => {
  return (
    <section className="proof-section">
      <div className="proof-container">
        <h2 className="proof-title">Why Choose Us?</h2>
        <div className="proof-items">
          <div className="proof-item">
            <div className="proof-icon">
              <RiComputerFill />
            </div>
            <h3>Best Courses</h3>
            <p>Curated curriculum designed by industry experts</p>
          </div>
          <div className="proof-item">
            <div className="proof-icon">
              <FaChalkboardTeacher />
            </div>
            <h3>Experienced Trainers</h3>
            <p>Learn from professionals with years of practical experience</p>
          </div>
          <div className="proof-item">
            <div className="proof-icon">
              <FaCertificate />
            </div>
            <h3>Certified Programs</h3>
            <p>Gain industry-recognized certifications</p>
          </div>
          <div className="proof-item">
            <div className="proof-icon">
              <RiBrainFill />
            </div>
            <h3>Knowledge Grooming</h3>
            <p>Comprehensive approach to skill development</p>
          </div>
          <div className="proof-item">
            <div className="proof-icon">
              <RiBrainFill />
            </div>
            <h3>Knowledge Grooming</h3>
            <p>Comprehensive approach to skill development</p>
          </div>
          <div className="proof-item">
            <div className="proof-icon">
              <RiBrainFill />
            </div>
            <h3>Knowledge Grooming</h3>
            <p>Comprehensive approach to skill development</p>
          </div>
        </div>
      </div>
    </section>
  );
};
