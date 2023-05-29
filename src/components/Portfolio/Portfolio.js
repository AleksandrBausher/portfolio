import React from "react";
import "./Portfolio.css";
import Card from "./Card";
import theFilmReel from "../images/theFilmReel.png";
import mordernWeatherDashboard from "../images/mordernWeatherDashboard.png";
import jate from "../images/jate.png";
import rentMyStuff from "../images/rentMyStuff.png";
import workDaySchedule from "../images/workDaySchedule.png";
import personalNoteTaker from "../images/personalNoteTaker.png";


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
              image={theFilmReel}
              category="Personal Project"
              totalLike="100"
              title="The Film Reel"
            />
            <Card
              image={rentMyStuff}
              category="Personal Project"
              totalLike="100"
              title="Rent My Stuff"
            />
            <Card
              image={jate}
              category="Personal Project"
              totalLike="100"
              title="JATE"
            />
            <Card
              image={workDaySchedule}
              category="Personal Project"
              totalLike="100"
              title="Work Day Schedule"
            />
            <Card
              image={mordernWeatherDashboard}
              category="Personal Project"
              totalLike="100"
              title="Modern Weather Dashboard"
            />
            <Card
              image={personalNoteTaker}
              category="Personal Project"
              totalLike="100"
              title="Personal Note Taker"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
