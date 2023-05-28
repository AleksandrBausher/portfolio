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
        <Route exact path="/" Component={Home} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/portfolio" Component={Portfolio} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
