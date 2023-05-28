import React from "react";
import "./Portfolio.css";
import Card from "./Card";

const Portfolio = () => {
  return (
    <>
      <section className="Portfolio top" id="portfolio">
        <div className="container">
          <div className="heading text-center ">
            <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
            <h1>My Portfolio</h1>
          </div>
          <div className="content grid">
            <Card
              image="./image/html.png"
              category="Project"
              totalLike="200"
              title="The Weather Dashboard"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
