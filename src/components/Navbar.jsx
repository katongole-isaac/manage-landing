import React, { useEffect, useRef, useState } from "react";
import EasyBankLogo from "../easybank/images/logo.svg";
import HamburgerIcon from "../easybank/images/icon-hamburger.svg";
import CloseIcon from "../easybank/images/icon-close.svg";

export default function Navbar() {
  const [showBtn, setshowBtn] = useState(false);

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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>

          <button className="btn">Request Invite</button>
          <div className="actions">
            <label htmlFor="chck" onClick={() => setshowBtn((prev) => !prev)}>
              {!showBtn ? (
                <img src={HamburgerIcon} alt="hamburger.svg" />
              ) : (
                <img src={CloseIcon} alt="hamburger.svg" id="open" />
              )}
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}
