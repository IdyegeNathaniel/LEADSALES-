import "./Footer.css";
import Logo from "./Images/Logo.png";

function Footer() {
  window.addEventListener("scroll", function () {
    const btnUp = this.document.querySelector("a.down__to__up");
    btnUp.classList.toggle("active", window.scrollY > 0);
  });

  return (
    <div className="footer white">
      <div className="container">
        <div className="row">
          <div className="footer__col__1">
            <img src={Logo} alt="" width="200px" />
          </div>
          <div className="footer__col__2">
            <h4>ABOUT US</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque non nihil error adipisci quia fuga?
            </p>
          </div>

          <div className="footer__col__3">
            <h4>QUICK LINKS</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Testimonial</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="footer__col__4">
            <h4>SUBSCRIBE FOR NEWSLETTER</h4>
            <div className="text__box d__flex align__items__center">
              <div className="text__box__txt">
                <input type="text" name="name" placeholder="Enter Email" />
              </div>
              <div className="button">
                <a href="#" className="btn align__items__center">
                  Send
                </a>
              </div>
            </div>
            <h4>FOLLOW US</h4>
            <div className="social ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="20px"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                className="pink"
              >
                <path d="M336 96c21.2 0 41.3 8.4 56.5 23.5S416 154.8 416 176v160c0 21.2-8.4 41.3-23.5 56.5S357.2 416 336 416H176c-21.2 0-41.3-8.4-56.5-23.5S96 357.2 96 336V176c0-21.2 8.4-41.3 23.5-56.5S154.8 96 176 96h160m0-32H176c-61.6 0-112 50.4-112 112v160c0 61.6 50.4 112 112 112h160c61.6 0 112-50.4 112-112V176c0-61.6-50.4-112-112-112z"></path>
                <path d="M360 176c-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24s-10.8 24-24 24zM256 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64m0-32c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z"></path>
              </svg>

              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="20px"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                className="blue"
              >
                <path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z"></path>
              </svg>

              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="20px"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                className="bblue"
              >
                <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="copyright">
          <hr />
          <h4>
            Copyright © 2022 All Rights Reserved | DEVELOPED BY PROGRAMMER WHO{" "}
          </h4>
        </div>
      </div>

      {/* down__to__up */}

      <a href="#" className="down__to__up white pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-chevron-up"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
      </a>
    </div>
  );
}

export default Footer;
