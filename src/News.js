import React from "react";
import Sale from "./Images/ximg_1.webp";
import Sale2 from "./Images/ximg_2.webp";
import Sale3 from "./Images/ximg_3.webp";
import Call from "./Images/call.png";
import "./News.css";

function News() {
  return (
    <div className="news">
      <div className="title">
        <h2>NEWS & EVENTS</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <img src={Sale} alt="" />
            <h4>Fancy Glass Hangout Chairs</h4>
            <p>FLASH SALE</p>
            <div className="call__details d__flex pointer">
              <img src={Call} alt="" width="20px" />
              <small>911-08-2000</small>
            </div>
          </div>

          <div className="col__3">
            <img src={Sale2} alt="" />
            <h4>6 X 6 Comfortable Bed</h4>
            <p>FLASH SALE</p>
            <div className="call__details d__flex pointer">
              <img src={Call} alt="" width="20px" />
              <small>911-08-2110</small>
            </div>
          </div>

          <div className="col__3">
            <img src={Sale3} alt="" />
            <h4>Adjustable Multipurpose Table</h4>
            <p>FLASH SALE</p>
            <div className="call__details d__flex pointer">
              <img src={Call} alt="" width="20px" />
              <small>911-08-2000</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
