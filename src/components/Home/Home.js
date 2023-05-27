import React from "react";
import { Typewriter } from "react-simple-typewriter";
import html from "../images/html.png"
import css from "../images/css.png"
import react from "../images/react.png"
import js from "../images/js.png"
import node from "../images/node.png"
import me from "../images/f_logo.png"

import "./Home.css"

const Home = () => {
  return (
    <>
      <section className="me" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>Welcome User,</h3>
            <h1>
              Hi, I'm <span>Aleksandr Bausher</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={[" Professional Coder.", " Developer."]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
              nulla tempus, fermentum leo eget, lacinia mi. Nam bibendum finibus
              eros, vitae aliquet elit rutrum eu. Nulla laoreet tellus at eros
              tempus semper. Mauris vitae libero a risus feugiat egestas sit
              amet non orci.
            </p>
            <div className="me_btn d_flex">
              <div className="col_1">
                <h4>FIND WITH ME</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  <button className="btn_shadow">
                    <i class="fab fa-instagram"></i>
                  </button>
                  <button className="btn_shadow">
                    <i class="fab fa-linkedin-in"></i>
                  </button>
                </div>
              </div>
              <div className="col_1">
                <h4>BEST SKILL ON</h4>
                <button className="btn_shadow">
                  <img src={html} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={css} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={js} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={react} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={node} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={me} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;