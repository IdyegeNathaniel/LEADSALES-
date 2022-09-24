import "./System.css";
import Dollar from "./Images/dollar.png";
import Find from "./Images/find-house.png";
import Building from "./Images/building.png";

function System() {
  return (
    <div className="system">
      <div className="system__container text__align__center">
        <h2>HOW IT WORKS</h2>
        <div className="row">
          <div className="col__3 text__align__center">
            <div className="icon d__flex align__items__center justify__content__center">
              <span>
                <p>01.</p>
              </span>
              <span>
                <img src={Find} alt="" width="40px" />
              </span>
              <br />
            </div>
            <h4>FIND PROPERTY</h4>
            <br />
            <p>Lorem ipsum dolor sit, amet elit. Nobis, expedita?</p>
          </div>

          <div className="col__3 text__align__center">
            <div className="icon d__flex align__items__center justify__content__center">
              <span>
                <p>02.</p>
              </span>
              <span>
                <img src={Dollar} alt="" width="40px" />
              </span>
              <br />
            </div>
            <h4>BUY PROPERTY</h4>
            <br />
            <p>Lorem ipsum dolor sit, amet elit. Nobis, expedita?</p>
          </div>

          <div className="col__3 text__align__center">
            <div className="icon d__flex align__items__center justify__content__center">
              <span>
                <p>03.</p>
              </span>
              <span>
                <img src={Building} alt="" width="40px" />
              </span>
              <br />
            </div>
            <h4>RENT APARTMENT</h4>
            <br />
            <p>Lorem ipsum dolor sit, amet elit. Nobis, expedita?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default System;
