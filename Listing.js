import React from "react";
import "./Listing.css";
import Property1 from "./Images/property1.webp";
import Property2 from "./Images/property2.webp";
import Property3 from "./Images/property3.jpg.webp";

function Listing() {
  return (
    <div className="listing">
      <div className="small__container">
        <div className="row">
          <div className="col__3">
            <div className="col__hover">
              <img src={Property1} alt="" />
              <div className="tag">
                <h2>20th Abacha street</h2>
                <h3 className="gray normal">V.I Lagos</h3>
                <p className="gray">7,000,000 NGN</p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="col__hover">
              <img src={Property2} alt="" />
              <div className="tag">
                <h2>20th Abacha street</h2>
                <h3 className="gray normal">V.I Lagos</h3>
                <p className="gray">7,000,000 NGN</p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="col__hover">
              <img src={Property3} alt="" />
              <div className="tag">
                <h2>20th Abacha street</h2>
                <h3 className="gray normal">V.I Lagos</h3>
                <p className="gray">7,000,000 NGN</p>
              </div>
            </div>
          </div>

          <div className="col__3 pointer">
            <div className="col__hover">
              <img src={Property3} alt="" />
              <div className="tag">
                <h2>20th Abacha street</h2>
                <h3 className="gray normal">V.I Lagos</h3>
                <p className="gray">7,000,000 NGN</p>
              </div>
            </div>
          </div>

          <div className="col__3 pointer">
            <div className="col__hover">
              <img src={Property1} alt="" />
              <div className="tag">
                <h2>20th Abacha street</h2>
                <h3 className="gray normal">V.I Lagos</h3>
                <p className="gray">7,000,000 NGN</p>
              </div>
            </div>
          </div>

          <div className="col__3 pointer">
            <div className="col__hover">
              <img src={Property2} alt="" />
              <div className="tag">
                <h2>20th Abacha street</h2>
                <h3 className="gray normal">V.I Lagos</h3>
                <p className="gray">7,000,000 NGN</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row"></div>
      </div>
    </div>
  );
}

export default Listing;
