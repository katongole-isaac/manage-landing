import React from "react";
import "./sass/index.scss";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import Reviews from "./components/Reviews";
import Tips from "./components/Tips";
import Footer from "./components/Footer";
import Intro from "./components/Intro";

export default function () {
  return (
    <>
      <header>
        <Navbar />
        <Intro />
      </header>
      <main>
        <Tips />
        <Reviews />
        <Showcase />
      </main>
      <Footer />
    </>
  );
}
