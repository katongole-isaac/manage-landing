import React, { useState } from "react";
import EasyBankLogo from "../manage/images/logo.svg";
import HamburgerIcon from "../manage/images/icon-hamburger.svg";
import CloseIcon from "../manage/images/icon-close.svg";

export default function Navbar() {
  const [showBtn, setshowBtn] = useState(false);

  // showing & hiding the navbar on scroll.

  return (
    <>
      <nav className="nav">
        <div className="container nav-bar ">
          <div className="brand">
            <a href="#">
              <img src={EasyBankLogo} alt="easybank-logo" />
            </a>
          </div>

          <input type="checkbox" name="navigation" id="chck" hidden />
          <ul className="nav-links">
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">AboutUs</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>

          <div className="actions">
            <label htmlFor="chck" onClick={() => setshowBtn((prev) => !prev)}>
              {!showBtn ? (
                <img src={HamburgerIcon} alt="hamburger.svg" />
              ) : (
                <img src={CloseIcon} alt="hamburger.svg" id="open" />
              )}
            </label>
          </div>
          <button className="btn">Get Started</button>
        </div>
      </nav>
    </>
  );
}
