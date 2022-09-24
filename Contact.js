import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [text, SetText] = useState("");
  const [mail, SetMail] = useState("");

  return (
    <div className="contact" id="contact">
      <div className="title">
        <h2>CONTACT US</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__2">
            <h3>Get In Touch With Us</h3>
            <form action="">
              <div className="name">
                <h4>Full Name</h4>
                <input
                  type="text"
                  name="fname"
                  value={text}
                  onChange={(e) => SetText(e.target.value)}
                />
              </div>
              <div className="mail">
                <h4>Email</h4>
                <input
                  type="email"
                  name="mail"
                  value={mail}
                  onChange={(e) => SetMail(e.target.value)}
                />
              </div>
              <div className="subject">
                <h4>Subject</h4>
                <input type="text" name="subj" id="" />
              </div>
              <div className="textarea">
                <h4>Message</h4>
                <textarea
                  name="textarea"
                  placeholder="Write Your Message"
                  cols="30"
                  rows="7"
                ></textarea>
              </div>
              <br />
              <a href="#" className="btn">
                Send Message
              </a>
            </form>
          </div>

          <div className="col__2">
            <h4 className="tomato">Address</h4>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              maxime.
            </p>
            <br />
            <p>Lorem ipsum dolor sit amet.</p>
            <br />
            <br />
            <h4 className="tomato">Phone</h4>

            <p>+234 565 5855</p>
            <br />
            <br />
            <h4 className="tomato">Email Address</h4>
            <p>helpdesk@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
