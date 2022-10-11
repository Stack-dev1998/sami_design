import React, { useState } from "react";
import NavbarMenu from "../common/NavbarMenu";
import ItemsCarousel from "react-items-carousel";
import ServiceWeOffer from "./serviceWeOffer";
//images
import heroImg from "../../assets/images/Hero Illustration.png";
import hero_bottom from "../../assets/images/HomePage/Rectangle 151.png";
import Tech_Eye_Illus from "../../assets/images/Tech Eye Illus.svg";

import left_blue_arow from "../../assets/images/left_blue_arrow.svg";
import right_blue_arrow from "../../assets/images/right_blue_arrow.svg";
import EDUCATION from "../../assets/images/EDUCATION.svg";
import HEALTHCARE from "../../assets/images/HEALTHCARE.svg";
import RETAIL from "../../assets/images/RETAIL.svg";

import AGRICULTURE from "../../assets/images/AGRICULTURE.svg";
import BUSINESS from "../../assets/images/BUSINESS.svg";

import IPAD from "../../assets/images/HomePage/Optimus IPAD.png";
import optimus_health from "../../assets/images/HomePage/optimus health (white) 1.png";
import Optimus_PHONE from "../../assets/images/HomePage/Optimus PHONE.png";

import Q_APP_Logo from "../../assets/images/HomePage/qurbani_app_logo.svg";
import Q_APP_Tablet from "../../assets/images/HomePage/qurbani_app_ipad.png";
import Q_APP_PHONE from "../../assets/images/HomePage/qurbani_app.png";

import Naseem_Logo from "../../assets/images/HomePage/naseemlogo.svg";
import Naseem_Tablet from "../../assets/images/HomePage/Naseem IPAD.png";
import Naseem_PHONE from "../../assets/images/HomePage/Naseem PHONE.png";

import Stock_Logo from "../../assets/images/HomePage/StockChain_logo.svg";
import Stock_Tablet from "../../assets/images/HomePage/Stockchain IPAD.png";
import Stock_PHONE from "../../assets/images/HomePage/Stockchain PHONE.png";

import rocket from "../../assets/images/HomePage/rocket.png";
import calendar from "../../assets/images/HomePage/orange calendar.png";
import headphones from "../../assets/images/HomePage/pink headphones.png";
import support_female from "../../assets/images/HomePage/support female.png";
import Footer from "../common/Footer";

const HomagePage = () => {
  const [activeItemIndex2, setActiveItemIndex2] = useState(0);
  const chevronWidth = 40;
  return (
    <div>
      <NavbarMenu />
      <div className="position-relative hero_section_parent">
        <div className="hero_section text-white w-100">
          <div className="container position-relative">
            <img
              src={heroImg}
              className="position-absolute end-0 me-5 img-fluid hero_img"
              style={{ height: "600px", zIndex: "0" }}
            />
            <div className="position-absolute">
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
          </div>
        </div>

        <img
          src={hero_bottom}
          className="position-absolute bottom-0 w-100 bottom_layer"
        />
        <div className="position-absolute bottom-0 w-100 hero_bottom">
          <div className="container ">
            <div className="row">
              <div
                className="col-12 col-md-6 d-flex justify-content-center"
                style={{ height: "350px" }}
              >
                <img
                  src={Tech_Eye_Illus}
                  
                  className='img-fluid'
                />
              </div>
              <div className="col-12 col-md-6 d-block d-md-flex  align-items-center text-white ">
                <div>
                  <p className="fs-2 "> Let us help you see the world with</p>
                  <br />
                  <p className="fs-1 fw-semibold text_yellow">Tech Eyes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our_process">
        <div className="container py-5 ">
          <p className="fs-1 text_orange text-center mt-5 fw-semibold">
            Our process at Infini8AI
          </p>
          <p className="fs-2 my-5 lh-base text-justify">
            Our 'itterative' approch helps expand development. From
            understanding your clients and business difficulties to building up
            your product and taking it to showcase in the briefest conceivable
            time, we customize how we work to accommodate your venture needs.
          </p>
          <button className="btn_blue float-end ">View details</button>
        </div>
      </div>

      <div className="cards_detail d-flex align-items-center">
        <div className="container   ">
          <div className="row gx-5 h-100 cards_row">
            <div className="col-6 col-lg-3  ">
              <div className="bg-white rounded p-3 px-4 h-100 d-lg-flex flex-lg-column justify-content-lg-between process_cards">
                <p className="text_gray fs-4">Quick Launch</p>
                <p className="text_gray mt-3 mt-lg-5">
                  You can relay on our amazing features list and also our
                  customer services will be a great experience.
                </p>
                <div>
                  <img src={rocket} className="img-fluid w-100" />
                </div>
              </div>
            </div>
            <div className="col-6  col-lg-3  ">
              <div className="bg-white rounded p-3 px-4 h-100 d-lg-flex flex-lg-column justify-content-lg-between process_cards">
                <p className="text_gray fs-4">Quick Launch</p>
                <p className="text_gray mt-3 mt-lg-5">
                  You can relay on our amazing features list and also our
                  customer services will be a great experience.
                </p>
                <div>
                  <img src={calendar} className="img-fluid w-100" />
                </div>
              </div>
            </div>
            <div className="col-6  col-lg-3 mt-3   ">
              <div className="bg-white rounded p-3 px-4 h-100 d-lg-flex flex-lg-column justify-content-lg-between process_cards">
                <p className="text_gray fs-4">Quick Launch</p>
                <p className="text_gray mt-3 mt-lg-5">
                  You can relay on our amazing features list and also our
                  customer services will be a great experience.
                </p>
                <div>
                  <img src={headphones} className="img-fluid w-100" />
                </div>
              </div>
            </div>
            <div className="col-6  col-lg-3    ">
              <div className="bg-white rounded p-3 px-4 h-100 d-lg-flex flex-lg-column justify-content-lg-between process_cards">
                <p className="text_gray fs-4">Quick Launch</p>
                <p className="text_gray mt-3 mt-lg-5">
                  You can relay on our amazing features list and also our
                  customer services will be a great experience.
                </p>
                <div>
                  <img src={support_female} className="img-fluid w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========================================= Services ====================== */}

      <ServiceWeOffer />
      {/* =========================================  Products ====================== */}

      <div className="products">
        <div className="container py-5">
          <p className="text_dark_blue fs-2  fw-bolder position-relative mt-5 text-center">
            Products & Indrustries we serve
            <span className="position-absolute mt-3 blue_icon"></span>
          </p>
          <br />
          <div style={{ width: "93%" }} className="mt-5 mx-auto">
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex2}
              activeItemIndex={activeItemIndex2}
              numberOfCards={5}
              gutter={10}
              leftChevron={<img src={left_blue_arow} className="img-fluid" />}
              rightChevron={
                <img src={right_blue_arrow} className="img-fluid" />
              }
              outsideChevron
              chevronWidth={chevronWidth}
            >
              <div className="text-center" style={{ height: "200px" }}>
                <img
                  src={EDUCATION}
                  className="img-fluid"
                  style={{ height: "150px" }}
                />
                <p style={{ marginTop: "-20px" }}>EDUCATION</p>
              </div>
              <div className="text-center">
                <img
                  src={HEALTHCARE}
                  className="img-fluid"
                  style={{ height: "150px" }}
                />
                <p style={{ marginTop: "-20px" }}>HEALTHCARE</p>
              </div>
              <div className="text-center">
                <img
                  src={BUSINESS}
                  className="img-fluid"
                  style={{ height: "150px" }}
                />
                <p style={{ marginTop: "-20px" }}>BUSINESS</p>
              </div>
              <div className="text-center">
                <img
                  src={AGRICULTURE}
                  className="img-fluid"
                  style={{ height: "150px" }}
                />
                <p style={{ marginTop: "-20px" }}>AGRICULTURE</p>
              </div>
              <div className="text-center">
                <img
                  src={RETAIL}
                  className="img-fluid"
                  style={{ height: "150px" }}
                />
                <p style={{ marginTop: "-20px" }}>RETAIL</p>
              </div>
              <div className="text-center">
                <img
                  src={HEALTHCARE}
                  className="img-fluid"
                  style={{ height: "150px" }}
                />
                <p style={{ marginTop: "-20px" }}>HEALTHCARE</p>
              </div>
              <div className="text-center">
                <img
                  src={AGRICULTURE}
                  className="img-fluid"
                  style={{ height: "150px" }}
                />
                <p style={{ marginTop: "-20px" }}>AGRICULTURE</p>
              </div>
              <div className="text-center">
                <img
                  src={RETAIL}
                  className="img-fluid"
                  style={{ height: "150px" }}
                />
                <p style={{ marginTop: "-20px" }}>RETAIL</p>
              </div>
            </ItemsCarousel>
          </div>
        </div>
      </div>

      {/* ========================================= Card 1========================================= */}
      <div className="cards card1  ">
        <div className="container">
          <div className="row">
            <div className="col-7 col-md-6 col-lg-8 order-2 order-md-1">
              <img src={IPAD} className="img-fluid ipad" />
            </div>
            <div className="col-12  col-md-6 col-lg-4 order-first order-md-2  ">
              <img
                src={optimus_health}
                className="float-md-end img-fluid w-100 health"
              />
            </div>
            <div className="col-12 col-md-6 order-4 order-md-3 fs-2 text-center text-md-start  ">
              Easily aggregate & streamline all your well-being data, apps &
              expert coaching on a single “Smartphone App”, towards your own
              personalized optimal unique lifestyle.
            </div>
            <div className=" col-5 col-md-6 order-3 order-md-4">
              <img
                src={Optimus_PHONE}
                className="float-end img-fluid  mobile"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center justify-content-md-start">
            <button className="card_btns btn_outline_gray  mt-5 mt-md-0">
              View details
            </button>
          </div>
        </div>
      </div>

      {/* ========================================= Card 2 ========================================= */}
      <div className="cards card2">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4  ">
              <img src={Q_APP_Logo} className="img-fluid health w-100" />
            </div>
            <div className="col-7 col-md-6 col-lg-8 mt-4 mt-md-0">
              <img
                src={Q_APP_Tablet}
                className="float-md-end img-fluid   ipad"
              />
            </div>

            <div className=" col-5 col-md-6  mt-4 mt-md-0">
              <img src={Q_APP_PHONE} className="img-fluid  mobile" />
            </div>
            <div className="col-12 col-md-6 fs-2 text-center text-md-start  ">
              A Network Marketplace to buy, sell and share livestock for free
              anywhere world wide.
            </div>
          </div>
          <div className="d-flex justify-content-center justify-content-md-start">
            <button className="card_btns btn_outline_green mt-5 mt-md-0">
              View details
            </button>
          </div>
        </div>
      </div>

      {/* ========================================= Card 3 ========================================= */}
      <div className="cards card3">
        <div className="container">
          <div className="row">
            <div className="col-7 col-md-6 col-lg-8 order-2 order-md-1">
              <img src={Naseem_Tablet} className="img-fluid ipad" />
            </div>
            <div className="col-12 col-md-6 col-lg-4 order-first order-md-2  ">
              <img
                src={Naseem_Logo}
                className="float-md-center img-fluid  w-75 health"
              />
            </div>
            <div className="col-12 col-md-6 order-4 order-md-3 fs-2 text-center text-md-start  ">
              A learning management system powered by artificial intelligence,
              neuroscience and learning sciences
            </div>
            <div className=" col-5 col-md-6 order-3 order-md-4">
              <img src={Naseem_PHONE} className="float-end img-fluid  mobile" />
            </div>
          </div>
          <div className="d-flex justify-content-center justify-content-md-start">
            <button className="card_btns btn_outline_purple mt-5 mt-md-0">
              View details
            </button>
          </div>
        </div>
      </div>

      {/* ========================================= Card 4 ========================================= */}
      <div className="cards card4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4  ">
              <img src={Stock_Logo} className="img-fluid health w-75" />
            </div>
            <div className="col-7 col-md-6 col-lg-8 mt-4 mt-md-0">
              <img
                src={Stock_Tablet}
                className="float-md-end img-fluid   ipad"
              />
            </div>

            <div className=" col-5 col-md-6  mt-4 mt-md-0">
              <img src={Stock_PHONE} className="img-fluid  mobile" />
            </div>
            <div className="col-12 col-md-6 fs-2 text-center text-md-start  ">
              “StockChain” is an advance logistic solution that gives you
              complete transparency in supply chain and cargo mobility. From
              booking to delivery, you can track every segment of the whole
              process.
            </div>
          </div>
          <div className="d-flex justify-content-center justify-content-md-start">
            <button className=" card_btns btn_outline_blue mt-5 mt-md-0">
              View details
            </button>
          </div>
        </div>
      </div>

      <Footer/>
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
