import React from "react";
import Carousel from "./slider";
import "./findtalent.css";
import Navbar from "../navbar/navbar";
import Firstdiv from "./firstdiv/firstdiv";
import Seconddiv from "./seconddiv/seconddiv";
import Brandchoose from "./brandchoose";
import OneSignalComponent from "./onesignal";
import Last from "./last";
import SliderMain from "../slidermain/slidermain";
import Last2 from "./last2";
import Footer from "../footer/footer";
const FindTalent = () => {
  return (
    <>
      <Navbar />
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{
          padding: "21vh 0px",
        }}
      >
        <div>
          <div className="text-center">
            <p style={{ color: "red" }}><strong>DESTECHO HIRING</strong>
            </p>
            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "65px",
                fontWeight: "600px",
              }}
            >
              Hire the world’s top designers
            </h1>
            <p style={{ fontSize: "20px", padding: "15px 263px" }}>
              Whether you prefer to actively seek out candidates using Designer
              Search or let designers come to you through our Job Board,
              DesTecho Hiring makes it easier than ever to source top-notch
              design talent.
            </p>
            <h4
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                paddingTop: "12vh",
              }}
            >
              We’ve helped some of the world’s best design-forward companies
              hire expert creatives
            </h4>
          </div>
        </div>
      </div>
      <div className="slider" style={{ paddingTop: "-26vh" }}>
        <Carousel />
      </div>
      <div style={{ gap: "20px" }}>
        <Firstdiv />
        <Seconddiv />
      </div>

      <OneSignalComponent />
      <div>
        <Brandchoose />
        <Last2 />
      </div>
      <Last />
      <div style={{
        paddingTop:"11rem"
      }}>
        <SliderMain/>
        <Footer/>
      </div>
    </>
  );
};

export default FindTalent;
