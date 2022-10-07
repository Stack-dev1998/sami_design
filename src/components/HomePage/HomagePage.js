import React, { useState } from "react";
import NavbarMenu from "../common/NavbarMenu";
import ItemsCarousel from "react-items-carousel";

//images
import heroImg from "../../assets/images/Hero Illustration.png";
import hero_bottom from "../../assets/images/hero_bottom.svg";
import Tech_Eye_Illus from "../../assets/images/Tech Eye Illus.svg";
import Rectangle_158 from "../../assets/images/Rectangle 158.svg";
import Star_2 from "../../assets/images/Star 2.svg";
import Group_4848 from "../../assets/images/Group 4848.svg";
import normal_line from "../../assets/images/normal_line.svg";
import active_line from "../../assets/images/active_line.svg";
import html from "../../assets/images/html.svg";
import html2 from "../../assets/images/html_2.svg";
import react_icon from "../../assets/images/react.svg";
import vue from "../../assets/images/vue.svg";
import bootstrap_icon from "../../assets/images/bootstrap.svg";
import left_arow from "../../assets/images/left_arrow.svg";
import right_arrow from "../../assets/images/right_arrow.svg";
import left_blue_arow from "../../assets/images/left_blue_arrow.svg";
import right_blue_arrow from "../../assets/images/right_blue_arrow.svg";
import EDUCATION from "../../assets/images/EDUCATION.svg";
import HEALTHCARE from "../../assets/images/HEALTHCARE.svg";
import RETAIL from "../../assets/images/RETAIL.svg";

import AGRICULTURE from "../../assets/images/AGRICULTURE.svg";
import BUSINESS from "../../assets/images/BUSINESS.svg";

const HomagePage = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [activeItemIndex2, setActiveItemIndex2] = useState(0);
  const chevronWidth = 40;
  return (
    <div>
      <NavbarMenu />
      <div className="hero_section text-white">
        <div className="container">
          <img
            src={heroImg}
            className="position-absolute end-0 me-5 h-75 mt-3 img-fluid"
          />
          <p className="pt-4 fs-2">
            Transform thoughts into progressive ventures
            <br />& services with
          </p>
          <h2 className="pt-4 fs-1">
            Interaction Design, Technology,
            <br />
            Innovation & Support
          </h2>
        </div>
        <div
          className="position-absolute bottom-0 w-100"
          style={{ marginBottom: "-13%" }}
        >
          <img
            src={hero_bottom}
            className="position-absolute bottom-0 w-100 img-fluid"
            // style={{ marginBottom: "-13%" }}
          />
          <div
            className="position-absolute bottom-0 w-100"
            style={{ marginBottom: "-5%" }}
          >
            <div className="container ">
              <div className="row">
                <div className="col-sm-6">
                  <img src={Tech_Eye_Illus} className="img-fluid" />
                </div>
                <div className="col-sm-6 d-flex align-items-center">
                  <div>
                    <p className="fs-2"> Let us help you see the world with</p>
                    <br />
                    <p className="fs-1 fw-semibold text_yellow">Tech Eyes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our_process py-5">
        <div className="container py-5">
          <p className="fs-1 text_orange">Our process at Infini8AI</p>
          <p className="fs-2 my-5 lh-base">
            Our 'itterative' approch helps expand development. From
            understanding your clients and business difficulties to building up
            your product and taking it to showcase in the briefest conceivable
            time, we customize how we work to accommodate your venture needs.
          </p>
          <button className="blue_btn  ">View details</button>
        </div>
      </div>

      <div className="cards_detail d-flex align-items-center">
        <div className="container   ">
          <div className="row gx-5 h-100 ">
            <div className="col-xs-12 col-sm-6 col-lg-3 mt-3 mt-lg-0 ">
              <div className="bg-white rounded p-3 px-4 h-100 d-flex flex-column justify-content-between">
                <p className="text_gray fs-4">Quick Launch</p>
                <p className="text_gray mt-5">
                  You can relay on our amazing features list and also our
                  customer services will be a great experience.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3 mt-3 mt-lg-0 ">
              <div className="bg-white rounded p-3 px-4 h-100 d-flex flex-column justify-content-between">
                <p className="text_gray fs-4">MVP within a month</p>
                <p className="text_gray mt-5">
                  You can relay on our amazing features list and also our
                  customer services will be a great experience.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3 mt-3 mt-lg-0  ">
              <div className="bg-white rounded p-3 px-4 h-100 d-flex flex-column justify-content-between">
                <p className="text_gray fs-4">Prototypes</p>
                <p className="text_gray mt-5">
                  You can relay on our amazing features list and also our
                  customer services will be a great experience.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3 mt-3 mt-lg-0 ">
              <div className="bg-white rounded p-3 px-4 h-100 d-flex flex-column justify-content-between">
                <p className="text_gray fs-4">Support</p>
                <p className="text_gray mt-5">
                  You can relay on our amazing features list and also our
                  customer services will be a great experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container service_we_offer d-flex align-items-end py-5">
        <p className="text_yellow fs-2  fw-bolder position-relative">
          Sevices we offer{" "}
          <span className="position-absolute mt-2" style={{ zIndex: "-2" }}>
            <img
              src={Rectangle_158}
              style={{ width: "20px", marginLeft: "-10px" }}
            />
          </span>
        </p>
      </div>

      <div className="development ">
        <div className="rectangle"> </div>
        <div className="container">
          <div className="row gx-5">
            <div className="col-5 px-2">
              <div className="d-flex my-3">
                <span>
                  <img src={Star_2} />
                </span>
                <p className="fs-6 fw-semibold text_blue ms-2">
                  Web Developement
                </p>
              </div>
              <p className="fs-6">
                We offer a variety of front end, back end, and progressive web
                development services, from creating mobile web development
                solutions and responsive web designs, to building custom web
                experiences using cutting-edge web technologies.
              </p>
              <div style={{ width: "93%" }} className="mt-5">
                <ItemsCarousel
                  requestToChangeActive={setActiveItemIndex}
                  activeItemIndex={activeItemIndex}
                  numberOfCards={6}
                  gutter={20}
                  leftChevron={<img src={left_arow} />}
                  rightChevron={<img src={right_arrow} />}
                  outsideChevron
                  chevronWidth={chevronWidth}
                >
                  <img src={html} style={{ width: "100px", height: "100px" }} />
                  <img
                    src={html2}
                    style={{ width: "100px", height: "100px" }}
                  />
                  <img
                    src={react_icon}
                    style={{ width: "100px", height: "100px" }}
                  />
                  <img src={vue} style={{ width: "100px", height: "100px" }} />
                  <img
                    src={bootstrap_icon}
                    style={{ width: "100px", height: "100px" }}
                  />
                  <img src={vue} style={{ width: "100px", height: "100px" }} />
                  <img
                    src={bootstrap_icon}
                    style={{ width: "100px", height: "100px" }}
                  />
                  <img
                    src={react_icon}
                    style={{ width: "100px", height: "100px" }}
                  />
                  <img
                    src={html2}
                    style={{ width: "100px", height: "100px" }}
                  />
                </ItemsCarousel>
              </div>
            </div>
            <div className="col-7 px-2">
              <div className="row">
                <div className="col-sm-4 d-flex flex-column justify-content-between ">
                  <img src={Group_4848} className="img-fluid  my-auto" />
                </div>
                <div className="col-sm-8 d-flex flex-column justify-content-between h-100 py-5">
                  <div className="d-flex align-items-center">
                    <input type="radio" className="h-100" name="a" />
                    <img src={active_line} />
                    <p className="ms-3">Web Developement</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <input type="radio" className="h-100" name="a" />
                    <img src={normal_line} />
                    <p className="ms-3">Mobile Developement</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <input type="radio" className="h-100 mt-1" name="a" />
                    <img src={normal_line} />
                    <p className="ms-3">Desktop Applications</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <input type="radio" className="h-100 mt-1" name="a" />
                    <img src={normal_line} />
                    <p className="ms-3">Cloud Native</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="products">
        <div className="container py-5">
          <p className="text_dark_blue fs-2  fw-bolder position-relative mt-5">
            Products & Indrustries we serve
            <span className="position-absolute mt-3 blue_icon"></span>
          </p>
          <br />
          <div style={{ width: "93%" }} className="mt-5 mx-auto">
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex2}
              activeItemIndex={activeItemIndex2}
              numberOfCards={5}
              gutter={20}
              leftChevron={
                <img src={left_blue_arow} className="img-fluid" />
              }
              rightChevron={
                <img src={right_blue_arrow} className="img-fluid" />
              }
              outsideChevron
              chevronWidth={chevronWidth}
            >
              <div className="text-center">
                <img
                  src={EDUCATION}
                  className="img-fluid"
                  style={{ width: "200px", height: "200px" }}
                />
                <p style={{ marginTop: "-20px" }}>EDUCATION</p>
              </div>
              <div className="text-center">
                <img
                  src={HEALTHCARE}
                  className="img-fluid"
                  style={{ width: "200px", height: "200px" }}
                />
                <p style={{ marginTop: "-20px" }}>HEALTHCARE</p>
              </div>
              <div className="text-center">
                <img
                  src={BUSINESS}
                  className="img-fluid"
                  style={{ width: "200px", height: "200px" }}
                />
                <p style={{ marginTop: "-20px" }}>BUSINESS</p>
              </div>
              <div className="text-center">
                <img
                  src={AGRICULTURE}
                  className="img-fluid"
                  style={{ width: "200px", height: "200px" }}
                />
                <p style={{ marginTop: "-20px" }}>AGRICULTURE</p>
              </div>
              <div className="text-center">
                <img
                  src={RETAIL}
                  className="img-fluid"
                  style={{ width: "200px", height: "200px" }}
                />
                <p style={{ marginTop: "-20px" }}>RETAIL</p>
              </div>
              <div className="text-center">
                <img
                  src={HEALTHCARE}
                  className="img-fluid"
                  style={{ width: "200px", height: "200px" }}
                />
                <p style={{ marginTop: "-20px" }}>HEALTHCARE</p>
              </div>
              <div className="text-center">
                <img
                  src={AGRICULTURE}
                  className="img-fluid"
                  style={{ width: "200px", height: "200px" }}
                />
                <p style={{ marginTop: "-20px" }}>AGRICULTURE</p>
              </div>
              <div className="text-center">
                <img
                  src={RETAIL}
                  className="img-fluid"
                  style={{ width: "200px", height: "200px" }}
                />
                <p style={{ marginTop: "-20px" }}>RETAIL</p>
              </div>
            </ItemsCarousel>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default HomagePage;
