import React from "react";
import Header from "../../components/Header/Header";
import About from "../../components/Home/About/About";

import MobileApp from "../../components/Home/MobileApp/MobileApp";

import Reservation from "../../components/Home/Reservation/Reservation";
import Slider from "../../components/Home/Slider/Slider";
import Footer from "../../components/Footer/Footer";

import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />      
      <About />     
      <Reservation />
      <MobileApp />
      <Footer />
    </div>
  );
};

export default Home;
