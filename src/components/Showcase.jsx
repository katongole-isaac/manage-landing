import React from "react";
import BgPhoneImage from "../easybank/images/image-mockups.png";

export default function Showcase() {
  return (
    <div className="show-case-wrapper">
      <div className="container show-case">
        <div className="left-panel">
          <h1>
            Next generation <br />
            digital banking
          </h1>
          <p>
            Take your financial life online. Your Easybank account <br /> will
            be a one-stop-shop for spending, saving, <br /> budgeting,
            investing, and much more.
          </p>

          <button>Request Invite</button>
        </div>
        <div className="right-panel">
          <img
            src={BgPhoneImage}
            alt="phone-mockups-display"
            className="img-phone"
          />
        </div>
      </div>
    </div>
  );
}
