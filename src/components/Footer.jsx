import React from "react";
import "../Styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="sec aboutus">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            quisquam minus quo illo numquam vel incidunt pariatur hic commodi
            expedita tempora praesentium at iure fugiat ea, quam laborum aperiam
            veritatis.
          </p>
          <ul className="sci">
            <li>
              <a href="#">
                <i className="bx bxl-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bxl-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bxl-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bxl-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="sec quicklinks">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div className="sec contactBx">
          <h2>Contact Info</h2>
          <ul className="info">
            <li>
              <span>
                <i className="bx bxs-map"></i>
              </span>
              <span>
                6444 London street <br /> Brighton PA 33445 <br /> Uk
              </span>
            </li>
            <li>
              <span>
                <i className="bx bx-envelope"></i>
              </span>
              <p>
                <a href="mailto:codemyhobby9@gmail.com">
                  Codemyhobby9@gmail.com
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
