import React from "react";
import ill2 from "../image/software tester-cuate.png";
import "./styles/Dash3.css";

export const Dash3 = () => {
  return (
    <div className="dashboard3">
      <div className="Dash3content">
        <section class="intro-content">
          <h3>Our Core Features</h3>
          <ul>
            <li>
              <strong>Seamless Integration:</strong> Easily connect with other
              essential tools and platforms to streamline your workflow.
            </li>
            <li>
              <strong>Data-Driven Insights:</strong> Leverage real-time
              analytics to make informed decisions and stay ahead in the game.
            </li>
            <li>
              <strong>24/7 Support:</strong> Our dedicated team is here around
              the clock to provide you with assistance and guidance.
            </li>
          </ul>
        </section>
      </div>
      <img src={ill2} alt="other image 2" className="illu2" />
    </div>
  );
};
