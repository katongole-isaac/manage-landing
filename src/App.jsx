import React from "react";
import "./sass/index.scss";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import Services from "./components/Services";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

export default function () {
  return (
    <>
      <Navbar />
      <main>
        <Showcase />
        <Services />
        <Articles />
      </main>
      <Footer />
    </>
  );
}
