import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/dipesh-kumawat-9074a327b/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — dipesh-kumawat
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech – Computer Science & Engineering (AI), Mandsaur Institute of Technology — 2023–2027
            </p>
            <p>
              Senior Secondary (XII) CBSE – Science, Aditya Public School, Mandsaur (81%) — 2023
            </p>
          </div>
          <div className="contact-box">
            <h4>Contact & Social</h4>
            <a
              href="mailto:dipeshkumawat4321@gmail.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
            <a
              href="https://github.com/dipesh-25"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/dipesh-kumawat-9074a327b/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Dipesh Kumawat</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
