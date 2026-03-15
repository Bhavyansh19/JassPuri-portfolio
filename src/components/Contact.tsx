import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container footer-section" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">
          <div className="contact-box">
  <h4 className="education-title">Email</h4>
  <p>
    <a href="mailto:Jasseeratsingh@gmail.com" data-cursor="disable">
      Jasseeratsingh@gmail.com
    </a>
  </p>

  <h4 className="education-title">Education</h4>
  <p className="education-line">Bachelor in Management Studies</p>
  <p className="education-line">Masters in Marketing</p>
  <p className="education-line">Masters in IT</p>
</div>

          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/jass08"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>

            <a
              href="https://www.instagram.com/seerat_925/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>

          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>JASS PURI</span>
            </h2>

            <h5>
              <MdCopyright /> 2026 Jass Puri. All rights reserved.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;