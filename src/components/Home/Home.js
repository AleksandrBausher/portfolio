import React from "react";
import { Typewriter } from "react-simple-typewriter";

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
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;