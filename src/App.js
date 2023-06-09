import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./App.css";
import Contact from "./components/Contact/Contact";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/portfolio" Component={Home} />
        <Route exact path="/portfolio/contact" Component={Contact} />
        <Route exact path="/portfolio/project" Component={Portfolio} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
