import React from "react";
import "./Portfolio.css";
import Card from "./Card";
import theFilmReel from "../images/theFilmReel.png";
import mordernWeatherDashboard from "../images/mordernWeatherDashboard.png";
import tot from "../images/tot.png";
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
              github="https://github.com/AleksandrBausher/theFilmReel"
              link="https://aleksandrbausher.github.io/theFilmReel/"
            />
            <Card
              image={rentMyStuff}
              category="Personal Project"
              totalLike="100"
              title="Rent My Stuff"
              github="https://github.com/proj2team5/rent_my_stuff"
              link="https://guarded-reaches-91931.herokuapp.com/"
            />
            <Card
              image={tot}
              category="Personal Project"
              totalLike="100"
              title="Tots2Treasures"
              github="https://github.com/ThriftKids/Tots2Treasures"
              link="https://tots-2treasures.herokuapp.com/"
            />
            <Card
              image={workDaySchedule}
              category="Personal Project"
              totalLike="100"
              title="Work Day Schedule"
              github="https://github.com/AleksandrBausher/Work-Day-Schedule"
              link="https://aleksandrbausher.github.io/Work-Day-Schedule/"

            />
            <Card
              image={mordernWeatherDashboard}
              category="Personal Project"
              totalLike="100"
              title="Modern Weather Dashboard"
              github="https://github.com/AleksandrBausher/Mordern-Weather-Dashboard"
              link="https://aleksandrbausher.github.io/Mordern-Weather-Dashboard/"
            />
            <Card
              image={personalNoteTaker}
              category="Personal Project"
              totalLike="100"
              title="Personal Note Taker"
              github="https://github.com/AleksandrBausher/personalNoteTaker"
              link="https://aleksandrbausher.github.io/personalNoteTaker"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
