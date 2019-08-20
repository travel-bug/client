import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a className="about-page-link footer-link" href="/about" >
          about
        </a>
        <a className="about-press-link footer-link" href="" >
          press
        </a>
        <a className="about-contact-link footer-link" href="" >
          contact us
        </a>
        <a className="about-privacy-link footer-link" href="" >
          privacy
        </a>
        <a className="about-terms-link footer-link" href="" >
          terms
        </a>
        <span>&copy; travel bug 2019</span>
      </div>
    </footer>
  );
}

export default Footer;