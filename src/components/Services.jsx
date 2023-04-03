import React from "react";
import services from "../utils/services";

export default function Services() {
  return (
    <div className="services">
      <div className="container">
        <div className="easy-info">
          <h1>Why choose Easybank ?</h1>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. <br />
            Control your finances like never before.
          </p>
        </div>

        <div className="single-service-wrapper">
          {services.map((service) => (
            <SingleServices {...service} key={service.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}

const SingleServices = ({ src, alt, title, content }) => (
  <>
    <div className="single-service">
      <div className="icon-wrapper">
        <img src={src} alt={alt} />
      </div>
      <h2>{title} </h2>
      <div className="content">
        <p> {content} </p>
      </div>
    </div>
  </>
);
