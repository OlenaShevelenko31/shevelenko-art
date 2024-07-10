import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div>
      <footer className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <span className="text-muted">
          © {new Date().getFullYear()} Shevelenko.art
        </span>

        <span className="text-muted ">
          <p>Follow  on:</p>
          <a href="#" className="social-icon " >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="#" className="social-icon m-1">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </span>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
          <li className="nav-item"><a href="/work" className="nav-link px-2 text-muted">Work</a></li>
          <li className="nav-item"><a href="/contact" className="nav-link px-2 text-muted">Contact</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
