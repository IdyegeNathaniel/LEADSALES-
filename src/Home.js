import "./Home.css";
import Logo from "./Images/Logo.png";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="nav__bar">
          <div className="logo">
            <img src={Logo} width="180px" />
          </div>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Agents</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
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
