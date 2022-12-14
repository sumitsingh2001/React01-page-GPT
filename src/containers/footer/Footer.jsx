import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <>
      <div className="gpt3__footer section__padding">
        <div className="gpt3__footer-heading">
          <h1 className="gradient__text">
            Do you want to step in to future before others
          </h1>
        </div>
        <div className="gpt3__footer-btn">
          <p>Request early access</p>
        </div>
        <div className="gpt3__footer-links">
          <div className="gpt3__footer-links_logo">
            <img src={gpt3Logo} alt="" />
            <p>
              Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
            </p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="gpt3__footer-links_copyright">
          <p>@2021 GPT-3. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
