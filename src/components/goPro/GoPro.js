import React from "react";
// import Carousel from "../findtalent/slider";
import "./gopro.css";
import Navbar from "../navbar/navbar";
import GoCards from "./GoCards";
import VidText from "./VidText";
import Onesignal from "../findtalent/onesignal"
import Subscribe from "./Subscribe";
import BrandGrid from "./BrandGrid";
import HeadVid from "./HeadVid";
import Footer from "../footer/footer";
import SlideMain from "../slidermain/slidermain"
const GoPro = () => {
  return (
    <>
      <Navbar />
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{
          padding: "16vh 0px",
        }}
      >
        <div>
          <div className="text-center">
            <p style={{ color: "red" }}>
              <strong>DESTECHO PRO</strong>
            </p>

            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "65px",
                fontWeight: "600px",
              }}
            >
              Get 3x more portfolio views
              <br /> with DesTecho Pro{" "}
            </h1>
            <p style={{ fontSize: "20px", padding: "15px 263px" }}>
              Drive more eyes to your DesTecho profile to build your brand and
              business
            </p>
            <button className="my-2"
              style={{
                fontSize: "20px",
                backgroundColor: "black",
                borderRadius: "200px",
                color: "white",
                width:"20%",
                padding: "15px 25px",
              }}
            >
              Get started today
            </button>
            <p className="my-3" style={{ color: "rgb(110,109,122)" }}>
              Just $8/mo (billed annualy). Cancel anytime.
            </p>
          </div>
        </div>
      </div>
      <GoCards/>
      <BrandGrid/>
      <VidText/>
      <HeadVid/>
      <Onesignal />
      <Subscribe/>
      <div style={{
        paddingTop:"11rem"
      }}>
        <SlideMain/>
        <Footer/>
      </div>
    </>
  );
};

export default GoPro;
