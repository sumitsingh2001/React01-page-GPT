import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";

import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [
    toggleMenu /* ON CURRENT POSITION, FALSE CONDITION */,
    setToggleMenu /* WHEN VALUE IS TRUE THEN IT'LL HAPPEN */,
  ] = useState(false);

  return (
    <>
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="gpt3__navbar-links_container">
            <p>
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#wgpt3">what is gpt?</a>
            </p>
            <p>
              <a href="#possibility">open AI</a>
            </p>
            <p>
              <a href="#features">case stdies</a>
            </p>
            <p>
              <a href="#blog">libraries</a>
            </p>
          </div>
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign In</p>
          <button type="button">Sign up</button>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            //todo: In Ternary Operator the value inside here is True in first after Passing condition
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
              //todo:- ON Click on close icon the value should be false that's why You are using here `setToggleMenu(false)` .. Since the value ini first condition is true It means whenever You cliick on close menuuu icon it should be false in useState condition..
            />
          ) : (
            //! After Semicolon the value we write here will go straight in falsy mode..
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
              //todo:- Now here after first condition if value is not true simply it'll show you false. ON CLICK on open Menu button now vale should go in TRue mode and hence the setToggleMenu(ture)..
            />
          )}
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <p>
                  <a href="#home">Home</a>
                </p>
                <p>
                  <a href="#wgpt3">what is gpt?</a>
                </p>
                <p>
                  <a href="#possibility">open AI</a>
                </p>
                <p>
                  <a href="#features">case stdies</a>
                </p>
                <p>
                  <a href="#blog">libraries</a>
                </p>
              </div>
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
