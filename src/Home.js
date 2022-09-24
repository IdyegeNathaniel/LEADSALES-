import "./Home.css";
import Logo from "./Images/Logo.png";
import { useState } from "react";

function Home() {
  const [show, setShow] = useState(false);

  return (
    <div className="home">
      <div className="container">
        <div className="nav__bar">
          <div className="logo">
            <img src={Logo} />
          </div>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#agent">Agents</a>
              </li>
              <li>
                <a href="#service">Service</a>
              </li>

              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </nav>

          {/* SIDE MENU */}
          <div className="toggle__menu pointer">
            <svg
              onClick={() => {
                setShow(!show);
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              class="bi bi-justify"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar">
                <li className="sideNavbar">
                  <a href="#">Home</a>
                </li>
                <li className="sideNavbar">
                  <a href="#agent">Agents</a>
                </li>
                <li className="sideNavbar">
                  <a href="#service">Services</a>
                </li>
                <li className="sideNavbar">
                  <a href="#news">News</a>
                </li>
                <li className="sideNavbar">
                  <a href="#contact">Contact US</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        <div className="content text__align__center white">
          <h3>We Are Your Realtor!</h3>
          <br></br>
          <h1>
            Buy And Sell <br></br> Your Property Here
          </h1>
          <a href="#" className="btn">
            Connect With Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
