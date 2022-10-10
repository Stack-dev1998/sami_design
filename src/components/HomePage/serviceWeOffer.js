import React, { useState } from "react";
import useWindowSize from "../utils/useWindowSize";
import ItemsCarousel from "react-items-carousel";

import Star_2 from "../../assets/images/Star 2.svg";
import normal_line from "../../assets/images/normal_line.svg";
import active_line from "../../assets/images/active_line.svg";
import html from "../../assets/images/html.svg";
import html2 from "../../assets/images/html_2.svg";
import react_icon from "../../assets/images/react.svg";
import vue from "../../assets/images/vue.svg";
import bootstrap_icon from "../../assets/images/bootstrap.svg";
import left_arow from "../../assets/images/left_arrow.svg";
import right_arrow from "../../assets/images/right_arrow.svg";
import web_development_img from "../../assets/images/HomePage/web_development.svg";
import app_development_img from "../../assets/images/HomePage/app-development.svg";
import desktop_development_img from "../../assets/images/HomePage/desktop-computer.svg";
import database_development_img from "../../assets/images/HomePage/database-management.svg";
import Rectangle_158 from "../../assets/images/Rectangle 158.svg";

export default function ServiceWeOffer() {
  const size = useWindowSize();
  return <div>{size.width > 360 ? <FullScreenView /> : <MobileView />}</div>;
}

function MobileView() {
  return <div></div>;
}

function FullScreenView() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const [activeTab, setActiveTab] = useState(1);
  const webDevelopment =
    "We offer a variety of front end, back end, and progressive web development services, from creating mobile web development solutions and responsive web designs, to building custom web experiences using cutting-edge web technologies.";
  const mobileDevelopment = "Infini8AI provides full-stack mobile application development services. Our professionals can develop and deliver business-centric, highly customized native, cross-platform, and hybrid mobile applications.";
  const destopDevelopment = "The combination of our experience, technical expertise, and deep understanding of the desktop operating system architecture, ensures meeting our clients’ needs and expectations. ";
  const cludeDevelopment = "Cloud native applications help companies speed up time-consuming and demanding tasks performed on optimizing existing apps and building new ones while, at the same time, enhancing user experience. ";
  let activeImg = web_development_img;
  if (activeTab === 2) {
    activeImg = app_development_img;
  } else if (activeTab === 3) {
    activeImg = desktop_development_img;
  } else if (activeTab === 4) {
    activeImg = database_development_img;
  } else {
    activeImg = web_development_img;
  }
  return (
    <div>
      <div className="container service_we_offer d-flex align-items-end justify-content-center py-5">
        <p className="text_yellow fs-2  fw-bolder position-relative text-center">
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
                {activeTab == 1 && "Web Developement"}
                {activeTab == 2 && "Mobile Developement"}
                {activeTab == 3 && "Desktop Applications"}
                {activeTab == 4 && "Cloud Native"}
              </p>
            </div>
            <p className="fs-6">
              {activeTab == 1 && webDevelopment}
              {activeTab == 2 && mobileDevelopment}
              {activeTab == 3 && destopDevelopment}
              {activeTab == 4 && cludeDevelopment}
            </p>
            <div style={{ width: "93%" }} className="mt-5 px-3">
              <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={6}
                gutter={5}
                leftChevron={<img src={left_arow} />}
                rightChevron={<img src={right_arrow} />}
                outsideChevron
                chevronWidth={chevronWidth}
              >
                <img src={html} style={{ width: "100px", height: "100px" }} />
                <img src={html2} style={{ width: "100px", height: "100px" }} />
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
                <img src={html2} style={{ width: "100px", height: "100px" }} />
              </ItemsCarousel>
            </div>
          </div>
          <div className="col-7 px-2 float-end">
            <div className="row">
              <div className="col-sm-5 d-flex flex-column justify-content-between ">
                <img src={activeImg} className="img-fluid  my-auto" />
              </div>
              <div className="col-sm-7 d-flex flex-column justify-content-between h-100 py-5">
                <div className="d-flex align-items-center">
                  <input
                    type="radio"
                    className="h-100"
                    name="a"
                    value={1}
                    checked={activeTab == 1}
                    onChange={() => setActiveTab(1)}
                  />
                  <img src={activeTab == 1 ? active_line : normal_line} />
                  <p className="ms-3 fw-semibold">Web Developement</p>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    type="radio"
                    className="h-100"
                    name="a"
                    value={2}
                    checked={activeTab == 2}
                    onChange={() => setActiveTab(2)}
                  />
                  <img src={activeTab == 2 ? active_line : normal_line} />

                  <p className="ms-3 fw-semibold">Mobile Developement</p>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    type="radio"
                    className="h-100"
                    name="a"
                    value={3}
                    checked={activeTab == 3}
                    onChange={() => setActiveTab(3)}
                  />
                  <img src={activeTab == 3 ? active_line : normal_line} />

                  <p className="ms-3 fw-semibold">Desktop Applications</p>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    type="radio"
                    className="h-100"
                    name="a"
                    value={4}
                    checked={activeTab == 4}
                    onChange={() => setActiveTab(4)}
                  />
                  <img src={activeTab == 4 ? active_line : normal_line} />

                  <p className="ms-3 fw-semibold">Cloud Native</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
}
