import React from "react";
import "./Testimonial.css";
import Customer1 from "./Images/customer1.webp";
import Customer2 from "./Images/customer2.webp";
import Customer3 from "./Images/customer3.webp";

function Testimonial() {
  return (
    <div className="testimonial">
      <div className="title">
        <h1>TESTIMONIAL</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__2">
            <div className="profile d__flex align__items__center">
              <img src={Customer1} alt="" />
              <div className="customer__name">
                <h4>JAMES DOE</h4>
                <div className="rating">
                  <ul className="d__flex">
                    <li>&#9733;</li>
                    <li>&#9733;</li>
                    <li>&#9733;</li>
                    <li>&#9733;</li>
                    <li>&#10025;</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="customer__detail">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, soluta reprehenderit voluptatum sunt velit fugiat
                atque molestiae vero blanditiis quas maxime vitae excepturi quia
                mollitia.
              </p>
            </div>
          </div>

          <div className="col__2">
            <div className="profile d__flex align__items__center">
              <img src={Customer2} alt="" />
              <div className="customer__name">
                <h4>ALLAN PRICE</h4>
                <div className="rating">
                  <ul className="d__flex">
                    <li>&#9733;</li>
                    <li>&#9733;</li>
                    <li>&#9733;</li>
                    <li>&#10025;</li>
                    <li>&#10025;</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="customer__detail">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, soluta reprehenderit voluptatum sunt velit fugiat
                atque molestiae vero blanditiis quas maxime vitae excepturi quia
                mollitia.
              </p>
            </div>
          </div>

          <div className="col__2">
            <div className="profile d__flex align__items__center">
              <img src={Customer3} alt="" />
              <div className="customer__name">
                <h4>SEAN SMITH</h4>
                <div className="rating">
                  <ul className="d__flex">
                    <li>&#9733;</li>
                    <li>&#10025;</li>
                    <li>&#10025;</li>
                    <li>&#10025;</li>
                    <li>&#10025;</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="customer__detail">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, soluta reprehenderit voluptatum sunt velit fugiat
                atque molestiae vero blanditiis quas maxime vitae excepturi quia
                mollitia.
              </p>
            </div>
          </div>

          <div className="col__2">
            <div className="profile d__flex align__items__center">
              <img src={Customer1} alt="" />
              <div className="customer__name">
                <h4>JAMES OSCAR</h4>
                <div className="rating">
                  <ul className="d__flex">
                    <li>&#9733;</li>
                    <li>&#9733;</li>
                    <li>&#9733;</li>
                    <li>&#9733;</li>
                    <li>&#9733;</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="customer__detail">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, soluta reprehenderit voluptatum sunt velit fugiat
                atque molestiae vero blanditiis quas maxime vitae excepturi quia
                mollitia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
