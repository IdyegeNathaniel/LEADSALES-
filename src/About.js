import "./About.css";
import Logo from "./Images/Logo-2.png";

function About() {
  return (
    <div className="about">
      <div className="small__container">
        <div className="row">
          <div className="col__2">
            <img src={Logo} alt="" width="300px" />
          </div>

          <div className="col__2">
            <h3 className="tomato">LEADSALES LEASE AND RENTAL SERVICES</h3>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />{" "}
              Atque accusantium quis unde veritatis quod nulla.
            </p>

            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
            <a href="#" className="btn">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
