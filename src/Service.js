import "./Service.css";
import Dollar from "./Images/dollar.png";
import Find from "./Images/find-house.png";
import Home from "./Images/house.png";
import Phone from "./Images/phone.png";
import Locator from "./Images/location.png";
import Building from "./Images/building.png";

function Service() {
  return (
    <div className="service">
      <div className="title">
        <h1>SERVICES</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3 d__flex">
            <span className="serv__icon">
              <img src={Find} alt="" width="40px" />
            </span>
            <div className="">
              <h4>FIND PROPERTY</h4>
              <br />
              <p className="gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                vero nihil laboriosam, explicabo voluptatem non!
              </p>
              <br />
              <a href="#" className="tomato">
                Learn More
              </a>
            </div>
          </div>

          <div className="col__3 d__flex">
            <span className="serv__icon">
              <img src={Dollar} alt="" width="40px" />
            </span>
            <div className="">
              <h4>BUY PROPERTY</h4>
              <br />
              <p className="gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                vero nihil laboriosam, explicabo voluptatem non!
              </p>
              <br />
              <a href="#" className="tomato">
                Learn More
              </a>
            </div>
          </div>

          <div className="col__3 d__flex">
            <span className="serv__icon">
              <img src={Home} alt="" width="40px" />
            </span>
            <div className="">
              <h4>BEAUTIFUL HOME</h4>
              <br />
              <p className="gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                vero nihil laboriosam, explicabo voluptatem non!
              </p>
              <br />
              <a href="#" className="tomato">
                Learn More
              </a>
            </div>
          </div>

          <div className="col__3 d__flex">
            <span className="serv__icon">
              <img src={Building} alt="" width="40px" />
            </span>
            <div className="">
              <h4>BUILDINGS & LANDS</h4>
              <br />
              <p className="gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                vero nihil laboriosam, explicabo voluptatem non!
              </p>
              <br />
              <a href="#" className="tomato">
                Learn More
              </a>
            </div>
          </div>

          <div className="col__3 d__flex">
            <span className="serv__icon">
              <img src={Locator} alt="" width="40px" />
            </span>
            <div className="">
              <h4>PROPERTY LOCATOR</h4>
              <br />
              <p className="gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                vero nihil laboriosam, explicabo voluptatem non!
              </p>
              <br />
              <a href="#" className="tomato">
                Learn More
              </a>
            </div>
          </div>

          <div className="col__3 d__flex">
            <span className="serv__icon">
              <img src={Phone} alt="" width="40px" />
            </span>
            <div className="">
              <h4>MOBILE APPS</h4>
              <br />
              <p className="gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                vero nihil laboriosam, explicabo voluptatem non!
              </p>
              <br />
              <a href="#" className="tomato">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
