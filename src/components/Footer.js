import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer class="footer-distributed">
        <div class="footer-right">
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa fa-github"></i>
          </a>
        </div>

        <div class="footer-left">
          <p class="footer-links">
            <a class="link-1" href="#">
              Home
            </a>

            <a href="#">Search</a>

            <a href="#">Popular Movies</a>

            <a href="#">About</a>
          </p>

          <p>Movie DB &copy; 2022</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
